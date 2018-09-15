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
      toComponent: function toComponent() {
        if (this.searchContent && this.searchContent != '') {
          this.$navigate('./history');
        }
      },
      eidtTextarea: function eidtTextarea(textarea) {
        var that = this;
        var searchContent = textarea.detail.value;
        if (searchContent && searchContent != '') {
          that.searchContent = searchContent;
          wx.request({
            url: 'http://localhost:7004/reptile/commodity/url',
            data: {
              url: searchContent
            },
            success: function success(res) {
              var data = res.data;
              wx.setStorageSync(_constant.COMMODITY, data);
              that.$data.searchList.push({
                desc: data.name,
                icon: 'star'
              });
              wx.setStorageSync(_constant.SEARCH_HISTORY, that.$data.searchList);
              that.$navigate('./history');
            }
          });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImhpbnQiLCJzZWFyY2giLCJjbGVhbiIsInNlYXJjaENvbnRlbnQiLCJzZWFyY2hMaXN0IiwiaXNFbmQiLCJtZXRob2RzIiwidG9Db21wb25lbnQiLCIkbmF2aWdhdGUiLCJlaWR0VGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInRoYXQiLCJkZXRhaWwiLCJ2YWx1ZSIsInd4IiwicmVxdWVzdCIsInVybCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRTdG9yYWdlU3luYyIsIkNPTU1PRElUWSIsIiRkYXRhIiwicHVzaCIsImRlc2MiLCJuYW1lIiwiaWNvbiIsIlNFQVJDSF9ISVNUT1JZIiwiZG9DbGVhbiIsImRpYWxvZ0NvbXBvbmVudCIsIiR3eHBhZ2UiLCJzZWxlY3RDb21wb25lbnQiLCJzaG93Iiwib25Db25maXJtIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJoaWRlIiwib25DYW5jZWwiLCJnZXRTdG9yYWdlU3luYyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFJcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixVQURqQjtBQUVQQyx1QkFBaUI7QUFDZixzQkFBYywwQ0FEQztBQUVmLG9CQUFZLHdDQUZHO0FBR2YscUJBQWEseUNBSEU7QUFJZixtQkFBVyx1Q0FKSTtBQUtmLHlCQUFpQix1Q0FMRjtBQU1mLG9CQUFZLHdDQU5HO0FBT2Ysd0JBQWdCLDRDQVBEO0FBUWYsc0JBQWMsMENBUkM7QUFTZixvQkFBWTtBQVRHO0FBRlYsSyxRQWNUQyxJLEdBQU87QUFDTEMsWUFBTSxtQkFERDtBQUVMQyxjQUFRLFFBRkg7QUFHTEMsYUFBTyxRQUhGO0FBSUxDLHFCQUFlLEVBSlY7QUFLTEMsa0JBQVksRUFMUDtBQU1MQyxhQUFPO0FBTkYsSyxRQVFQQyxPLEdBQVU7QUFDUkMsaUJBRFEseUJBQ007QUFDWixZQUFJLEtBQUtKLGFBQUwsSUFBc0IsS0FBS0EsYUFBTCxJQUFzQixFQUFoRCxFQUFvRDtBQUNsRCxlQUFLSyxTQUFMO0FBQ0Q7QUFDRixPQUxPO0FBTVJDLGtCQU5RLHdCQU1LQyxRQU5MLEVBTWU7QUFDckIsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSVIsZ0JBQWdCTyxTQUFTRSxNQUFULENBQWdCQyxLQUFwQztBQUNBLFlBQUlWLGlCQUFpQkEsaUJBQWlCLEVBQXRDLEVBQTBDO0FBQ3hDUSxlQUFLUixhQUFMLEdBQXFCQSxhQUFyQjtBQUNBVyxhQUFHQyxPQUFILENBQVc7QUFDVEMsaUJBQUssNkNBREk7QUFFVGpCLGtCQUFNO0FBQ0ppQixtQkFBS2I7QUFERCxhQUZHO0FBS1RjLG1CQUxTLG1CQUtEQyxHQUxDLEVBS0k7QUFDWCxrQkFBSW5CLE9BQU9tQixJQUFJbkIsSUFBZjtBQUNBZSxpQkFBR0ssY0FBSCxDQUFrQkMsbUJBQWxCLEVBQTZCckIsSUFBN0I7QUFDQVksbUJBQUtVLEtBQUwsQ0FBV2pCLFVBQVgsQ0FBc0JrQixJQUF0QixDQUEyQjtBQUN6QkMsc0JBQU14QixLQUFLeUIsSUFEYztBQUV6QkMsc0JBQU07QUFGbUIsZUFBM0I7QUFJQVgsaUJBQUdLLGNBQUgsQ0FBa0JPLHdCQUFsQixFQUFrQ2YsS0FBS1UsS0FBTCxDQUFXakIsVUFBN0M7QUFDQU8sbUJBQUtILFNBQUw7QUFDRDtBQWRRLFdBQVg7QUFnQkQ7QUFDRixPQTVCTztBQTZCUm1CLGFBN0JRLHFCQTZCRTtBQUNSLFlBQUlDLGtCQUFrQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsYUFBN0IsQ0FBdEI7QUFDQUYsMkJBQW1CQSxnQkFBZ0JHLElBQWhCLEVBQW5CO0FBQ0QsT0FoQ087QUFpQ1JDLGVBakNRLHVCQWlDSztBQUNYbEIsV0FBR21CLGlCQUFILENBQXFCUCx3QkFBckI7QUFDQSxhQUFLdEIsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFlBQUl3QixrQkFBa0IsS0FBS0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCLGFBQTdCLENBQXRCO0FBQ0FGLDJCQUFtQkEsZ0JBQWdCTSxJQUFoQixFQUFuQjtBQUNELE9BdENPO0FBdUNSQyxjQXZDUSxzQkF1Q0k7QUFDVixZQUFJUCxrQkFBa0IsS0FBS0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCLGFBQTdCLENBQXRCO0FBQ0FGLDJCQUFtQkEsZ0JBQWdCTSxJQUFoQixFQUFuQjtBQUNEO0FBMUNPLEs7Ozs7OzZCQTRDRDtBQUNQLFVBQUk5QixhQUFhVSxHQUFHc0IsY0FBSCxDQUFrQlYsd0JBQWxCLENBQWpCO0FBQ0EsVUFBSXRCLFVBQUosRUFBZ0I7QUFDZCxhQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEO0FBQ0Y7Ozs7RUF4RWlDaUMsZUFBS0MsSTs7a0JBQXBCM0MsTSIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB7XHJcbiAgICBDT01NT0RJVFksXHJcbiAgICBTRUFSQ0hfSElTVE9SWVxyXG4gIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmn6Xor6LllYblk4Hljoblj7Lku7fmoLwnLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAnd3hjLWJ1dHRvbic6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWJ1dHRvbi9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWZsZXgnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtcGFuZWwnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wYW5lbC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXRhYic6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcclxuICAgICAgICAnd3hjLWxpc3QnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1saXN0L2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtbG9hZG1vcmUnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sb2FkbW9yZS9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWRpYWxvZyc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWRpYWxvZy9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWljb24nOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGhpbnQ6ICfor7flsIbotK3nialBcHDliIbkuqvnmoTpk77mjqXnspjotLTliLDmraTlpIQnLFxyXG4gICAgICBzZWFyY2g6ICfmn6Xor6Lljoblj7Lku7fmoLwnLFxyXG4gICAgICBjbGVhbjogJ+a4heepuuWOhuWPsuiusOW9lScsXHJcbiAgICAgIHNlYXJjaENvbnRlbnQ6ICcnLFxyXG4gICAgICBzZWFyY2hMaXN0OiBbXSxcclxuICAgICAgaXNFbmQ6IHRydWVcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRvQ29tcG9uZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaENvbnRlbnQgJiYgdGhpcy5zZWFyY2hDb250ZW50ICE9ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZShgLi9oaXN0b3J5YClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVpZHRUZXh0YXJlYSh0ZXh0YXJlYSkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIGxldCBzZWFyY2hDb250ZW50ID0gdGV4dGFyZWEuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgaWYgKHNlYXJjaENvbnRlbnQgJiYgc2VhcmNoQ29udGVudCAhPSAnJykge1xyXG4gICAgICAgICAgdGhhdC5zZWFyY2hDb250ZW50ID0gc2VhcmNoQ29udGVudFxyXG4gICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwNC9yZXB0aWxlL2NvbW1vZGl0eS91cmwnLCBcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIHVybDogc2VhcmNoQ29udGVudFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhDT01NT0RJVFksIGRhdGEpXHJcbiAgICAgICAgICAgICAgdGhhdC4kZGF0YS5zZWFyY2hMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZGVzYzogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N0YXInXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhTRUFSQ0hfSElTVE9SWSwgdGhhdC4kZGF0YS5zZWFyY2hMaXN0KVxyXG4gICAgICAgICAgICAgIHRoYXQuJG5hdmlnYXRlKGAuL2hpc3RvcnlgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZG9DbGVhbigpIHtcclxuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnKVxyXG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudCAmJiBkaWFsb2dDb21wb25lbnQuc2hvdygpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ29uZmlybSAoKSB7XHJcbiAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoU0VBUkNIX0hJU1RPUlkpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hMaXN0ID0gW11cclxuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnKVxyXG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudCAmJiBkaWFsb2dDb21wb25lbnQuaGlkZSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2FuY2VsICgpIHtcclxuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnKVxyXG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudCAmJiBkaWFsb2dDb21wb25lbnQuaGlkZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHNlYXJjaExpc3QgPSB3eC5nZXRTdG9yYWdlU3luYyhTRUFSQ0hfSElTVE9SWSlcclxuICAgICAgaWYgKHNlYXJjaExpc3QpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaExpc3QgPSBzZWFyY2hMaXN0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==