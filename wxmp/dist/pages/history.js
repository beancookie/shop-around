'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _echarts = require('./../ec-canvas/echarts.js');

var _echarts2 = _interopRequireDefault(_echarts);

var _constant = require('./../config/constant.js');

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
      navigationBarTitleText: '商品历史价格',
      usingComponents: {
        'wxc-flex': '../packages/@minui/wxc-flex/dist/index',
        'wxc-panel': '../packages/@minui/wxc-panel/dist/index',
        'wxc-price': '../packages/@minui/wxc-price/dist/index',
        'wxc-label': '../packages/@minui/wxc-label/dist/index',
        'wxc-avatar': '../packages/@minui/wxc-avatar/dist/index',
        'wxc-elip': '../packages/@minui/wxc-elip/dist/index',
        'wxc-button': '../packages/@minui/wxc-button/dist/index',
        'ec-canvas': '../ec-canvas/ec-canvas'
      }
    }, _this.data = {
      currentPrice: 0,
      lowestPrice: 0,
      commodity: {},
      ec: {}
    }, _this.methods = {
      echartInit: function echartInit(e) {
        this.initChart(e.detail.canvas, e.detail.width, e.detail.height);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'initChart',
    value: function initChart(canvas, width, height) {
      // 价格数组
      var prices = [];
      // 日期数组
      var dates = [];
      var lowestPrice = 2 << 20;
      if (this.commodity.prices) {
        this.commodity.prices.forEach(function (e) {
          if (e.price < lowestPrice) {
            lowestPrice = e.price;
          }
          prices.push(e.price);
          dates.push(e.date);
        });
      } else {
        lowestPrice = 0;
      }
      // 历史最低价
      this.lowestPrice = lowestPrice;
      // 当前价格
      this.currentPrice = prices[prices.length - 1];

      var chart = _echarts2.default.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart);
      var option = {
        title: {
          text: '',
          left: 'left'
        },
        color: ["#37A2DA"],
        legend: {
          data: ['京东'],
          top: 50,
          left: 'center',
          backgroundColor: '#F5F5DC',
          z: 100
        },
        grid: {
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: dates
        },
        yAxis: {
          x: 'center',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [{
          name: '京东',
          type: 'line',
          smooth: true,
          data: prices
        }]
      };
      chart.setOption(option);
      return chart;
    }
  }, {
    key: 'onLoad',
    value: function onLoad(params, data) {
      this.commodity = data.preload.commodity;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/history'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImN1cnJlbnRQcmljZSIsImxvd2VzdFByaWNlIiwiY29tbW9kaXR5IiwiZWMiLCJtZXRob2RzIiwiZWNoYXJ0SW5pdCIsImUiLCJpbml0Q2hhcnQiLCJkZXRhaWwiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInByaWNlcyIsImRhdGVzIiwiZm9yRWFjaCIsInByaWNlIiwicHVzaCIsImRhdGUiLCJsZW5ndGgiLCJjaGFydCIsImVjaGFydHMiLCJpbml0Iiwic2V0Q2hhcnQiLCJvcHRpb24iLCJ0aXRsZSIsInRleHQiLCJsZWZ0IiwiY29sb3IiLCJsZWdlbmQiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6IiwiZ3JpZCIsImNvbnRhaW5MYWJlbCIsInRvb2x0aXAiLCJzaG93IiwidHJpZ2dlciIsInhBeGlzIiwidHlwZSIsImJvdW5kYXJ5R2FwIiwieUF4aXMiLCJ4Iiwic3BsaXRMaW5lIiwibGluZVN0eWxlIiwic2VyaWVzIiwibmFtZSIsInNtb290aCIsInNldE9wdGlvbiIsInBhcmFtcyIsInByZWxvYWQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixRQURqQjtBQUVQQyx1QkFBaUI7QUFDZixvQkFBWSx3Q0FERztBQUVmLHFCQUFhLHlDQUZFO0FBR2YscUJBQWEseUNBSEU7QUFJZixxQkFBYSx5Q0FKRTtBQUtmLHNCQUFjLDBDQUxDO0FBTWYsb0JBQVksd0NBTkc7QUFPZixzQkFBYywwQ0FQQztBQVFmLHFCQUFhO0FBUkU7QUFGVixLLFFBYVRDLEksR0FBTztBQUNMQyxvQkFBYyxDQURUO0FBRUxDLG1CQUFhLENBRlI7QUFHTEMsaUJBQVcsRUFITjtBQUlMQyxVQUFJO0FBSkMsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaLGFBQUtDLFNBQUwsQ0FBZUQsRUFBRUUsTUFBRixDQUFTQyxNQUF4QixFQUFnQ0gsRUFBRUUsTUFBRixDQUFTRSxLQUF6QyxFQUFnREosRUFBRUUsTUFBRixDQUFTRyxNQUF6RDtBQUNEO0FBSE8sSzs7Ozs7OEJBS0FGLE0sRUFBUUMsSyxFQUFPQyxNLEVBQVE7QUFDL0I7QUFDQSxVQUFJQyxTQUFTLEVBQWI7QUFDQTtBQUNBLFVBQUlDLFFBQVEsRUFBWjtBQUNBLFVBQUlaLGNBQWMsS0FBSyxFQUF2QjtBQUNBLFVBQUksS0FBS0MsU0FBTCxDQUFlVSxNQUFuQixFQUEyQjtBQUN6QixhQUFLVixTQUFMLENBQWVVLE1BQWYsQ0FBc0JFLE9BQXRCLENBQThCLGFBQUs7QUFDakMsY0FBSVIsRUFBRVMsS0FBRixHQUFVZCxXQUFkLEVBQTJCO0FBQ3pCQSwwQkFBY0ssRUFBRVMsS0FBaEI7QUFDRDtBQUNESCxpQkFBT0ksSUFBUCxDQUFZVixFQUFFUyxLQUFkO0FBQ0FGLGdCQUFNRyxJQUFOLENBQVdWLEVBQUVXLElBQWI7QUFDRCxTQU5EO0FBT0QsT0FSRCxNQVFPO0FBQ0xoQixzQkFBYyxDQUFkO0FBQ0Q7QUFDRDtBQUNBLFdBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0E7QUFDQSxXQUFLRCxZQUFMLEdBQW9CWSxPQUFPQSxPQUFPTSxNQUFQLEdBQWdCLENBQXZCLENBQXBCOztBQUVBLFVBQU1DLFFBQVFDLGtCQUFRQyxJQUFSLENBQWFaLE1BQWIsRUFBcUIsSUFBckIsRUFBMkI7QUFDdkNDLGVBQU9BLEtBRGdDO0FBRXZDQyxnQkFBUUE7QUFGK0IsT0FBM0IsQ0FBZDtBQUlBRixhQUFPYSxRQUFQLENBQWdCSCxLQUFoQjtBQUNBLFVBQU1JLFNBQVM7QUFDYkMsZUFBTztBQUNMQyxnQkFBTSxFQUREO0FBRUxDLGdCQUFNO0FBRkQsU0FETTtBQUtiQyxlQUFPLENBQUMsU0FBRCxDQUxNO0FBTWJDLGdCQUFRO0FBQ043QixnQkFBTSxDQUFDLElBQUQsQ0FEQTtBQUVOOEIsZUFBSyxFQUZDO0FBR05ILGdCQUFNLFFBSEE7QUFJTkksMkJBQWlCLFNBSlg7QUFLTkMsYUFBRztBQUxHLFNBTks7QUFhYkMsY0FBTTtBQUNKQyx3QkFBYztBQURWLFNBYk87QUFnQmJDLGlCQUFTO0FBQ1BDLGdCQUFNLElBREM7QUFFUEMsbUJBQVM7QUFGRixTQWhCSTtBQW9CYkMsZUFBTztBQUNMQyxnQkFBTSxVQUREO0FBRUxDLHVCQUFhLEtBRlI7QUFHTHhDLGdCQUFNYztBQUhELFNBcEJNO0FBeUJiMkIsZUFBTztBQUNMQyxhQUFHLFFBREU7QUFFTEgsZ0JBQU0sT0FGRDtBQUdMSSxxQkFBVztBQUNUQyx1QkFBVztBQUNUTCxvQkFBTTtBQURHO0FBREY7QUFITixTQXpCTTtBQWtDYk0sZ0JBQVEsQ0FBQztBQUNQQyxnQkFBTSxJQURDO0FBRVBQLGdCQUFNLE1BRkM7QUFHUFEsa0JBQVEsSUFIRDtBQUlQL0MsZ0JBQU1hO0FBSkMsU0FBRDtBQWxDSyxPQUFmO0FBeUNBTyxZQUFNNEIsU0FBTixDQUFnQnhCLE1BQWhCO0FBQ0EsYUFBT0osS0FBUDtBQUNEOzs7MkJBQ002QixNLEVBQVFqRCxJLEVBQU07QUFDbkIsV0FBS0csU0FBTCxHQUFpQkgsS0FBS2tELE9BQUwsQ0FBYS9DLFNBQTlCO0FBQ0Q7Ozs7RUFsR2dDZ0QsZUFBS0MsSTs7a0JBQW5CeEQsSyIsImZpbGUiOiJoaXN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgZWNoYXJ0cyBmcm9tICcuLi9lYy1jYW52YXMvZWNoYXJ0cydcclxuICBpbXBvcnQge1xyXG4gICAgQ09NTU9ESVRZXHJcbiAgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnQnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5ZOB5Y6G5Y+y5Lu35qC8JyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy1mbGV4JzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcGFuZWwvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1wcmljZSc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXByaWNlL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtbGFiZWwnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sYWJlbC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWF2YXRhcic6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWF2YXRhci9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWVsaXAnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1lbGlwL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtYnV0dG9uJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYnV0dG9uL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICdlYy1jYW52YXMnOiAnLi4vZWMtY2FudmFzL2VjLWNhbnZhcydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY3VycmVudFByaWNlOiAwLFxyXG4gICAgICBsb3dlc3RQcmljZTogMCxcclxuICAgICAgY29tbW9kaXR5OiB7fSxcclxuICAgICAgZWM6IHt9XHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBlY2hhcnRJbml0KGUpIHtcclxuICAgICAgICB0aGlzLmluaXRDaGFydChlLmRldGFpbC5jYW52YXMsIGUuZGV0YWlsLndpZHRoLCBlLmRldGFpbC5oZWlnaHQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXRDaGFydChjYW52YXMsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgLy8g5Lu35qC85pWw57uEXHJcbiAgICAgIGxldCBwcmljZXMgPSBbXVxyXG4gICAgICAvLyDml6XmnJ/mlbDnu4RcclxuICAgICAgbGV0IGRhdGVzID0gW11cclxuICAgICAgbGV0IGxvd2VzdFByaWNlID0gMiA8PCAyMFxyXG4gICAgICBpZiAodGhpcy5jb21tb2RpdHkucHJpY2VzKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb2RpdHkucHJpY2VzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICBpZiAoZS5wcmljZSA8IGxvd2VzdFByaWNlKSB7XHJcbiAgICAgICAgICAgIGxvd2VzdFByaWNlID0gZS5wcmljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJpY2VzLnB1c2goZS5wcmljZSlcclxuICAgICAgICAgIGRhdGVzLnB1c2goZS5kYXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG93ZXN0UHJpY2UgPSAwXHJcbiAgICAgIH1cclxuICAgICAgLy8g5Y6G5Y+y5pyA5L2O5Lu3XHJcbiAgICAgIHRoaXMubG93ZXN0UHJpY2UgPSBsb3dlc3RQcmljZVxyXG4gICAgICAvLyDlvZPliY3ku7fmoLxcclxuICAgICAgdGhpcy5jdXJyZW50UHJpY2UgPSBwcmljZXNbcHJpY2VzLmxlbmd0aCAtIDFdXHJcblxyXG4gICAgICBjb25zdCBjaGFydCA9IGVjaGFydHMuaW5pdChjYW52YXMsIG51bGwsIHtcclxuICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgICAgfSlcclxuICAgICAgY2FudmFzLnNldENoYXJ0KGNoYXJ0KVxyXG4gICAgICBjb25zdCBvcHRpb24gPSB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgbGVmdDogJ2xlZnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjogW1wiIzM3QTJEQVwiXSxcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRhdGE6IFsn5Lqs5LicJ10sXHJcbiAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgbGVmdDogJ2NlbnRlcicsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjVGNURDJyxcclxuICAgICAgICAgIHo6IDEwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgIGJvdW5kYXJ5R2FwOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGRhdGVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgIHg6ICdjZW50ZXInLFxyXG4gICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICAgIHNwbGl0TGluZToge1xyXG4gICAgICAgICAgICBsaW5lU3R5bGU6IHtcclxuICAgICAgICAgICAgICB0eXBlOiAnZGFzaGVkJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICBuYW1lOiAn5Lqs5LicJyxcclxuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgIHNtb290aDogdHJ1ZSxcclxuICAgICAgICAgIGRhdGE6IHByaWNlc1xyXG4gICAgICAgIH1dXHJcbiAgICAgIH07XHJcbiAgICAgIGNoYXJ0LnNldE9wdGlvbihvcHRpb24pXHJcbiAgICAgIHJldHVybiBjaGFydFxyXG4gICAgfVxyXG4gICAgb25Mb2FkKHBhcmFtcywgZGF0YSkge1xyXG4gICAgICB0aGlzLmNvbW1vZGl0eSA9IGRhdGEucHJlbG9hZC5jb21tb2RpdHlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==