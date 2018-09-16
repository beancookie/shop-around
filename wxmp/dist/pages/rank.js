'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tree = require('./../config/tree.js');

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
        "van-tree-select": "../packages/tree-select/index",
        'wxc-search': '../packages/@minui/wxc-search/dist/index'
      }
    }, _this.data = {
      items: [{ text: '京东', children: _tree.children }, { text: '天猫' }, { text: '苏宁易购' }],
      mainActiveIndex: 0,
      activeId: 1001
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Rank, [{
    key: 'onClickNav',
    value: function onClickNav(_ref2) {
      var detail = _ref2.detail;

      this.mainActiveIndex = detail.index || 0;
    }
  }, {
    key: 'onClickItem',
    value: function onClickItem(_ref3) {
      // this.$navigate(`./commodity`)

      var detail = _ref3.detail;
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Rank;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Rank , 'pages/rank'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmsuanMiXSwibmFtZXMiOlsiUmFuayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwiaXRlbXMiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJtYWluQWN0aXZlSW5kZXgiLCJhY3RpdmVJZCIsImRldGFpbCIsImluZGV4Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFHQTs7Ozs7Ozs7OztJQUdxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLDJCQUFtQiwrQkFESjtBQUVmLHNCQUFjO0FBRkM7QUFGVixLLFFBT1RDLEksR0FBTztBQUNMQyxhQUFPLENBQ0wsRUFBQ0MsTUFBTSxJQUFQLEVBQWFDLFVBQVVBLGNBQXZCLEVBREssRUFFTCxFQUFDRCxNQUFNLElBQVAsRUFGSyxFQUdMLEVBQUNBLE1BQU0sTUFBUCxFQUhLLENBREY7QUFNTEUsdUJBQWlCLENBTlo7QUFPTEMsZ0JBQVU7QUFQTCxLOzs7OztzQ0FTYztBQUFBLFVBQVRDLE1BQVMsU0FBVEEsTUFBUzs7QUFDbkIsV0FBS0YsZUFBTCxHQUF1QkUsT0FBT0MsS0FBUCxJQUFnQixDQUF2QztBQUNEOzs7dUNBQ3FCO0FBQ3BCOztBQURvQixVQUFURCxNQUFTLFNBQVRBLE1BQVM7QUFFckI7Ozs2QkFDUSxDQUNSOzs7O0VBeEIrQkUsZUFBS0MsSTs7a0JBQWxCYixJIiwiZmlsZSI6InJhbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB7XHJcbiAgICBjaGlsZHJlblxyXG4gIH0gZnJvbSAnLi4vY29uZmlnL3RyZWUnXHJcbiAgaW1wb3J0IHtcclxuICAgIENBVEVHT1JZXHJcbiAgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnQnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuayBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpmY3ku7fmjpLooYzmppwnLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICBcInZhbi10cmVlLXNlbGVjdFwiOiBcIi4uL3BhY2thZ2VzL3RyZWUtc2VsZWN0L2luZGV4XCIsXHJcbiAgICAgICAgJ3d4Yy1zZWFyY2gnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1zZWFyY2gvZGlzdC9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7dGV4dDogJ+S6rOS4nCcsIGNoaWxkcmVuOiBjaGlsZHJlbn0sXHJcbiAgICAgICAge3RleHQ6ICflpKnnjKsnfSxcclxuICAgICAgICB7dGV4dDogJ+iLj+WugeaYk+i0rSd9XHJcbiAgICAgIF0sXHJcbiAgICAgIG1haW5BY3RpdmVJbmRleDogMCxcclxuICAgICAgYWN0aXZlSWQ6IDEwMDFcclxuICAgIH1cclxuICAgIG9uQ2xpY2tOYXYoe2RldGFpbH0pIHtcclxuICAgICAgdGhpcy5tYWluQWN0aXZlSW5kZXggPSBkZXRhaWwuaW5kZXggfHwgMFxyXG4gICAgfVxyXG4gICAgb25DbGlja0l0ZW0oe2RldGFpbH0pIHtcclxuICAgICAgLy8gdGhpcy4kbmF2aWdhdGUoYC4vY29tbW9kaXR5YClcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==