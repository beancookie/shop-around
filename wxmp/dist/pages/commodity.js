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
    value: function onTabChange(_ref2) {
      var detail = _ref2.detail;

      this.getRankData(detail);
    }
  }, {
    key: 'getRankData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(detail) {
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
                  if (res.data.length >= 1) {
                    console.log('查询降价排行榜成功');
                    this.depreciates = res.data[0].depreciateDOList;
                    index = 1;

                    this.depreciates.forEach(function (e) {
                      e.rank = index++;
                    });
                    this.isEnd = true;
                    this.loadText = '~没有更多了~';
                  } else {
                    this.depreciates = [];
                    this.isEnd = true;
                    this.loadText = '~没有更多了~';
                  }
                }
                this.$apply();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getRankData(_x) {
        return _ref3.apply(this, arguments);
      }

      return getRankData;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vZGl0eS5qcyJdLCJuYW1lcyI6WyJSYW5rIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJkYXlzIiwiY2F0ZWdvcnkiLCJkYXkiLCJpc0VuZCIsImxvYWRUZXh0IiwidGFicyIsInRpdGxlIiwiZGVwcmVjaWF0ZXMiLCJkZXRhaWwiLCJnZXRSYW5rRGF0YSIsImtleSIsImFwaSIsImdldFJhbmtCeUNhdGVnb3J5QW5kRGF5IiwicXVlcnkiLCJyZXMiLCJzdGF0dXNDb2RlIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImRlcHJlY2lhdGVET0xpc3QiLCJpbmRleCIsImZvckVhY2giLCJlIiwicmFuayIsIiRhcHBseSIsInBhcmFtcyIsInByZWxvYWQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLHdDQURHO0FBRWYscUJBQWEseUNBRkU7QUFHZixtQkFBVyx1Q0FISTtBQUlmLHlCQUFpQix1Q0FKRjtBQUtmLHFCQUFhLHlDQUxFO0FBTWYsd0JBQWdCLDRDQU5EO0FBT2YsMkJBQW1CLDJDQVBKO0FBUWYscUJBQWE7QUFSRTtBQUZWLEssUUFhVEMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLENBREQ7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxXQUFLLENBSEE7QUFJTEMsYUFBTyxLQUpGO0FBS0xDLGdCQUFVLE9BTEw7QUFNTEMsWUFBTSxDQUNKLEVBQUNDLE9BQU8sSUFBUixFQURJLEVBRUosRUFBQ0EsT0FBTyxJQUFSLEVBRkksRUFHSixFQUFDQSxPQUFPLElBQVIsRUFISSxFQUlKLEVBQUNBLE9BQU8sSUFBUixFQUpJLENBTkQ7QUFZTEMsbUJBQWE7QUFaUixLOzs7Ozt1Q0FjZTtBQUFBLFVBQVRDLE1BQVMsU0FBVEEsTUFBUzs7QUFDbkIsV0FBS0MsV0FBTCxDQUFpQkQsTUFBakI7QUFDRjs7OzsyRkFDaUJBLE07Ozs7OztBQUNoQixxQkFBS04sR0FBTCxHQUFXLEtBQUtGLElBQUwsQ0FBVVEsT0FBT0UsR0FBakIsQ0FBWDtBQUNBLHFCQUFLUCxLQUFMLEdBQWEsS0FBYjtBQUNBLHFCQUFLQyxRQUFMLEdBQWdCLE9BQWhCOzt1QkFDa0JPLGNBQUlDLHVCQUFKLENBQTRCO0FBQzVDQyx5QkFBTztBQUNMWiw4QkFBVSxLQUFLQSxRQURWO0FBRUxDLHlCQUFLLEtBQUtBO0FBRkw7QUFEcUMsaUJBQTVCLEM7OztBQUFaWSxtQjs7QUFNTixvQkFBSUEsSUFBSUMsVUFBSixJQUFrQixHQUF0QixFQUEyQjtBQUN6QixzQkFBSUQsSUFBSWYsSUFBSixDQUFTaUIsTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN4QkMsNEJBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EseUJBQUtYLFdBQUwsR0FBbUJPLElBQUlmLElBQUosQ0FBUyxDQUFULEVBQVlvQixnQkFBL0I7QUFDSUMseUJBSG9CLEdBR1osQ0FIWTs7QUFJeEIseUJBQUtiLFdBQUwsQ0FBaUJjLE9BQWpCLENBQXlCLGFBQUs7QUFDNUJDLHdCQUFFQyxJQUFGLEdBQVNILE9BQVQ7QUFDRCxxQkFGRDtBQUdBLHlCQUFLakIsS0FBTCxHQUFhLElBQWI7QUFDQSx5QkFBS0MsUUFBTCxHQUFnQixTQUFoQjtBQUNELG1CQVRELE1BU087QUFDTCx5QkFBS0csV0FBTCxHQUFtQixFQUFuQjtBQUNBLHlCQUFLSixLQUFMLEdBQWEsSUFBYjtBQUNBLHlCQUFLQyxRQUFMLEdBQWdCLFNBQWhCO0FBQ0Q7QUFDRjtBQUNELHFCQUFLb0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUVLQyxNLEVBQVExQixJLEVBQU07QUFDbkIsV0FBS0UsUUFBTCxHQUFnQkYsS0FBSzJCLE9BQUwsQ0FBYXpCLFFBQTdCO0FBQ0Q7Ozs7RUE3RCtCMEIsZUFBS0MsSTs7a0JBQWxCakMsSSIsImZpbGUiOiJjb21tb2RpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mZjeS7t+aOkuihjOamnCcsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1sYWJlbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxhYmVsL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAgICd3eGMtcHJpY2UnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcmljZS9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWxvYWRtb3JlJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZG1vcmUvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy13eGMtbG9hZGluZyc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxvYWRpbmcvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1wYW5lbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXBhbmVsL2Rpc3QvaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGRheXM6IFsxLCAzLCA3LCAzMF0sXHJcbiAgICAgIGNhdGVnb3J5OiAnJyxcclxuICAgICAgZGF5OiAxLFxyXG4gICAgICBpc0VuZDogZmFsc2UsXHJcbiAgICAgIGxvYWRUZXh0OiBcIn7liqDovb3kuK1+XCIsXHJcbiAgICAgIHRhYnM6IFtcclxuICAgICAgICB7dGl0bGU6ICfkuIDlpKknfSxcclxuICAgICAgICB7dGl0bGU6ICfkuInlpKknfSxcclxuICAgICAgICB7dGl0bGU6ICfkuIDlkagnfSxcclxuICAgICAgICB7dGl0bGU6ICfkuIDmnIgnfVxyXG4gICAgICBdLFxyXG4gICAgICBkZXByZWNpYXRlczogW11cclxuICAgIH1cclxuICAgIG9uVGFiQ2hhbmdlKHtkZXRhaWx9KSB7XHJcbiAgICAgICB0aGlzLmdldFJhbmtEYXRhKGRldGFpbClcclxuICAgIH0gXHJcbiAgICBhc3luYyBnZXRSYW5rRGF0YShkZXRhaWwpIHtcclxuICAgICAgdGhpcy5kYXkgPSB0aGlzLmRheXNbZGV0YWlsLmtleV1cclxuICAgICAgdGhpcy5pc0VuZCA9IGZhbHNlXHJcbiAgICAgIHRoaXMubG9hZFRleHQgPSAnfuWKoOi9veS4rX4nXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXRSYW5rQnlDYXRlZ29yeUFuZERheSh7XHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgZGF5OiB0aGlzLmRheVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+afpeivoumZjeS7t+aOkuihjOamnOaIkOWKnycpXHJcbiAgICAgICAgICB0aGlzLmRlcHJlY2lhdGVzID0gcmVzLmRhdGFbMF0uZGVwcmVjaWF0ZURPTGlzdFxyXG4gICAgICAgICAgbGV0IGluZGV4ID0gMVxyXG4gICAgICAgICAgdGhpcy5kZXByZWNpYXRlcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICBlLnJhbmsgPSBpbmRleCsrXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuICAgICAgICAgIHRoaXMubG9hZFRleHQgPSAnfuayoeacieabtOWkmuS6hn4nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGVwcmVjaWF0ZXMgPSBbXVxyXG4gICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuICAgICAgICAgIHRoaXMubG9hZFRleHQgPSAnfuayoeacieabtOWkmuS6hn4nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICAgIG9uTG9hZChwYXJhbXMsIGRhdGEpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yeSA9IGRhdGEucHJlbG9hZC5jYXRlZ29yeVxyXG4gICAgfVxyXG4gIH1cclxuIl19