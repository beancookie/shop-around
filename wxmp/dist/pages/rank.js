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
      var _this2 = this;

      var detail = _ref3.detail;

      this.activeId = detail.id || 0;
      var category = '';
      _tree.children.forEach(function (e) {
        if (_this2.activeId == e.id) {
          category = e.text;
          wx.setStorageSync(_constant.CATEGORY, category);
        }
      });
      this.$preload('category', category);
      this.$navigate('./commodity');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Rank;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Rank , 'pages/rank'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmsuanMiXSwibmFtZXMiOlsiUmFuayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwiaXRlbXMiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJtYWluQWN0aXZlSW5kZXgiLCJhY3RpdmVJZCIsImRldGFpbCIsImluZGV4IiwiaWQiLCJjYXRlZ29yeSIsImZvckVhY2giLCJlIiwid3giLCJzZXRTdG9yYWdlU3luYyIsIkNBVEVHT1JZIiwiJHByZWxvYWQiLCIkbmF2aWdhdGUiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7O0lBR3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YsMkJBQW1CLCtCQURKO0FBRWYsc0JBQWM7QUFGQztBQUZWLEssUUFPVEMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FDTCxFQUFDQyxNQUFNLElBQVAsRUFBYUMsVUFBVUEsY0FBdkIsRUFESyxFQUVMLEVBQUNELE1BQU0sSUFBUCxFQUZLLEVBR0wsRUFBQ0EsTUFBTSxNQUFQLEVBSEssQ0FERjtBQU1MRSx1QkFBaUIsQ0FOWjtBQU9MQyxnQkFBVTtBQVBMLEs7Ozs7O3NDQVNjO0FBQUEsVUFBVEMsTUFBUyxTQUFUQSxNQUFTOztBQUNuQixXQUFLRixlQUFMLEdBQXVCRSxPQUFPQyxLQUFQLElBQWdCLENBQXZDO0FBQ0Q7Ozt1Q0FDcUI7QUFBQTs7QUFBQSxVQUFURCxNQUFTLFNBQVRBLE1BQVM7O0FBQ3BCLFdBQUtELFFBQUwsR0FBZ0JDLE9BQU9FLEVBQVAsSUFBYSxDQUE3QjtBQUNBLFVBQUlDLFdBQVcsRUFBZjtBQUNBTixxQkFBU08sT0FBVCxDQUFpQixhQUFLO0FBQ3BCLFlBQUksT0FBS0wsUUFBTCxJQUFpQk0sRUFBRUgsRUFBdkIsRUFBMkI7QUFDekJDLHFCQUFXRSxFQUFFVCxJQUFiO0FBQ0FVLGFBQUdDLGNBQUgsQ0FBa0JDLGtCQUFsQixFQUE0QkwsUUFBNUI7QUFDRDtBQUNGLE9BTEQ7QUFNQSxXQUFLTSxRQUFMLENBQWMsVUFBZCxFQUEwQk4sUUFBMUI7QUFDQSxXQUFLTyxTQUFMLENBQWUsYUFBZjtBQUNEOzs7NkJBQ1EsQ0FDUjs7OztFQWpDK0JDLGVBQUtDLEk7O2tCQUFsQnRCLEkiLCJmaWxlIjoicmFuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHtcclxuICAgIGNoaWxkcmVuXHJcbiAgfSBmcm9tICcuLi9jb25maWcvdHJlZSdcclxuICBpbXBvcnQge1xyXG4gICAgQ0FURUdPUllcclxuICB9IGZyb20gJy4uL2NvbmZpZy9jb25zdGFudCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mZjeS7t+aOkuihjOamnCcsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgIFwidmFuLXRyZWUtc2VsZWN0XCI6IFwiLi4vcGFja2FnZXMvdHJlZS1zZWxlY3QvaW5kZXhcIixcclxuICAgICAgICAnd3hjLXNlYXJjaCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXNlYXJjaC9kaXN0L2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHt0ZXh0OiAn5Lqs5LicJywgY2hpbGRyZW46IGNoaWxkcmVufSxcclxuICAgICAgICB7dGV4dDogJ+WkqeeMqyd9LFxyXG4gICAgICAgIHt0ZXh0OiAn6IuP5a6B5piT6LStJ31cclxuICAgICAgXSxcclxuICAgICAgbWFpbkFjdGl2ZUluZGV4OiAwLFxyXG4gICAgICBhY3RpdmVJZDogMTAwMVxyXG4gICAgfVxyXG4gICAgb25DbGlja05hdih7ZGV0YWlsfSkge1xyXG4gICAgICB0aGlzLm1haW5BY3RpdmVJbmRleCA9IGRldGFpbC5pbmRleCB8fCAwXHJcbiAgICB9XHJcbiAgICBvbkNsaWNrSXRlbSh7ZGV0YWlsfSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZUlkID0gZGV0YWlsLmlkIHx8IDBcclxuICAgICAgbGV0IGNhdGVnb3J5ID0gJydcclxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJZCA9PSBlLmlkKSB7XHJcbiAgICAgICAgICBjYXRlZ29yeSA9IGUudGV4dFxyXG4gICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoQ0FURUdPUlksIGNhdGVnb3J5KVxyXG4gICAgICAgIH0gIFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLiRwcmVsb2FkKCdjYXRlZ29yeScsIGNhdGVnb3J5KVxyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9jb21tb2RpdHknKVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG4gIH1cclxuIl19