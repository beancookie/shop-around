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
      var detail = _ref2.detail;
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
    }
  }]);

  return Rank;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Rank , 'pages/commodity'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vZGl0eS5qcyJdLCJuYW1lcyI6WyJSYW5rIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJpc0VuZCIsImRheXMiLCJsb2FkVGV4dCIsInRhYnMiLCJ0aXRsZSIsImRlcHJlY2lhdGVzIiwiZGV0YWlsIiwicmFua3MiLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwiUkFOSyIsInJlcXVlc3QiLCJ1cmwiLCJkYXkiLCJzdWNjZXNzIiwicmVzIiwic2V0U3RvcmFnZVN5bmMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7O0lBSXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksd0NBREc7QUFFZixxQkFBYSx5Q0FGRTtBQUdmLG1CQUFXLHVDQUhJO0FBSWYseUJBQWlCLHVDQUpGO0FBS2YscUJBQWEseUNBTEU7QUFNZix3QkFBZ0IsNENBTkQ7QUFPZiwyQkFBbUIsMkNBUEo7QUFRZixxQkFBYTtBQVJFO0FBRlYsSyxRQWFUQyxJLEdBQU87QUFDTEMsYUFBTyxLQURGO0FBRUxDLFlBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLENBRkQ7QUFHTEMsZ0JBQVUsT0FITDtBQUlMQyxZQUFNLENBQ0osRUFBQ0MsT0FBTyxJQUFSLEVBREksRUFFSixFQUFDQSxPQUFPLElBQVIsRUFGSSxFQUdKLEVBQUNBLE9BQU8sSUFBUixFQUhJLEVBSUosRUFBQ0EsT0FBTyxJQUFSLEVBSkksQ0FKRDtBQVVMQyxtQkFBYTs7QUFWUixLOzs7Ozt1Q0FhZTtBQUFBLFVBQVRDLE1BQVMsU0FBVEEsTUFBUztBQUNyQjs7OzZCQUNRO0FBQ1AsVUFBSUMsUUFBUUMsR0FBR0MsY0FBSCxDQUFrQkMsaUJBQU8sSUFBekIsQ0FBWjtBQUNBLFVBQUksQ0FBQ0gsS0FBTCxFQUFZO0FBQ1ZDLFdBQUdHLE9BQUgsQ0FBVztBQUNUQyxlQUFLLG9DQURJO0FBRVRiLGdCQUFNO0FBQ0pjLGlCQUFLO0FBREQsV0FGRztBQUtUQyxpQkFMUyxtQkFLREMsR0FMQyxFQUtJO0FBQ1gsZ0JBQUloQixPQUFPZ0IsSUFBSWhCLElBQWY7QUFDQVMsZUFBR1EsY0FBSCxDQUFrQk4saUJBQU8sSUFBekIsRUFBK0JYLElBQS9CO0FBQ0Q7QUFSUSxTQUFYO0FBVUQ7QUFDRjs7OzZCQUNRO0FBQ1AsV0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDRDs7OztFQTlDK0JpQixlQUFLQyxJOztrQkFBbEJ2QixJIiwiZmlsZSI6ImNvbW1vZGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHtcclxuICAgIFJBTkssXHJcbiAgICBDQVRFR09SWVxyXG4gIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmsgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZmN5Lu35o6S6KGM5qacJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy1mbGV4JzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWxhYmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGFiZWwvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy10YWInOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXHJcbiAgICAgICAgJ3d4Yy1wcmljZSc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXByaWNlL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtbG9hZG1vcmUnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sb2FkbW9yZS9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXd4Yy1sb2FkaW5nJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZGluZy9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcGFuZWwvZGlzdC9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaXNFbmQ6IGZhbHNlLFxyXG4gICAgICBkYXlzOiBbMSwgMywgNywgMzBdLFxyXG4gICAgICBsb2FkVGV4dDogXCJ+5Yqg6L295LitflwiLFxyXG4gICAgICB0YWJzOiBbXHJcbiAgICAgICAge3RpdGxlOiAn5LiA5aSpJ30sXHJcbiAgICAgICAge3RpdGxlOiAn5LiJ5aSpJ30sXHJcbiAgICAgICAge3RpdGxlOiAn5LiA5ZGoJ30sXHJcbiAgICAgICAge3RpdGxlOiAn5LiA5pyIJ31cclxuICAgICAgXSxcclxuICAgICAgZGVwcmVjaWF0ZXM6IFtdLFxyXG5cclxuICAgIH1cclxuICAgIG9uVGFiQ2hhbmdlKHtkZXRhaWx9KSB7XHJcbiAgICB9IFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBsZXQgcmFua3MgPSB3eC5nZXRTdG9yYWdlU3luYyhSQU5LICsgXCI6MVwiKVxyXG4gICAgICBpZiAoIXJhbmtzKSB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjcwMDQvYW5hbHlzZS9yYW5rJywgXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGRheTogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoUkFOSyArIFwiOjFcIiwgZGF0YSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=