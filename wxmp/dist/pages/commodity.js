'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      days: [1, 3, 7, 30],
      category: '',
      day: 1,
      isEnd: false,
      loadText: "~加载中~",
      tabs: [{ title: '一天' }, { title: '三天' }, { title: '一周' }, { title: '一月' }],
      depreciates: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Rank, [{
    key: 'onTabChange',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var detail = _ref2.detail;
        var res, index;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.day = this.days[detail.key];
                this.isEnd = false;
                this.loadText = '~加载中~';
                _context.next = 5;
                return _api2.default.getRankByCategoryAndDay({
                  query: {
                    category: this.category,
                    day: this.day
                  }
                });

              case 5:
                res = _context.sent;

                if (res.statusCode == 200) {
                  if (res.data.length == 1) {
                    this.depreciates = res.data[0].depreciateDOList;
                    index = 1;

                    this.depreciates.forEach(function (e) {
                      e.rank = index++;
                    });
                  }
                } else {
                  this.depreciates = [];
                }
                this.isEnd = true;
                this.loadText = '~没有更多了~';
                console.log(this.depreciates);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onTabChange(_x) {
        return _ref3.apply(this, arguments);
      }

      return onTabChange;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(params, data) {
      this.category = data.preload.category;
    }
  }]);

  return Rank;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Rank , 'pages/commodity'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vZGl0eS5qcyJdLCJuYW1lcyI6WyJSYW5rIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJkYXlzIiwiY2F0ZWdvcnkiLCJkYXkiLCJpc0VuZCIsImxvYWRUZXh0IiwidGFicyIsInRpdGxlIiwiZGVwcmVjaWF0ZXMiLCJkZXRhaWwiLCJrZXkiLCJhcGkiLCJnZXRSYW5rQnlDYXRlZ29yeUFuZERheSIsInF1ZXJ5IiwicmVzIiwic3RhdHVzQ29kZSIsImxlbmd0aCIsImRlcHJlY2lhdGVET0xpc3QiLCJpbmRleCIsImZvckVhY2giLCJlIiwicmFuayIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJwcmVsb2FkIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyx1QkFBaUI7QUFDZixvQkFBWSx3Q0FERztBQUVmLHFCQUFhLHlDQUZFO0FBR2YsbUJBQVcsdUNBSEk7QUFJZix5QkFBaUIsdUNBSkY7QUFLZixxQkFBYSx5Q0FMRTtBQU1mLHdCQUFnQiw0Q0FORDtBQU9mLDJCQUFtQiwyQ0FQSjtBQVFmLHFCQUFhO0FBUkU7QUFGVixLLFFBYVRDLEksR0FBTztBQUNMQyxZQUFNLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsRUFBVixDQUREO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsV0FBSyxDQUhBO0FBSUxDLGFBQU8sS0FKRjtBQUtMQyxnQkFBVSxPQUxMO0FBTUxDLFlBQU0sQ0FDSixFQUFDQyxPQUFPLElBQVIsRUFESSxFQUVKLEVBQUNBLE9BQU8sSUFBUixFQUZJLEVBR0osRUFBQ0EsT0FBTyxJQUFSLEVBSEksRUFJSixFQUFDQSxPQUFPLElBQVIsRUFKSSxDQU5EO0FBWUxDLG1CQUFhO0FBWlIsSzs7Ozs7OztZQWNZQyxNLFNBQUFBLE07Ozs7OztBQUNqQixxQkFBS04sR0FBTCxHQUFXLEtBQUtGLElBQUwsQ0FBVVEsT0FBT0MsR0FBakIsQ0FBWDtBQUNBLHFCQUFLTixLQUFMLEdBQWEsS0FBYjtBQUNBLHFCQUFLQyxRQUFMLEdBQWdCLE9BQWhCOzt1QkFDa0JNLGNBQUlDLHVCQUFKLENBQTRCO0FBQzVDQyx5QkFBTztBQUNMWCw4QkFBVSxLQUFLQSxRQURWO0FBRUxDLHlCQUFLLEtBQUtBO0FBRkw7QUFEcUMsaUJBQTVCLEM7OztBQUFaVyxtQjs7QUFNTixvQkFBSUEsSUFBSUMsVUFBSixJQUFrQixHQUF0QixFQUEyQjtBQUN6QixzQkFBSUQsSUFBSWQsSUFBSixDQUFTZ0IsTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN4Qix5QkFBS1IsV0FBTCxHQUFtQk0sSUFBSWQsSUFBSixDQUFTLENBQVQsRUFBWWlCLGdCQUEvQjtBQUNJQyx5QkFGb0IsR0FFWixDQUZZOztBQUd4Qix5QkFBS1YsV0FBTCxDQUFpQlcsT0FBakIsQ0FBeUIsYUFBSztBQUM1QkMsd0JBQUVDLElBQUYsR0FBU0gsT0FBVDtBQUNELHFCQUZEO0FBR0Q7QUFDRixpQkFSRCxNQVFPO0FBQ0wsdUJBQUtWLFdBQUwsR0FBbUIsRUFBbkI7QUFDRDtBQUNELHFCQUFLSixLQUFMLEdBQWEsSUFBYjtBQUNBLHFCQUFLQyxRQUFMLEdBQWdCLFNBQWhCO0FBQ0FpQix3QkFBUUMsR0FBUixDQUFZLEtBQUtmLFdBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBR0tnQixNLEVBQVF4QixJLEVBQU07QUFDbkIsV0FBS0UsUUFBTCxHQUFnQkYsS0FBS3lCLE9BQUwsQ0FBYXZCLFFBQTdCO0FBQ0Q7Ozs7RUF4RCtCd0IsZUFBS0MsSTs7a0JBQWxCL0IsSSIsImZpbGUiOiJjb21tb2RpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mZjeS7t+aOkuihjOamnCcsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1sYWJlbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxhYmVsL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAgICd3eGMtcHJpY2UnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcmljZS9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWxvYWRtb3JlJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZG1vcmUvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy13eGMtbG9hZGluZyc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxvYWRpbmcvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1wYW5lbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXBhbmVsL2Rpc3QvaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGRheXM6IFsxLCAzLCA3LCAzMF0sXHJcbiAgICAgIGNhdGVnb3J5OiAnJyxcclxuICAgICAgZGF5OiAxLFxyXG4gICAgICBpc0VuZDogZmFsc2UsXHJcbiAgICAgIGxvYWRUZXh0OiBcIn7liqDovb3kuK1+XCIsXHJcbiAgICAgIHRhYnM6IFtcclxuICAgICAgICB7dGl0bGU6ICfkuIDlpKknfSxcclxuICAgICAgICB7dGl0bGU6ICfkuInlpKknfSxcclxuICAgICAgICB7dGl0bGU6ICfkuIDlkagnfSxcclxuICAgICAgICB7dGl0bGU6ICfkuIDmnIgnfVxyXG4gICAgICBdLFxyXG4gICAgICBkZXByZWNpYXRlczogW11cclxuICAgIH1cclxuICAgIGFzeW5jIG9uVGFiQ2hhbmdlKHtkZXRhaWx9KSB7XHJcbiAgICAgIHRoaXMuZGF5ID0gdGhpcy5kYXlzW2RldGFpbC5rZXldXHJcbiAgICAgIHRoaXMuaXNFbmQgPSBmYWxzZVxyXG4gICAgICB0aGlzLmxvYWRUZXh0ID0gJ37liqDovb3kuK1+J1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0UmFua0J5Q2F0ZWdvcnlBbmREYXkoe1xyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSxcclxuICAgICAgICAgIGRheTogdGhpcy5kYXlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgIHRoaXMuZGVwcmVjaWF0ZXMgPSByZXMuZGF0YVswXS5kZXByZWNpYXRlRE9MaXN0XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSAxO1xyXG4gICAgICAgICAgdGhpcy5kZXByZWNpYXRlcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICBlLnJhbmsgPSBpbmRleCsrO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kZXByZWNpYXRlcyA9IFtdXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuICAgICAgdGhpcy5sb2FkVGV4dCA9ICd+5rKh5pyJ5pu05aSa5LqGfidcclxuICAgICAgY29uc29sZS5sb2codGhpcy5kZXByZWNpYXRlcylcclxuICAgICAgXHJcbiAgICB9IFxyXG4gICAgb25Mb2FkKHBhcmFtcywgZGF0YSkge1xyXG4gICAgICB0aGlzLmNhdGVnb3J5ID0gZGF0YS5wcmVsb2FkLmNhdGVnb3J5XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=