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
                  console.log('查询历史价格成功');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImhpbnQiLCJzZWFyY2giLCJjbGVhbiIsInNlYXJjaENvbnRlbnQiLCJzZWFyY2hMaXN0IiwiaXNFbmQiLCJtZXRob2RzIiwidG9IaXN0b3J5IiwiZ2V0Q29tbW9kaXR5IiwiZWlkdFRleHRhcmVhIiwidGV4dGFyZWEiLCJkZXRhaWwiLCJ2YWx1ZSIsImRvQ2xlYW4iLCJkaWFsb2dDb21wb25lbnQiLCIkd3hwYWdlIiwic2VsZWN0Q29tcG9uZW50Iiwic2hvdyIsIm9uQ29uZmlybSIsInd4IiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJTRUFSQ0hfSElTVE9SWSIsImhpZGUiLCJvbkNhbmNlbCIsImFwaSIsImdldENvbW1vZGl0eUJ5VXJsIiwicXVlcnkiLCJ1cmwiLCJyZXMiLCJzdGF0dXNDb2RlIiwiY29uc29sZSIsImxvZyIsIiRwcmVsb2FkIiwicHVzaCIsImRlc2MiLCJuYW1lIiwiaWNvbiIsInNldFN0b3JhZ2VTeW5jIiwiJG5hdmlnYXRlIiwiZ2V0U3RvcmFnZVN5bmMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFVBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHNCQUFjLDBDQURDO0FBRWYsb0JBQVksd0NBRkc7QUFHZixxQkFBYSx5Q0FIRTtBQUlmLG1CQUFXLHVDQUpJO0FBS2YseUJBQWlCLHVDQUxGO0FBTWYsb0JBQVksd0NBTkc7QUFPZix3QkFBZ0IsNENBUEQ7QUFRZixzQkFBYywwQ0FSQztBQVNmLG9CQUFZO0FBVEc7QUFGVixLLFFBY1RDLEksR0FBTztBQUNMQyxZQUFNLG1CQUREO0FBRUxDLGNBQVEsUUFGSDtBQUdMQyxhQUFPLFFBSEY7QUFJTEMscUJBQWUsRUFKVjtBQUtMQyxrQkFBWSxFQUxQO0FBTUxDLGFBQU87QUFORixLLFFBUVBDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJO0FBQ1YsWUFBSSxLQUFLSixhQUFMLElBQXNCLEtBQUtBLGFBQUwsSUFBc0IsRUFBaEQsRUFBb0Q7QUFDbEQsZUFBS0ssWUFBTDtBQUNEO0FBQ0YsT0FMTztBQU1SQyxrQkFOUSx3QkFNS0MsUUFOTCxFQU1lO0FBQ3JCLFlBQUlQLGdCQUFnQk8sU0FBU0MsTUFBVCxDQUFnQkMsS0FBcEM7QUFDQSxZQUFJVCxpQkFBaUJBLGlCQUFpQixFQUF0QyxFQUEwQztBQUN4QyxlQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLGVBQUtLLFlBQUw7QUFDRDtBQUNGLE9BWk87QUFhUkssYUFiUSxxQkFhRTtBQUNSLFlBQUlDLGtCQUFrQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsYUFBN0IsQ0FBdEI7QUFDQUYsMkJBQW1CQSxnQkFBZ0JHLElBQWhCLEVBQW5CO0FBQ0QsT0FoQk87QUFpQlJDLGVBakJRLHVCQWlCSztBQUNYQyxXQUFHQyxpQkFBSCxDQUFxQkMsd0JBQXJCO0FBQ0EsYUFBS2pCLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxZQUFJVSxrQkFBa0IsS0FBS0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCLGFBQTdCLENBQXRCO0FBQ0FGLDJCQUFtQkEsZ0JBQWdCUSxJQUFoQixFQUFuQjtBQUNELE9BdEJPO0FBdUJSQyxjQXZCUSxzQkF1Qkk7QUFDVixZQUFJVCxrQkFBa0IsS0FBS0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCLGFBQTdCLENBQXRCO0FBQ0FGLDJCQUFtQkEsZ0JBQWdCUSxJQUFoQixFQUFuQjtBQUNEO0FBMUJPLEs7Ozs7Ozs7Ozs7Ozs7dUJBNkJVRSxjQUFJQyxpQkFBSixDQUFzQjtBQUN0Q0MseUJBQU87QUFDTEMseUJBQUssS0FBS3hCO0FBREw7QUFEK0IsaUJBQXRCLEM7OztBQUFaeUIsbUI7O0FBS04sb0JBQUlBLElBQUlDLFVBQUosSUFBa0IsR0FBdEIsRUFBMkI7QUFDekJDLDBCQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLHVCQUFLQyxRQUFMLENBQWMsV0FBZCxFQUEyQkosSUFBSTdCLElBQS9CO0FBQ0EsdUJBQUtLLFVBQUwsQ0FBZ0I2QixJQUFoQixDQUFxQixFQUFDQyxNQUFNTixJQUFJN0IsSUFBSixDQUFTb0MsSUFBaEIsRUFBc0JDLE1BQU0sTUFBNUIsRUFBckI7QUFDQWpCLHFCQUFHa0IsY0FBSCxDQUFrQmhCLHdCQUFsQixFQUFrQyxLQUFLakIsVUFBdkM7QUFDQSx1QkFBS2tDLFNBQUwsQ0FBZSxXQUFmO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFTTtBQUNQLFVBQUlsQyxhQUFhZSxHQUFHb0IsY0FBSCxDQUFrQmxCLHdCQUFsQixDQUFqQjtBQUNBLFVBQUlqQixVQUFKLEVBQWdCO0FBQ2QsYUFBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDtBQUNGOzs7O0VBdEVpQ29DLGVBQUtDLEk7O2tCQUFwQjlDLE0iLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQge1xyXG4gICAgU0VBUkNIX0hJU1RPUllcclxuICB9IGZyb20gJy4uL2NvbmZpZy9jb25zdGFudCdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+afpeivouWVhuWTgeWOhuWPsuS7t+agvCcsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICd3eGMtYnV0dG9uJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYnV0dG9uL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1wYW5lbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXBhbmVsL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAgICd3eGMtbGlzdCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxpc3QvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1sb2FkbW9yZSc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxvYWRtb3JlL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtZGlhbG9nJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZGlhbG9nL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaGludDogJ+ivt+Wwhui0reeJqUFwcOWIhuS6q+eahOmTvuaOpeeymOi0tOWIsOatpOWkhCcsXHJcbiAgICAgIHNlYXJjaDogJ+afpeivouWOhuWPsuS7t+agvCcsXHJcbiAgICAgIGNsZWFuOiAn5riF56m65Y6G5Y+y6K6w5b2VJyxcclxuICAgICAgc2VhcmNoQ29udGVudDogJycsXHJcbiAgICAgIHNlYXJjaExpc3Q6IFtdLFxyXG4gICAgICBpc0VuZDogdHJ1ZVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgdG9IaXN0b3J5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaENvbnRlbnQgJiYgdGhpcy5zZWFyY2hDb250ZW50ICE9ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLmdldENvbW1vZGl0eSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlaWR0VGV4dGFyZWEodGV4dGFyZWEpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQ29udGVudCA9IHRleHRhcmVhLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIGlmIChzZWFyY2hDb250ZW50ICYmIHNlYXJjaENvbnRlbnQgIT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoQ29udGVudCA9IHNlYXJjaENvbnRlbnRcclxuICAgICAgICAgIHRoaXMuZ2V0Q29tbW9kaXR5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRvQ2xlYW4oKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ0NvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtZGlhbG9nJylcclxuICAgICAgICBkaWFsb2dDb21wb25lbnQgJiYgZGlhbG9nQ29tcG9uZW50LnNob3coKVxyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbmZpcm0gKCkge1xyXG4gICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKFNFQVJDSF9ISVNUT1JZKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoTGlzdCA9IFtdXHJcbiAgICAgICAgbGV0IGRpYWxvZ0NvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtZGlhbG9nJylcclxuICAgICAgICBkaWFsb2dDb21wb25lbnQgJiYgZGlhbG9nQ29tcG9uZW50LmhpZGUoKVxyXG4gICAgICB9LFxyXG4gICAgICBvbkNhbmNlbCAoKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ0NvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtZGlhbG9nJylcclxuICAgICAgICBkaWFsb2dDb21wb25lbnQgJiYgZGlhbG9nQ29tcG9uZW50LmhpZGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRDb21tb2RpdHkoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXRDb21tb2RpdHlCeVVybCh7XHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIHVybDogdGhpcy5zZWFyY2hDb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+afpeivouWOhuWPsuS7t+agvOaIkOWKnycpXHJcbiAgICAgICAgdGhpcy4kcHJlbG9hZCgnY29tbW9kaXR5JywgcmVzLmRhdGEpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hMaXN0LnB1c2goe2Rlc2M6IHJlcy5kYXRhLm5hbWUsIGljb246ICdzdGFyJ30pXHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoU0VBUkNIX0hJU1RPUlksIHRoaXMuc2VhcmNoTGlzdClcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9oaXN0b3J5JylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBsZXQgc2VhcmNoTGlzdCA9IHd4LmdldFN0b3JhZ2VTeW5jKFNFQVJDSF9ISVNUT1JZKVxyXG4gICAgICBpZiAoc2VhcmNoTGlzdCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTGlzdCA9IHNlYXJjaExpc3RcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19