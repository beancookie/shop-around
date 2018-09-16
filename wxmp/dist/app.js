'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.config = {
      pages: ['pages/search', 'pages/history', 'pages/commodity', 'pages/rank'],
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
    };

    _this.use('promisify');
    return _this;
  }

  _createClass(_class, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidXNlIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBRUUsb0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQUlmQSxNQUplLEdBSU47QUFDUEMsYUFBTyxDQUNMLGNBREssRUFFTCxlQUZLLEVBR0wsaUJBSEssRUFJTCxZQUpLLENBREE7QUFPUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQVBEO0FBYVBDLGNBQVE7QUFDTkMsY0FBTSxDQUFDO0FBQ0xDLG9CQUFVLFlBREw7QUFFTEMsZ0JBQU0sT0FGRDtBQUdMQyxvQkFBVSxpQkFITDtBQUlMQyw0QkFBa0I7QUFKYixTQUFELEVBS0g7QUFDREgsb0JBQVUsY0FEVDtBQUVEQyxnQkFBTSxRQUZMO0FBR0RDLG9CQUFVLG9CQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQUxHO0FBREE7QUFiRCxLQUpNOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBRmE7QUFHZDs7OzsrQkE0QlUsQ0FDVjs7OztFQWpDMEJDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgIHN1cGVyKClcclxuICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXHJcbiAgICB9XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgJ3BhZ2VzL3NlYXJjaCcsXHJcbiAgICAgICAgJ3BhZ2VzL2hpc3RvcnknLFxyXG4gICAgICAgICdwYWdlcy9jb21tb2RpdHknLFxyXG4gICAgICAgICdwYWdlcy9yYW5rJ1xyXG4gICAgICBdLFxyXG4gICAgICB3aW5kb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkY2QTZBJyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgICAgIH0sXHJcbiAgICAgIHRhYkJhcjoge1xyXG4gICAgICAgIGxpc3Q6IFt7XHJcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3JhbmsnLFxyXG4gICAgICAgICAgdGV4dDogJ+mZjeS7t+aOkuihjOamnCcsXHJcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9yYW5rLnBuZycsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL3Jhbmstc2VsZWN0ZWQucG5nJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc2VhcmNoJyxcclxuICAgICAgICAgIHRleHQ6ICfmn6Xor6Lljoblj7Lku7fmoLwnLFxyXG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvaGlzdG9yeS5wbmcnLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9oaXN0b3J5LXNlbGVjdGVkLnBuZydcclxuICAgICAgICB9XVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxhdW5jaCgpIHtcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0=