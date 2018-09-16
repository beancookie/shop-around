'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../config/constant.js');

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_wepy$page) {
  _inherits(Search, _wepy$page);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '查询商品历史价格',
      usingComponents: {
        'wxc-button': '../packages/@minui/wxc-button/dist/index',
        'wxc-flex': '../packages/@minui/wxc-flex/dist/index',
        'wxc-panel': '../packages/@minui/wxc-panel/dist/index',
        'wxc-tab': '../packages/@minui/wxc-tab/dist/index',
        'wxc-tab-panel': '../packages/@minui/wxc-tab/dist/panel',
        'wxc-list': '../packages/@minui/wxc-list/dist/index',
        'wxc-loadmore': '../packages/@minui/wxc-loadmore/dist/index',
        'wxc-dialog': '../packages/@minui/wxc-dialog/dist/index',
        'wxc-icon': '../packages/@minui/wxc-icon/dist/index'
      }
    }, _this.data = {
      hint: '请将购物App分享的链接粘贴到此处',
      search: '查询历史价格',
      clean: '清空历史记录',
      searchContent: '',
      searchList: [],
      isEnd: true
    }, _this.methods = {
      toHistory: function toHistory() {
        if (this.searchContent && this.searchContent != '') {
          this.getCommodity();
        }
      },
      eidtTextarea: function eidtTextarea(textarea) {
        var searchContent = textarea.detail.value;
        if (searchContent && searchContent != '') {
          this.searchContent = searchContent;
          this.getCommodity();
        }
      },
      doClean: function doClean() {
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog');
        dialogComponent && dialogComponent.show();
      },
      onConfirm: function onConfirm() {
        wx.removeStorageSync(_constant.SEARCH_HISTORY);
        this.searchList = [];
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog');
        dialogComponent && dialogComponent.hide();
      },
      onCancel: function onCancel() {
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog');
        dialogComponent && dialogComponent.hide();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'getCommodity',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.getCommodityByUrl({
                  query: {
                    url: this.searchContent
                  }
                });

              case 2:
                res = _context.sent;

                if (res.statusCode == 200) {
                  this.$preload('commodity', res.data);
                  this.searchList.push({ desc: res.data.name, icon: 'star' });
                  wx.setStorageSync(_constant.SEARCH_HISTORY, this.searchList);
                  this.$navigate('./history');
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCommodity() {
        return _ref2.apply(this, arguments);
      }

      return getCommodity;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var searchList = wx.getStorageSync(_constant.SEARCH_HISTORY);
      if (searchList) {
        this.searchList = searchList;
      }
    }
  }]);

  return Search;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Search , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImhpbnQiLCJzZWFyY2giLCJjbGVhbiIsInNlYXJjaENvbnRlbnQiLCJzZWFyY2hMaXN0IiwiaXNFbmQiLCJtZXRob2RzIiwidG9IaXN0b3J5IiwiZ2V0Q29tbW9kaXR5IiwiZWlkdFRleHRhcmVhIiwidGV4dGFyZWEiLCJkZXRhaWwiLCJ2YWx1ZSIsImRvQ2xlYW4iLCJkaWFsb2dDb21wb25lbnQiLCIkd3hwYWdlIiwic2VsZWN0Q29tcG9uZW50Iiwic2hvdyIsIm9uQ29uZmlybSIsInd4IiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJTRUFSQ0hfSElTVE9SWSIsImhpZGUiLCJvbkNhbmNlbCIsImFwaSIsImdldENvbW1vZGl0eUJ5VXJsIiwicXVlcnkiLCJ1cmwiLCJyZXMiLCJzdGF0dXNDb2RlIiwiJHByZWxvYWQiLCJwdXNoIiwiZGVzYyIsIm5hbWUiLCJpY29uIiwic2V0U3RvcmFnZVN5bmMiLCIkbmF2aWdhdGUiLCJnZXRTdG9yYWdlU3luYyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsVUFEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysc0JBQWMsMENBREM7QUFFZixvQkFBWSx3Q0FGRztBQUdmLHFCQUFhLHlDQUhFO0FBSWYsbUJBQVcsdUNBSkk7QUFLZix5QkFBaUIsdUNBTEY7QUFNZixvQkFBWSx3Q0FORztBQU9mLHdCQUFnQiw0Q0FQRDtBQVFmLHNCQUFjLDBDQVJDO0FBU2Ysb0JBQVk7QUFURztBQUZWLEssUUFjVEMsSSxHQUFPO0FBQ0xDLFlBQU0sbUJBREQ7QUFFTEMsY0FBUSxRQUZIO0FBR0xDLGFBQU8sUUFIRjtBQUlMQyxxQkFBZSxFQUpWO0FBS0xDLGtCQUFZLEVBTFA7QUFNTEMsYUFBTztBQU5GLEssUUFRUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixZQUFJLEtBQUtKLGFBQUwsSUFBc0IsS0FBS0EsYUFBTCxJQUFzQixFQUFoRCxFQUFvRDtBQUNsRCxlQUFLSyxZQUFMO0FBQ0Q7QUFDRixPQUxPO0FBTVJDLGtCQU5RLHdCQU1LQyxRQU5MLEVBTWU7QUFDckIsWUFBSVAsZ0JBQWdCTyxTQUFTQyxNQUFULENBQWdCQyxLQUFwQztBQUNBLFlBQUlULGlCQUFpQkEsaUJBQWlCLEVBQXRDLEVBQTBDO0FBQ3hDLGVBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsZUFBS0ssWUFBTDtBQUNEO0FBQ0YsT0FaTztBQWFSSyxhQWJRLHFCQWFFO0FBQ1IsWUFBSUMsa0JBQWtCLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixhQUE3QixDQUF0QjtBQUNBRiwyQkFBbUJBLGdCQUFnQkcsSUFBaEIsRUFBbkI7QUFDRCxPQWhCTztBQWlCUkMsZUFqQlEsdUJBaUJLO0FBQ1hDLFdBQUdDLGlCQUFILENBQXFCQyx3QkFBckI7QUFDQSxhQUFLakIsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFlBQUlVLGtCQUFrQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsYUFBN0IsQ0FBdEI7QUFDQUYsMkJBQW1CQSxnQkFBZ0JRLElBQWhCLEVBQW5CO0FBQ0QsT0F0Qk87QUF1QlJDLGNBdkJRLHNCQXVCSTtBQUNWLFlBQUlULGtCQUFrQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsYUFBN0IsQ0FBdEI7QUFDQUYsMkJBQW1CQSxnQkFBZ0JRLElBQWhCLEVBQW5CO0FBQ0Q7QUExQk8sSzs7Ozs7Ozs7Ozs7Ozt1QkE2QlVFLGNBQUlDLGlCQUFKLENBQXNCO0FBQ3RDQyx5QkFBTztBQUNMQyx5QkFBSyxLQUFLeEI7QUFETDtBQUQrQixpQkFBdEIsQzs7O0FBQVp5QixtQjs7QUFLTixvQkFBSUEsSUFBSUMsVUFBSixJQUFrQixHQUF0QixFQUEyQjtBQUN6Qix1QkFBS0MsUUFBTCxDQUFjLFdBQWQsRUFBMkJGLElBQUk3QixJQUEvQjtBQUNBLHVCQUFLSyxVQUFMLENBQWdCMkIsSUFBaEIsQ0FBcUIsRUFBQ0MsTUFBTUosSUFBSTdCLElBQUosQ0FBU2tDLElBQWhCLEVBQXNCQyxNQUFNLE1BQTVCLEVBQXJCO0FBQ0FmLHFCQUFHZ0IsY0FBSCxDQUFrQmQsd0JBQWxCLEVBQWtDLEtBQUtqQixVQUF2QztBQUNBLHVCQUFLZ0MsU0FBTCxDQUFlLFdBQWY7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVNO0FBQ1AsVUFBSWhDLGFBQWFlLEdBQUdrQixjQUFILENBQWtCaEIsd0JBQWxCLENBQWpCO0FBQ0EsVUFBSWpCLFVBQUosRUFBZ0I7QUFDZCxhQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEO0FBQ0Y7Ozs7RUFyRWlDa0MsZUFBS0MsSTs7a0JBQXBCNUMsTSIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB7XHJcbiAgICBTRUFSQ0hfSElTVE9SWVxyXG4gIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5p+l6K+i5ZWG5ZOB5Y6G5Y+y5Lu35qC8JyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy1idXR0b24nOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1idXR0b24vZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1mbGV4JzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcGFuZWwvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy10YWInOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXHJcbiAgICAgICAgJ3d4Yy1saXN0JzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGlzdC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWxvYWRtb3JlJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZG1vcmUvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1kaWFsb2cnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1kaWFsb2cvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1pY29uJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBoaW50OiAn6K+35bCG6LSt54mpQXBw5YiG5Lqr55qE6ZO+5o6l57KY6LS05Yiw5q2k5aSEJyxcclxuICAgICAgc2VhcmNoOiAn5p+l6K+i5Y6G5Y+y5Lu35qC8JyxcclxuICAgICAgY2xlYW46ICfmuIXnqbrljoblj7LorrDlvZUnLFxyXG4gICAgICBzZWFyY2hDb250ZW50OiAnJyxcclxuICAgICAgc2VhcmNoTGlzdDogW10sXHJcbiAgICAgIGlzRW5kOiB0cnVlXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0b0hpc3RvcnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQ29udGVudCAmJiB0aGlzLnNlYXJjaENvbnRlbnQgIT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuZ2V0Q29tbW9kaXR5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVpZHRUZXh0YXJlYSh0ZXh0YXJlYSkge1xyXG4gICAgICAgIGxldCBzZWFyY2hDb250ZW50ID0gdGV4dGFyZWEuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgaWYgKHNlYXJjaENvbnRlbnQgJiYgc2VhcmNoQ29udGVudCAhPSAnJykge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hDb250ZW50ID0gc2VhcmNoQ29udGVudFxyXG4gICAgICAgICAgdGhpcy5nZXRDb21tb2RpdHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZG9DbGVhbigpIHtcclxuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnKVxyXG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudCAmJiBkaWFsb2dDb21wb25lbnQuc2hvdygpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ29uZmlybSAoKSB7XHJcbiAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoU0VBUkNIX0hJU1RPUlkpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hMaXN0ID0gW11cclxuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnKVxyXG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudCAmJiBkaWFsb2dDb21wb25lbnQuaGlkZSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2FuY2VsICgpIHtcclxuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnKVxyXG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudCAmJiBkaWFsb2dDb21wb25lbnQuaGlkZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGdldENvbW1vZGl0eSgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldENvbW1vZGl0eUJ5VXJsKHtcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgdXJsOiB0aGlzLnNlYXJjaENvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICB0aGlzLiRwcmVsb2FkKCdjb21tb2RpdHknLCByZXMuZGF0YSlcclxuICAgICAgICB0aGlzLnNlYXJjaExpc3QucHVzaCh7ZGVzYzogcmVzLmRhdGEubmFtZSwgaWNvbjogJ3N0YXInfSlcclxuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhTRUFSQ0hfSElTVE9SWSwgdGhpcy5zZWFyY2hMaXN0KVxyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCcuL2hpc3RvcnknKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIGxldCBzZWFyY2hMaXN0ID0gd3guZ2V0U3RvcmFnZVN5bmMoU0VBUkNIX0hJU1RPUlkpXHJcbiAgICAgIGlmIChzZWFyY2hMaXN0KSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hMaXN0ID0gc2VhcmNoTGlzdFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=