'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../config/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rank = function (_wepy$page) {
  _inherits(Rank, _wepy$page);

  function Rank() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rank);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rank.__proto__ || Object.getPrototypeOf(Rank)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '降价排行榜',
      usingComponents: {
        'wxc-flex': '../packages/@minui/wxc-flex/dist/index',
        'wxc-label': '../packages/@minui/wxc-label/dist/index',
        'wxc-tab': '../packages/@minui/wxc-tab/dist/index',
        'wxc-tab-panel': '../packages/@minui/wxc-tab/dist/panel',
        'wxc-price': '../packages/@minui/wxc-price/dist/index',
        'wxc-loadmore': '../packages/@minui/wxc-loadmore/dist/index',
        'wxc-wxc-loading': '../packages/@minui/wxc-loading/dist/index',
        'wxc-panel': '../packages/@minui/wxc-panel/dist/index'
      }
    }, _this.data = {
      isEnd: false,
      days: [1, 3, 7, 30],
      loadText: "~加载中~",
      tabs: [{ title: '一天' }, { title: '三天' }, { title: '一周' }, { title: '一月' }],
      depreciates: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Rank, [{
    key: 'onTabChange',
    value: function onTabChange(_ref2) {
      var _this2 = this;

      var detail = _ref2.detail;

      var day = this.days[detail.key];
      var ranks = wx.getStorageSync(_constant.RANK + ":" + day);
      var category = wx.getStorageSync(_constant.CATEGORY);
      if (ranks) {
        ranks.forEach(function (e) {
          if (e.category == category) {
            var index = 1;
            e.depreciateDOList.forEach(function (ee) {
              _this2.depreciates.push({ rank: index++, name: ee.name, price: ee.depreciate, imgUrl: ee.imgUrl });
            });
          }
        });
      } else {
        this.depreciates = [];
        wx.request({
          url: 'http://localhost:7004/analyse/rank',
          data: {
            day: day
          },
          success: function success(res) {
            var data = res.data;
            wx.setStorageSync(_constant.RANK + ":" + day, data);
          }
        });
      }
      console.log(day);
      console.log(this.depreciates);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var ranks = wx.getStorageSync(_constant.RANK + ":1");
      if (!ranks) {
        wx.request({
          url: 'http://localhost:7004/analyse/rank',
          data: {
            day: 1
          },
          success: function success(res) {
            var data = res.data;
            wx.setStorageSync(_constant.RANK + ":1", data);
          }
        });
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.isEnd = true;
      this.loadText = '~没有更多了~';
    }
  }]);

  return Rank;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Rank , 'pages/commodity'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vZGl0eS5qcyJdLCJuYW1lcyI6WyJSYW5rIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJpc0VuZCIsImRheXMiLCJsb2FkVGV4dCIsInRhYnMiLCJ0aXRsZSIsImRlcHJlY2lhdGVzIiwiZGV0YWlsIiwiZGF5Iiwia2V5IiwicmFua3MiLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwiUkFOSyIsImNhdGVnb3J5IiwiQ0FURUdPUlkiLCJmb3JFYWNoIiwiZSIsImluZGV4IiwiZGVwcmVjaWF0ZURPTGlzdCIsInB1c2giLCJyYW5rIiwibmFtZSIsImVlIiwicHJpY2UiLCJkZXByZWNpYXRlIiwiaW1nVXJsIiwicmVxdWVzdCIsInVybCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7O0lBS3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksd0NBREc7QUFFZixxQkFBYSx5Q0FGRTtBQUdmLG1CQUFXLHVDQUhJO0FBSWYseUJBQWlCLHVDQUpGO0FBS2YscUJBQWEseUNBTEU7QUFNZix3QkFBZ0IsNENBTkQ7QUFPZiwyQkFBbUIsMkNBUEo7QUFRZixxQkFBYTtBQVJFO0FBRlYsSyxRQWFUQyxJLEdBQU87QUFDTEMsYUFBTyxLQURGO0FBRUxDLFlBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLENBRkQ7QUFHTEMsZ0JBQVUsT0FITDtBQUlMQyxZQUFNLENBQ0osRUFBQ0MsT0FBTyxJQUFSLEVBREksRUFFSixFQUFDQSxPQUFPLElBQVIsRUFGSSxFQUdKLEVBQUNBLE9BQU8sSUFBUixFQUhJLEVBSUosRUFBQ0EsT0FBTyxJQUFSLEVBSkksQ0FKRDtBQVVMQyxtQkFBYTtBQVZSLEs7Ozs7O3VDQVllO0FBQUE7O0FBQUEsVUFBVEMsTUFBUyxTQUFUQSxNQUFTOztBQUNwQixVQUFJQyxNQUFNLEtBQUtOLElBQUwsQ0FBVUssT0FBT0UsR0FBakIsQ0FBVjtBQUNBLFVBQUlDLFFBQVFDLEdBQUdDLGNBQUgsQ0FBa0JDLGlCQUFPLEdBQVAsR0FBYUwsR0FBL0IsQ0FBWjtBQUNBLFVBQUlNLFdBQVdILEdBQUdDLGNBQUgsQ0FBa0JHLGtCQUFsQixDQUFmO0FBQ0EsVUFBSUwsS0FBSixFQUFXO0FBQ1RBLGNBQU1NLE9BQU4sQ0FBYyxhQUFLO0FBQ2pCLGNBQUlDLEVBQUVILFFBQUYsSUFBY0EsUUFBbEIsRUFBNEI7QUFDMUIsZ0JBQUlJLFFBQVEsQ0FBWjtBQUNBRCxjQUFFRSxnQkFBRixDQUFtQkgsT0FBbkIsQ0FBMkIsY0FBTTtBQUMvQixxQkFBS1YsV0FBTCxDQUFpQmMsSUFBakIsQ0FDRSxFQUFDQyxNQUFNSCxPQUFQLEVBQWdCSSxNQUFNQyxHQUFHRCxJQUF6QixFQUErQkUsT0FBT0QsR0FBR0UsVUFBekMsRUFBcURDLFFBQVFILEdBQUdHLE1BQWhFLEVBREY7QUFHRCxhQUpEO0FBS0Q7QUFDRixTQVREO0FBVUQsT0FYRCxNQVdPO0FBQ0wsYUFBS3BCLFdBQUwsR0FBbUIsRUFBbkI7QUFDQUssV0FBR2dCLE9BQUgsQ0FBVztBQUNUQyxlQUFLLG9DQURJO0FBRVQ1QixnQkFBTTtBQUNKUSxpQkFBS0E7QUFERCxXQUZHO0FBS1RxQixpQkFMUyxtQkFLREMsR0FMQyxFQUtJO0FBQ1gsZ0JBQUk5QixPQUFPOEIsSUFBSTlCLElBQWY7QUFDQVcsZUFBR29CLGNBQUgsQ0FBa0JsQixpQkFBTyxHQUFQLEdBQWFMLEdBQS9CLEVBQW9DUixJQUFwQztBQUNEO0FBUlEsU0FBWDtBQVVEO0FBQ0RnQyxjQUFRQyxHQUFSLENBQVl6QixHQUFaO0FBQ0F3QixjQUFRQyxHQUFSLENBQVksS0FBSzNCLFdBQWpCO0FBRUQ7Ozs2QkFDUTtBQUNQLFVBQUlJLFFBQVFDLEdBQUdDLGNBQUgsQ0FBa0JDLGlCQUFPLElBQXpCLENBQVo7QUFDQSxVQUFJLENBQUNILEtBQUwsRUFBWTtBQUNWQyxXQUFHZ0IsT0FBSCxDQUFXO0FBQ1RDLGVBQUssb0NBREk7QUFFVDVCLGdCQUFNO0FBQ0pRLGlCQUFLO0FBREQsV0FGRztBQUtUcUIsaUJBTFMsbUJBS0RDLEdBTEMsRUFLSTtBQUNYLGdCQUFJOUIsT0FBTzhCLElBQUk5QixJQUFmO0FBQ0FXLGVBQUdvQixjQUFILENBQWtCbEIsaUJBQU8sSUFBekIsRUFBK0JiLElBQS9CO0FBQ0Q7QUFSUSxTQUFYO0FBVUQ7QUFDRjs7OzZCQUNRO0FBQ1AsV0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDQSxXQUFLRSxRQUFMLEdBQWdCLFNBQWhCO0FBQ0Q7Ozs7RUE1RStCK0IsZUFBS0MsSTs7a0JBQWxCdkMsSSIsImZpbGUiOiJjb21tb2RpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB7XHJcbiAgICBSQU5LLFxyXG4gICAgREFZLFxyXG4gICAgQ0FURUdPUllcclxuICB9IGZyb20gJy4uL2NvbmZpZy9jb25zdGFudCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mZjeS7t+aOkuihjOamnCcsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1sYWJlbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxhYmVsL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAgICd3eGMtcHJpY2UnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcmljZS9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWxvYWRtb3JlJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZG1vcmUvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy13eGMtbG9hZGluZyc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxvYWRpbmcvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1wYW5lbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXBhbmVsL2Rpc3QvaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGlzRW5kOiBmYWxzZSxcclxuICAgICAgZGF5czogWzEsIDMsIDcsIDMwXSxcclxuICAgICAgbG9hZFRleHQ6IFwifuWKoOi9veS4rX5cIixcclxuICAgICAgdGFiczogW1xyXG4gICAgICAgIHt0aXRsZTogJ+S4gOWkqSd9LFxyXG4gICAgICAgIHt0aXRsZTogJ+S4ieWkqSd9LFxyXG4gICAgICAgIHt0aXRsZTogJ+S4gOWRqCd9LFxyXG4gICAgICAgIHt0aXRsZTogJ+S4gOaciCd9XHJcbiAgICAgIF0sXHJcbiAgICAgIGRlcHJlY2lhdGVzOiBbXVxyXG4gICAgfVxyXG4gICAgb25UYWJDaGFuZ2Uoe2RldGFpbH0pIHtcclxuICAgICAgbGV0IGRheSA9IHRoaXMuZGF5c1tkZXRhaWwua2V5XVxyXG4gICAgICBsZXQgcmFua3MgPSB3eC5nZXRTdG9yYWdlU3luYyhSQU5LICsgXCI6XCIgKyBkYXkpXHJcbiAgICAgIGxldCBjYXRlZ29yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKENBVEVHT1JZKVxyXG4gICAgICBpZiAocmFua3MpIHtcclxuICAgICAgICByYW5rcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgaWYgKGUuY2F0ZWdvcnkgPT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMVxyXG4gICAgICAgICAgICBlLmRlcHJlY2lhdGVET0xpc3QuZm9yRWFjaChlZSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kZXByZWNpYXRlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAge3Jhbms6IGluZGV4KyssIG5hbWU6IGVlLm5hbWUsIHByaWNlOiBlZS5kZXByZWNpYXRlLCBpbWdVcmw6IGVlLmltZ1VybH1cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRlcHJlY2lhdGVzID0gW11cclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwNC9hbmFseXNlL3JhbmsnLCBcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGF5OiBkYXlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhXHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFJBTksgKyBcIjpcIiArIGRheSwgZGF0YSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGRheSlcclxuICAgICAgY29uc29sZS5sb2codGhpcy5kZXByZWNpYXRlcylcclxuICAgICAgXHJcbiAgICB9IFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBsZXQgcmFua3MgPSB3eC5nZXRTdG9yYWdlU3luYyhSQU5LICsgXCI6MVwiKVxyXG4gICAgICBpZiAoIXJhbmtzKSB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjcwMDQvYW5hbHlzZS9yYW5rJywgXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGRheTogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoUkFOSyArIFwiOjFcIiwgZGF0YSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgIHRoaXMubG9hZFRleHQgPSAnfuayoeacieabtOWkmuS6hn4nXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=