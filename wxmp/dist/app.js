'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/search', 'pages/history', 'pages/rank'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#FF6A6A',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        list: [{
          pagePath: 'pages/rank',
          text: '降价排行榜',
          iconPath: 'images/rank.png',
          selectedIconPath: 'images/rank-selected.png'
        }, {
          pagePath: 'pages/search',
          text: '查询历史价格',
          iconPath: 'images/history.png',
          selectedIconPath: 'images/history-selected.png'
        }]
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('on launch');
    }
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTyxDQUNMLGNBREssRUFFTCxlQUZLLEVBR0wsWUFISyxDQURBO0FBTVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FORDtBQVlQQyxjQUFRO0FBQ05DLGNBQU0sQ0FBQztBQUNMQyxvQkFBVSxZQURMO0FBRUxDLGdCQUFNLE9BRkQ7QUFHTEMsb0JBQVUsaUJBSEw7QUFJTEMsNEJBQWtCO0FBSmIsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLGNBRFQ7QUFFREMsZ0JBQU0sUUFGTDtBQUdEQyxvQkFBVSxvQkFIVDtBQUlEQyw0QkFBa0I7QUFKakIsU0FMRztBQURBO0FBWkQsSzs7Ozs7K0JBMkJFO0FBQ1RDLGNBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7Ozs7RUE5QjBCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBwYWdlczogW1xyXG4gICAgICAgICdwYWdlcy9zZWFyY2gnLFxyXG4gICAgICAgICdwYWdlcy9oaXN0b3J5JyxcclxuICAgICAgICAncGFnZXMvcmFuaydcclxuICAgICAgXSxcclxuICAgICAgd2luZG93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZGNkE2QScsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgICB9LFxyXG4gICAgICB0YWJCYXI6IHtcclxuICAgICAgICBsaXN0OiBbe1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9yYW5rJyxcclxuICAgICAgICAgIHRleHQ6ICfpmY3ku7fmjpLooYzmppwnLFxyXG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvcmFuay5wbmcnLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9yYW5rLXNlbGVjdGVkLnBuZydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3NlYXJjaCcsXHJcbiAgICAgICAgICB0ZXh0OiAn5p+l6K+i5Y6G5Y+y5Lu35qC8JyxcclxuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL2hpc3RvcnkucG5nJyxcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvaGlzdG9yeS1zZWxlY3RlZC5wbmcnXHJcbiAgICAgICAgfV1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTGF1bmNoKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnb24gbGF1bmNoJylcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0=