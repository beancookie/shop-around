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
      commodity: undefined,
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
      var prices = [];
      var dates = [];
      if (this.commodity) {
        var lowestPrice = 2 << 20;
        this.commodity.prices.forEach(function (e) {
          if (e.price < lowestPrice) {
            lowestPrice = e.price;
          }
          prices.push(e.price);
          dates.push(e.date);
        });
        this.lowestPrice = lowestPrice;
        this.currentPrice = prices[prices.length - 1];
      }

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
    value: function onLoad() {
      var commodity = wx.getStorageSync(_constant.COMMODITY);
      if (commodity) {
        this.commodity = commodity;
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/history'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImN1cnJlbnRQcmljZSIsImxvd2VzdFByaWNlIiwiY29tbW9kaXR5IiwidW5kZWZpbmVkIiwiZWMiLCJtZXRob2RzIiwiZWNoYXJ0SW5pdCIsImUiLCJpbml0Q2hhcnQiLCJkZXRhaWwiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInByaWNlcyIsImRhdGVzIiwiZm9yRWFjaCIsInByaWNlIiwicHVzaCIsImRhdGUiLCJsZW5ndGgiLCJjaGFydCIsImVjaGFydHMiLCJpbml0Iiwic2V0Q2hhcnQiLCJvcHRpb24iLCJ0aXRsZSIsInRleHQiLCJsZWZ0IiwiY29sb3IiLCJsZWdlbmQiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6IiwiZ3JpZCIsImNvbnRhaW5MYWJlbCIsInRvb2x0aXAiLCJzaG93IiwidHJpZ2dlciIsInhBeGlzIiwidHlwZSIsImJvdW5kYXJ5R2FwIiwieUF4aXMiLCJ4Iiwic3BsaXRMaW5lIiwibGluZVN0eWxlIiwic2VyaWVzIiwibmFtZSIsInNtb290aCIsInNldE9wdGlvbiIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJDT01NT0RJVFkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixRQURqQjtBQUVQQyx1QkFBaUI7QUFDZixvQkFBWSx3Q0FERztBQUVmLHFCQUFhLHlDQUZFO0FBR2YscUJBQWEseUNBSEU7QUFJZixxQkFBYSx5Q0FKRTtBQUtmLHNCQUFjLDBDQUxDO0FBTWYsb0JBQVksd0NBTkc7QUFPZixzQkFBYywwQ0FQQztBQVFmLHFCQUFhO0FBUkU7QUFGVixLLFFBYVRDLEksR0FBTztBQUNMQyxvQkFBYyxDQURUO0FBRUxDLG1CQUFhLENBRlI7QUFHTEMsaUJBQVdDLFNBSE47QUFJTEMsVUFBSTtBQUpDLEssUUFNUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixhQUFLQyxTQUFMLENBQWVELEVBQUVFLE1BQUYsQ0FBU0MsTUFBeEIsRUFBZ0NILEVBQUVFLE1BQUYsQ0FBU0UsS0FBekMsRUFBZ0RKLEVBQUVFLE1BQUYsQ0FBU0csTUFBekQ7QUFDRDtBQUhPLEs7Ozs7OzhCQUtBRixNLEVBQVFDLEssRUFBT0MsTSxFQUFRO0FBQy9CLFVBQUlDLFNBQVMsRUFBYjtBQUNBLFVBQUlDLFFBQVEsRUFBWjtBQUNBLFVBQUksS0FBS1osU0FBVCxFQUFvQjtBQUNsQixZQUFJRCxjQUFjLEtBQUssRUFBdkI7QUFDQSxhQUFLQyxTQUFMLENBQWVXLE1BQWYsQ0FBc0JFLE9BQXRCLENBQThCLGFBQUs7QUFDakMsY0FBSVIsRUFBRVMsS0FBRixHQUFVZixXQUFkLEVBQTJCO0FBQ3pCQSwwQkFBY00sRUFBRVMsS0FBaEI7QUFDRDtBQUNESCxpQkFBT0ksSUFBUCxDQUFZVixFQUFFUyxLQUFkO0FBQ0FGLGdCQUFNRyxJQUFOLENBQVdWLEVBQUVXLElBQWI7QUFDRCxTQU5EO0FBT0EsYUFBS2pCLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsYUFBS0QsWUFBTCxHQUFvQmEsT0FBT0EsT0FBT00sTUFBUCxHQUFnQixDQUF2QixDQUFwQjtBQUNEOztBQUVELFVBQU1DLFFBQVFDLGtCQUFRQyxJQUFSLENBQWFaLE1BQWIsRUFBcUIsSUFBckIsRUFBMkI7QUFDdkNDLGVBQU9BLEtBRGdDO0FBRXZDQyxnQkFBUUE7QUFGK0IsT0FBM0IsQ0FBZDtBQUlBRixhQUFPYSxRQUFQLENBQWdCSCxLQUFoQjtBQUNBLFVBQU1JLFNBQVM7QUFDYkMsZUFBTztBQUNMQyxnQkFBTSxFQUREO0FBRUxDLGdCQUFNO0FBRkQsU0FETTtBQUtiQyxlQUFPLENBQUMsU0FBRCxDQUxNO0FBTWJDLGdCQUFRO0FBQ045QixnQkFBTSxDQUFDLElBQUQsQ0FEQTtBQUVOK0IsZUFBSyxFQUZDO0FBR05ILGdCQUFNLFFBSEE7QUFJTkksMkJBQWlCLFNBSlg7QUFLTkMsYUFBRztBQUxHLFNBTks7QUFhYkMsY0FBTTtBQUNKQyx3QkFBYztBQURWLFNBYk87QUFnQmJDLGlCQUFTO0FBQ1BDLGdCQUFNLElBREM7QUFFUEMsbUJBQVM7QUFGRixTQWhCSTtBQW9CYkMsZUFBTztBQUNMQyxnQkFBTSxVQUREO0FBRUxDLHVCQUFhLEtBRlI7QUFHTHpDLGdCQUFNZTtBQUhELFNBcEJNO0FBeUJiMkIsZUFBTztBQUNMQyxhQUFHLFFBREU7QUFFTEgsZ0JBQU0sT0FGRDtBQUdMSSxxQkFBVztBQUNUQyx1QkFBVztBQUNUTCxvQkFBTTtBQURHO0FBREY7QUFITixTQXpCTTtBQWtDYk0sZ0JBQVEsQ0FBQztBQUNQQyxnQkFBTSxJQURDO0FBRVBQLGdCQUFNLE1BRkM7QUFHUFEsa0JBQVEsSUFIRDtBQUlQaEQsZ0JBQU1jO0FBSkMsU0FBRDtBQWxDSyxPQUFmO0FBeUNBTyxZQUFNNEIsU0FBTixDQUFnQnhCLE1BQWhCO0FBQ0EsYUFBT0osS0FBUDtBQUNEOzs7NkJBQ1E7QUFDUCxVQUFJbEIsWUFBWStDLEdBQUdDLGNBQUgsQ0FBa0JDLG1CQUFsQixDQUFoQjtBQUNBLFVBQUlqRCxTQUFKLEVBQWU7QUFDYixhQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEO0FBQ0Y7Ozs7RUEvRmdDa0QsZUFBS0MsSTs7a0JBQW5CMUQsSyIsImZpbGUiOiJoaXN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgZWNoYXJ0cyBmcm9tICcuLi9lYy1jYW52YXMvZWNoYXJ0cydcclxuICBpbXBvcnQge1xyXG4gICAgQ09NTU9ESVRZXHJcbiAgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnQnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5ZOB5Y6G5Y+y5Lu35qC8JyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy1mbGV4JzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcGFuZWwvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1wcmljZSc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXByaWNlL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtbGFiZWwnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sYWJlbC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWF2YXRhcic6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWF2YXRhci9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWVsaXAnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1lbGlwL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtYnV0dG9uJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYnV0dG9uL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICdlYy1jYW52YXMnOiAnLi4vZWMtY2FudmFzL2VjLWNhbnZhcydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY3VycmVudFByaWNlOiAwLFxyXG4gICAgICBsb3dlc3RQcmljZTogMCxcclxuICAgICAgY29tbW9kaXR5OiB1bmRlZmluZWQsXHJcbiAgICAgIGVjOiB7fVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgZWNoYXJ0SW5pdChlKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Q2hhcnQoZS5kZXRhaWwuY2FudmFzLCBlLmRldGFpbC53aWR0aCwgZS5kZXRhaWwuaGVpZ2h0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0Q2hhcnQoY2FudmFzLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgIGxldCBwcmljZXMgPSBbXVxyXG4gICAgICBsZXQgZGF0ZXMgPSBbXVxyXG4gICAgICBpZiAodGhpcy5jb21tb2RpdHkpIHtcclxuICAgICAgICBsZXQgbG93ZXN0UHJpY2UgPSAyIDw8IDIwXHJcbiAgICAgICAgdGhpcy5jb21tb2RpdHkucHJpY2VzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICBpZiAoZS5wcmljZSA8IGxvd2VzdFByaWNlKSB7XHJcbiAgICAgICAgICAgIGxvd2VzdFByaWNlID0gZS5wcmljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJpY2VzLnB1c2goZS5wcmljZSlcclxuICAgICAgICAgIGRhdGVzLnB1c2goZS5kYXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5sb3dlc3RQcmljZSA9IGxvd2VzdFByaWNlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJpY2UgPSBwcmljZXNbcHJpY2VzLmxlbmd0aCAtIDFdXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNoYXJ0ID0gZWNoYXJ0cy5pbml0KGNhbnZhcywgbnVsbCwge1xyXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxyXG4gICAgICB9KVxyXG4gICAgICBjYW52YXMuc2V0Q2hhcnQoY2hhcnQpXHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICBsZWZ0OiAnbGVmdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiBbXCIjMzdBMkRBXCJdLFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgZGF0YTogWyfkuqzkuJwnXSxcclxuICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICBsZWZ0OiAnY2VudGVyJyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUY1REMnLFxyXG4gICAgICAgICAgejogMTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICBjb250YWluTGFiZWw6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICB0cmlnZ2VyOiAnYXhpcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHhBeGlzOiB7XHJcbiAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgYm91bmRhcnlHYXA6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogZGF0ZXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5QXhpczoge1xyXG4gICAgICAgICAgeDogJ2NlbnRlcicsXHJcbiAgICAgICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgICAgICAgc3BsaXRMaW5lOiB7XHJcbiAgICAgICAgICAgIGxpbmVTdHlsZToge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdkYXNoZWQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgIG5hbWU6ICfkuqzkuJwnLFxyXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgc21vb3RoOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogcHJpY2VzXHJcbiAgICAgICAgfV1cclxuICAgICAgfTtcclxuICAgICAgY2hhcnQuc2V0T3B0aW9uKG9wdGlvbilcclxuICAgICAgcmV0dXJuIGNoYXJ0XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIGxldCBjb21tb2RpdHkgPSB3eC5nZXRTdG9yYWdlU3luYyhDT01NT0RJVFkpXHJcbiAgICAgIGlmIChjb21tb2RpdHkpIHtcclxuICAgICAgICB0aGlzLmNvbW1vZGl0eSA9IGNvbW1vZGl0eVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=