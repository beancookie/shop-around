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
      var detail = _ref3.detail;

      var activeId = detail.id || 0;
      this.activeId = activeId;
      var category = '';
      _tree.children.forEach(function (e) {
        if (activeId == e.id) {
          category = e.text;
          wx.setStorageSync(_constant.CATEGORY, category);
        }
      });
      this.$navigate('./commodity');
    }
  }, {
    key: 'getNow',
    value: function getNow() {
      var now = new Date();
      var nowDate = now.getFullYear() + '' + now.getMonth() + '' + now.getDay();
      return nowDate;
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var nowDate = this.getNow();
      var date = wx.getStorageSync(_constant.DATE);
      if (date || date != nowDate) {
        wx.clearStorageSync();
        wx.setStorageSync(_constant.DATE, nowDate);
      }
    }
  }]);

  return Rank;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Rank , 'pages/rank'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmsuanMiXSwibmFtZXMiOlsiUmFuayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwiaXRlbXMiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJtYWluQWN0aXZlSW5kZXgiLCJhY3RpdmVJZCIsImRldGFpbCIsImluZGV4IiwiaWQiLCJjYXRlZ29yeSIsImZvckVhY2giLCJlIiwid3giLCJzZXRTdG9yYWdlU3luYyIsIkNBVEVHT1JZIiwiJG5hdmlnYXRlIiwibm93IiwiRGF0ZSIsIm5vd0RhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF5IiwiZ2V0Tm93IiwiZGF0ZSIsImdldFN0b3JhZ2VTeW5jIiwiREFURSIsImNsZWFyU3RvcmFnZVN5bmMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7O0lBS3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YsMkJBQW1CLCtCQURKO0FBRWYsc0JBQWM7QUFGQztBQUZWLEssUUFPVEMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FDTCxFQUFDQyxNQUFNLElBQVAsRUFBYUMsVUFBVUEsY0FBdkIsRUFESyxFQUVMLEVBQUNELE1BQU0sSUFBUCxFQUZLLEVBR0wsRUFBQ0EsTUFBTSxNQUFQLEVBSEssQ0FERjtBQU1MRSx1QkFBaUIsQ0FOWjtBQU9MQyxnQkFBVTtBQVBMLEs7Ozs7O3NDQVNjO0FBQUEsVUFBVEMsTUFBUyxTQUFUQSxNQUFTOztBQUNuQixXQUFLRixlQUFMLEdBQXVCRSxPQUFPQyxLQUFQLElBQWdCLENBQXZDO0FBQ0Q7Ozt1Q0FDcUI7QUFBQSxVQUFURCxNQUFTLFNBQVRBLE1BQVM7O0FBQ3BCLFVBQUlELFdBQVdDLE9BQU9FLEVBQVAsSUFBYSxDQUE1QjtBQUNBLFdBQUtILFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBSUksV0FBVyxFQUFmO0FBQ0FOLHFCQUFTTyxPQUFULENBQWlCLGFBQUs7QUFDcEIsWUFBSUwsWUFBWU0sRUFBRUgsRUFBbEIsRUFBc0I7QUFDcEJDLHFCQUFXRSxFQUFFVCxJQUFiO0FBQ0FVLGFBQUdDLGNBQUgsQ0FBa0JDLGtCQUFsQixFQUE0QkwsUUFBNUI7QUFDRDtBQUNGLE9BTEQ7QUFNQSxXQUFLTSxTQUFMO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlDLE1BQU0sSUFBSUMsSUFBSixFQUFWO0FBQ0EsVUFBSUMsVUFBVUYsSUFBSUcsV0FBSixLQUFvQixFQUFwQixHQUF5QkgsSUFBSUksUUFBSixFQUF6QixHQUEwQyxFQUExQyxHQUErQ0osSUFBSUssTUFBSixFQUE3RDtBQUNBLGFBQU9ILE9BQVA7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSUEsVUFBVSxLQUFLSSxNQUFMLEVBQWQ7QUFDQSxVQUFJQyxPQUFPWCxHQUFHWSxjQUFILENBQWtCQyxjQUFsQixDQUFYO0FBQ0EsVUFBSUYsUUFBUUEsUUFBUUwsT0FBcEIsRUFBNkI7QUFDM0JOLFdBQUdjLGdCQUFIO0FBQ0FkLFdBQUdDLGNBQUgsQ0FBa0JZLGNBQWxCLEVBQXdCUCxPQUF4QjtBQUNEO0FBQ0Y7Ozs7RUE1QytCUyxlQUFLQyxJOztrQkFBbEJoQyxJIiwiZmlsZSI6InJhbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB7XHJcbiAgICBjaGlsZHJlblxyXG4gIH0gZnJvbSAnLi4vY29uZmlnL3RyZWUnXHJcbiAgaW1wb3J0IHtcclxuICAgIFJBTkssXHJcbiAgICBDQVRFR09SWSxcclxuICAgIERBVEUsXHJcbiAgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnQnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuayBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpmY3ku7fmjpLooYzmppwnLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICBcInZhbi10cmVlLXNlbGVjdFwiOiBcIi4uL3BhY2thZ2VzL3RyZWUtc2VsZWN0L2luZGV4XCIsXHJcbiAgICAgICAgJ3d4Yy1zZWFyY2gnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1zZWFyY2gvZGlzdC9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7dGV4dDogJ+S6rOS4nCcsIGNoaWxkcmVuOiBjaGlsZHJlbn0sXHJcbiAgICAgICAge3RleHQ6ICflpKnnjKsnfSxcclxuICAgICAgICB7dGV4dDogJ+iLj+WugeaYk+i0rSd9XHJcbiAgICAgIF0sXHJcbiAgICAgIG1haW5BY3RpdmVJbmRleDogMCxcclxuICAgICAgYWN0aXZlSWQ6IDEwMDFcclxuICAgIH1cclxuICAgIG9uQ2xpY2tOYXYoe2RldGFpbH0pIHtcclxuICAgICAgdGhpcy5tYWluQWN0aXZlSW5kZXggPSBkZXRhaWwuaW5kZXggfHwgMFxyXG4gICAgfVxyXG4gICAgb25DbGlja0l0ZW0oe2RldGFpbH0pIHtcclxuICAgICAgbGV0IGFjdGl2ZUlkID0gZGV0YWlsLmlkIHx8IDBcclxuICAgICAgdGhpcy5hY3RpdmVJZCA9IGFjdGl2ZUlkXHJcbiAgICAgIGxldCBjYXRlZ29yeSA9ICcnXHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUlkID09IGUuaWQpIHtcclxuICAgICAgICAgIGNhdGVnb3J5ID0gZS50ZXh0XHJcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhDQVRFR09SWSwgY2F0ZWdvcnkpXHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlKGAuL2NvbW1vZGl0eWApXHJcbiAgICB9XHJcbiAgICBnZXROb3coKSB7XHJcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgICAgIGxldCBub3dEYXRlID0gbm93LmdldEZ1bGxZZWFyKCkgKyAnJyArIG5vdy5nZXRNb250aCgpICsgJycgKyBub3cuZ2V0RGF5KClcclxuICAgICAgcmV0dXJuIG5vd0RhdGVcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IG5vd0RhdGUgPSB0aGlzLmdldE5vdygpXHJcbiAgICAgIGxldCBkYXRlID0gd3guZ2V0U3RvcmFnZVN5bmMoREFURSlcclxuICAgICAgaWYgKGRhdGUgfHwgZGF0ZSAhPSBub3dEYXRlKSB7XHJcbiAgICAgICAgd3guY2xlYXJTdG9yYWdlU3luYygpXHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoREFURSwgbm93RGF0ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19