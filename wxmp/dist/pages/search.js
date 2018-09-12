'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
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
      reset: '重置',
      clean: '清空历史记录',
      searchContent: '',
      searchList: [],
      isEnd: true
    }, _this.methods = {
      toComponent: function toComponent(name) {
        wx.setStorageSync('$searchHistory', this.searchList);
        this.$navigate('./' + name);
      },
      textareaEidt: function textareaEidt(textarea) {
        var searchContent = textarea.detail.value;
        if (searchContent && searchContent != '') {
          this.searchList.push({
            desc: searchContent,
            icon: 'star'
          });
        }
      },
      doClean: function doClean() {
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog');
        dialogComponent && dialogComponent.show();
      },
      onConfirm: function onConfirm() {
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog');
        dialogComponent && dialogComponent.hide();
        wx.removeStorageSync('$searchHistory');
        this.searchList = [];
      },
      onCancel: function onCancel() {
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog');
        dialogComponent && dialogComponent.hide();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var searchList = wx.getStorageSync('$searchHistory');
      if (searchList) {
        this.searchList = searchList;
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwiaGludCIsInNlYXJjaCIsInJlc2V0IiwiY2xlYW4iLCJzZWFyY2hDb250ZW50Iiwic2VhcmNoTGlzdCIsImlzRW5kIiwibWV0aG9kcyIsInRvQ29tcG9uZW50IiwibmFtZSIsInd4Iiwic2V0U3RvcmFnZVN5bmMiLCIkbmF2aWdhdGUiLCJ0ZXh0YXJlYUVpZHQiLCJ0ZXh0YXJlYSIsImRldGFpbCIsInZhbHVlIiwicHVzaCIsImRlc2MiLCJpY29uIiwiZG9DbGVhbiIsImRpYWxvZ0NvbXBvbmVudCIsIiR3eHBhZ2UiLCJzZWxlY3RDb21wb25lbnQiLCJzaG93Iiwib25Db25maXJtIiwiaGlkZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwib25DYW5jZWwiLCJnZXRTdG9yYWdlU3luYyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixVQURqQjtBQUVQQyx1QkFBaUI7QUFDZixzQkFBYywwQ0FEQztBQUVmLG9CQUFZLHdDQUZHO0FBR2YscUJBQWEseUNBSEU7QUFJZixtQkFBVyx1Q0FKSTtBQUtmLHlCQUFpQix1Q0FMRjtBQU1mLG9CQUFZLHdDQU5HO0FBT2Ysd0JBQWdCLDRDQVBEO0FBUWYsc0JBQWMsMENBUkM7QUFTZixvQkFBWTtBQVRHO0FBRlYsSyxRQWNUQyxJLEdBQU87QUFDTEMsWUFBTSxtQkFERDtBQUVMQyxjQUFRLFFBRkg7QUFHTEMsYUFBTyxJQUhGO0FBSUxDLGFBQU8sUUFKRjtBQUtMQyxxQkFBZSxFQUxWO0FBTUxDLGtCQUFZLEVBTlA7QUFPTEMsYUFBTztBQVBGLEssUUFTUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxJQURKLEVBQ1U7QUFDaEJDLFdBQUdDLGNBQUgsQ0FBa0IsZ0JBQWxCLEVBQW9DLEtBQUtOLFVBQXpDO0FBQ0EsYUFBS08sU0FBTCxRQUFvQkgsSUFBcEI7QUFDRCxPQUpPO0FBS1JJLGtCQUxRLHdCQUtLQyxRQUxMLEVBS2U7QUFDckIsWUFBSVYsZ0JBQWdCVSxTQUFTQyxNQUFULENBQWdCQyxLQUFwQztBQUNBLFlBQUlaLGlCQUFpQkEsaUJBQWlCLEVBQXRDLEVBQTBDO0FBQ3hDLGVBQUtDLFVBQUwsQ0FBZ0JZLElBQWhCLENBQXFCO0FBQ25CQyxrQkFBTWQsYUFEYTtBQUVuQmUsa0JBQU07QUFGYSxXQUFyQjtBQUlEO0FBQ0YsT0FiTztBQWNSQyxhQWRRLHFCQWNFO0FBQ1IsWUFBSUMsa0JBQWtCLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixhQUE3QixDQUF0QjtBQUNBRiwyQkFBbUJBLGdCQUFnQkcsSUFBaEIsRUFBbkI7QUFDRCxPQWpCTztBQWtCUkMsZUFsQlEsdUJBa0JLO0FBQ1gsWUFBSUosa0JBQWtCLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixhQUE3QixDQUF0QjtBQUNBRiwyQkFBbUJBLGdCQUFnQkssSUFBaEIsRUFBbkI7QUFDQWhCLFdBQUdpQixpQkFBSCxDQUFxQixnQkFBckI7QUFDQSxhQUFLdEIsVUFBTCxHQUFrQixFQUFsQjtBQUNELE9BdkJPO0FBd0JSdUIsY0F4QlEsc0JBd0JJO0FBQ1YsWUFBSVAsa0JBQWtCLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixhQUE3QixDQUF0QjtBQUNBRiwyQkFBbUJBLGdCQUFnQkssSUFBaEIsRUFBbkI7QUFDRDtBQTNCTyxLOzs7Ozs2QkE2QkQ7QUFDUCxVQUFJckIsYUFBYUssR0FBR21CLGNBQUgsQ0FBa0IsZ0JBQWxCLENBQWpCO0FBQ0EsVUFBSXhCLFVBQUosRUFBZ0I7QUFDZCxhQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEO0FBQ0Y7Ozs7RUExRGdDeUIsZUFBS0MsSTs7a0JBQW5CcEMsSyIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+afpeivouWVhuWTgeWOhuWPsuS7t+agvCcsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICd3eGMtYnV0dG9uJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYnV0dG9uL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1wYW5lbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXBhbmVsL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAgICd3eGMtbGlzdCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxpc3QvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1sb2FkbW9yZSc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxvYWRtb3JlL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtZGlhbG9nJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZGlhbG9nL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaGludDogJ+ivt+Wwhui0reeJqUFwcOWIhuS6q+eahOmTvuaOpeeymOi0tOWIsOatpOWkhCcsXHJcbiAgICAgIHNlYXJjaDogJ+afpeivouWOhuWPsuS7t+agvCcsXHJcbiAgICAgIHJlc2V0OiAn6YeN572uJyxcclxuICAgICAgY2xlYW46ICfmuIXnqbrljoblj7LorrDlvZUnLFxyXG4gICAgICBzZWFyY2hDb250ZW50OiAnJyxcclxuICAgICAgc2VhcmNoTGlzdDogW10sXHJcbiAgICAgIGlzRW5kOiB0cnVlXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0b0NvbXBvbmVudChuYW1lKSB7XHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJyRzZWFyY2hIaXN0b3J5JywgdGhpcy5zZWFyY2hMaXN0KVxyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKGAuLyR7bmFtZX1gKVxyXG4gICAgICB9LFxyXG4gICAgICB0ZXh0YXJlYUVpZHQodGV4dGFyZWEpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQ29udGVudCA9IHRleHRhcmVhLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIGlmIChzZWFyY2hDb250ZW50ICYmIHNlYXJjaENvbnRlbnQgIT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgZGVzYzogc2VhcmNoQ29udGVudCxcclxuICAgICAgICAgICAgaWNvbjogJ3N0YXInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZG9DbGVhbigpIHtcclxuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnKVxyXG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudCAmJiBkaWFsb2dDb21wb25lbnQuc2hvdygpO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbmZpcm0gKCkge1xyXG4gICAgICAgIGxldCBkaWFsb2dDb21wb25lbnQgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcud3hjLWRpYWxvZycpXHJcbiAgICAgICAgZGlhbG9nQ29tcG9uZW50ICYmIGRpYWxvZ0NvbXBvbmVudC5oaWRlKCk7XHJcbiAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJyRzZWFyY2hIaXN0b3J5JylcclxuICAgICAgICB0aGlzLnNlYXJjaExpc3QgPSBbXVxyXG4gICAgICB9LFxyXG4gICAgICBvbkNhbmNlbCAoKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ0NvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtZGlhbG9nJylcclxuICAgICAgICBkaWFsb2dDb21wb25lbnQgJiYgZGlhbG9nQ29tcG9uZW50LmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBsZXQgc2VhcmNoTGlzdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCckc2VhcmNoSGlzdG9yeScpXHJcbiAgICAgIGlmIChzZWFyY2hMaXN0KSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hMaXN0ID0gc2VhcmNoTGlzdFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=