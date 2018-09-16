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
      this.commodity.prices.forEach(function (e) {
        if (e.price < lowestPrice) {
          lowestPrice = e.price;
        }
        prices.push(e.price);
        dates.push(e.date);
      });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImN1cnJlbnRQcmljZSIsImxvd2VzdFByaWNlIiwiY29tbW9kaXR5IiwiZWMiLCJtZXRob2RzIiwiZWNoYXJ0SW5pdCIsImUiLCJpbml0Q2hhcnQiLCJkZXRhaWwiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInByaWNlcyIsImRhdGVzIiwiZm9yRWFjaCIsInByaWNlIiwicHVzaCIsImRhdGUiLCJsZW5ndGgiLCJjaGFydCIsImVjaGFydHMiLCJpbml0Iiwic2V0Q2hhcnQiLCJvcHRpb24iLCJ0aXRsZSIsInRleHQiLCJsZWZ0IiwiY29sb3IiLCJsZWdlbmQiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6IiwiZ3JpZCIsImNvbnRhaW5MYWJlbCIsInRvb2x0aXAiLCJzaG93IiwidHJpZ2dlciIsInhBeGlzIiwidHlwZSIsImJvdW5kYXJ5R2FwIiwieUF4aXMiLCJ4Iiwic3BsaXRMaW5lIiwibGluZVN0eWxlIiwic2VyaWVzIiwibmFtZSIsInNtb290aCIsInNldE9wdGlvbiIsInBhcmFtcyIsInByZWxvYWQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixRQURqQjtBQUVQQyx1QkFBaUI7QUFDZixvQkFBWSx3Q0FERztBQUVmLHFCQUFhLHlDQUZFO0FBR2YscUJBQWEseUNBSEU7QUFJZixxQkFBYSx5Q0FKRTtBQUtmLHNCQUFjLDBDQUxDO0FBTWYsb0JBQVksd0NBTkc7QUFPZixzQkFBYywwQ0FQQztBQVFmLHFCQUFhO0FBUkU7QUFGVixLLFFBYVRDLEksR0FBTztBQUNMQyxvQkFBYyxDQURUO0FBRUxDLG1CQUFhLENBRlI7QUFHTEMsaUJBQVcsRUFITjtBQUlMQyxVQUFJO0FBSkMsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaLGFBQUtDLFNBQUwsQ0FBZUQsRUFBRUUsTUFBRixDQUFTQyxNQUF4QixFQUFnQ0gsRUFBRUUsTUFBRixDQUFTRSxLQUF6QyxFQUFnREosRUFBRUUsTUFBRixDQUFTRyxNQUF6RDtBQUNEO0FBSE8sSzs7Ozs7OEJBS0FGLE0sRUFBUUMsSyxFQUFPQyxNLEVBQVE7QUFDL0I7QUFDQSxVQUFJQyxTQUFTLEVBQWI7QUFDQTtBQUNBLFVBQUlDLFFBQVEsRUFBWjtBQUNBLFVBQUlaLGNBQWMsS0FBSyxFQUF2QjtBQUNBLFdBQUtDLFNBQUwsQ0FBZVUsTUFBZixDQUFzQkUsT0FBdEIsQ0FBOEIsYUFBSztBQUNqQyxZQUFJUixFQUFFUyxLQUFGLEdBQVVkLFdBQWQsRUFBMkI7QUFDekJBLHdCQUFjSyxFQUFFUyxLQUFoQjtBQUNEO0FBQ0RILGVBQU9JLElBQVAsQ0FBWVYsRUFBRVMsS0FBZDtBQUNBRixjQUFNRyxJQUFOLENBQVdWLEVBQUVXLElBQWI7QUFDRCxPQU5EO0FBT0E7QUFDQSxXQUFLaEIsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQTtBQUNBLFdBQUtELFlBQUwsR0FBb0JZLE9BQU9BLE9BQU9NLE1BQVAsR0FBZ0IsQ0FBdkIsQ0FBcEI7O0FBRUEsVUFBTUMsUUFBUUMsa0JBQVFDLElBQVIsQ0FBYVosTUFBYixFQUFxQixJQUFyQixFQUEyQjtBQUN2Q0MsZUFBT0EsS0FEZ0M7QUFFdkNDLGdCQUFRQTtBQUYrQixPQUEzQixDQUFkO0FBSUFGLGFBQU9hLFFBQVAsQ0FBZ0JILEtBQWhCO0FBQ0EsVUFBTUksU0FBUztBQUNiQyxlQUFPO0FBQ0xDLGdCQUFNLEVBREQ7QUFFTEMsZ0JBQU07QUFGRCxTQURNO0FBS2JDLGVBQU8sQ0FBQyxTQUFELENBTE07QUFNYkMsZ0JBQVE7QUFDTjdCLGdCQUFNLENBQUMsSUFBRCxDQURBO0FBRU44QixlQUFLLEVBRkM7QUFHTkgsZ0JBQU0sUUFIQTtBQUlOSSwyQkFBaUIsU0FKWDtBQUtOQyxhQUFHO0FBTEcsU0FOSztBQWFiQyxjQUFNO0FBQ0pDLHdCQUFjO0FBRFYsU0FiTztBQWdCYkMsaUJBQVM7QUFDUEMsZ0JBQU0sSUFEQztBQUVQQyxtQkFBUztBQUZGLFNBaEJJO0FBb0JiQyxlQUFPO0FBQ0xDLGdCQUFNLFVBREQ7QUFFTEMsdUJBQWEsS0FGUjtBQUdMeEMsZ0JBQU1jO0FBSEQsU0FwQk07QUF5QmIyQixlQUFPO0FBQ0xDLGFBQUcsUUFERTtBQUVMSCxnQkFBTSxPQUZEO0FBR0xJLHFCQUFXO0FBQ1RDLHVCQUFXO0FBQ1RMLG9CQUFNO0FBREc7QUFERjtBQUhOLFNBekJNO0FBa0NiTSxnQkFBUSxDQUFDO0FBQ1BDLGdCQUFNLElBREM7QUFFUFAsZ0JBQU0sTUFGQztBQUdQUSxrQkFBUSxJQUhEO0FBSVAvQyxnQkFBTWE7QUFKQyxTQUFEO0FBbENLLE9BQWY7QUF5Q0FPLFlBQU00QixTQUFOLENBQWdCeEIsTUFBaEI7QUFDQSxhQUFPSixLQUFQO0FBQ0Q7OzsyQkFDTTZCLE0sRUFBUWpELEksRUFBTTtBQUNuQixXQUFLRyxTQUFMLEdBQWlCSCxLQUFLa0QsT0FBTCxDQUFhL0MsU0FBOUI7QUFDRDs7OztFQTlGZ0NnRCxlQUFLQyxJOztrQkFBbkJ4RCxLIiwiZmlsZSI6Imhpc3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBlY2hhcnRzIGZyb20gJy4uL2VjLWNhbnZhcy9lY2hhcnRzJ1xyXG4gIGltcG9ydCB7XHJcbiAgICBDT01NT0RJVFlcclxuICB9IGZyb20gJy4uL2NvbmZpZy9jb25zdGFudCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblk4Hljoblj7Lku7fmoLwnLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAnd3hjLWZsZXgnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtcGFuZWwnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wYW5lbC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXByaWNlJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcHJpY2UvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1sYWJlbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxhYmVsL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtYXZhdGFyJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYXZhdGFyL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtZWxpcCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWVsaXAvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1idXR0b24nOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1idXR0b24vZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ2VjLWNhbnZhcyc6ICcuLi9lYy1jYW52YXMvZWMtY2FudmFzJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBjdXJyZW50UHJpY2U6IDAsXHJcbiAgICAgIGxvd2VzdFByaWNlOiAwLFxyXG4gICAgICBjb21tb2RpdHk6IHt9LFxyXG4gICAgICBlYzoge31cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGVjaGFydEluaXQoZSkge1xyXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KGUuZGV0YWlsLmNhbnZhcywgZS5kZXRhaWwud2lkdGgsIGUuZGV0YWlsLmhlaWdodClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdENoYXJ0KGNhbnZhcywgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAvLyDku7fmoLzmlbDnu4RcclxuICAgICAgbGV0IHByaWNlcyA9IFtdXHJcbiAgICAgIC8vIOaXpeacn+aVsOe7hFxyXG4gICAgICBsZXQgZGF0ZXMgPSBbXVxyXG4gICAgICBsZXQgbG93ZXN0UHJpY2UgPSAyIDw8IDIwXHJcbiAgICAgIHRoaXMuY29tbW9kaXR5LnByaWNlcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIGlmIChlLnByaWNlIDwgbG93ZXN0UHJpY2UpIHtcclxuICAgICAgICAgIGxvd2VzdFByaWNlID0gZS5wcmljZVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcmljZXMucHVzaChlLnByaWNlKVxyXG4gICAgICAgIGRhdGVzLnB1c2goZS5kYXRlKVxyXG4gICAgICB9KVxyXG4gICAgICAvLyDljoblj7LmnIDkvY7ku7dcclxuICAgICAgdGhpcy5sb3dlc3RQcmljZSA9IGxvd2VzdFByaWNlXHJcbiAgICAgIC8vIOW9k+WJjeS7t+agvFxyXG4gICAgICB0aGlzLmN1cnJlbnRQcmljZSA9IHByaWNlc1twcmljZXMubGVuZ3RoIC0gMV1cclxuXHJcbiAgICAgIGNvbnN0IGNoYXJ0ID0gZWNoYXJ0cy5pbml0KGNhbnZhcywgbnVsbCwge1xyXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxyXG4gICAgICB9KVxyXG4gICAgICBjYW52YXMuc2V0Q2hhcnQoY2hhcnQpXHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICBsZWZ0OiAnbGVmdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiBbXCIjMzdBMkRBXCJdLFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgZGF0YTogWyfkuqzkuJwnXSxcclxuICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICBsZWZ0OiAnY2VudGVyJyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUY1REMnLFxyXG4gICAgICAgICAgejogMTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICBjb250YWluTGFiZWw6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICB0cmlnZ2VyOiAnYXhpcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHhBeGlzOiB7XHJcbiAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgYm91bmRhcnlHYXA6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogZGF0ZXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5QXhpczoge1xyXG4gICAgICAgICAgeDogJ2NlbnRlcicsXHJcbiAgICAgICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgICAgICAgc3BsaXRMaW5lOiB7XHJcbiAgICAgICAgICAgIGxpbmVTdHlsZToge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdkYXNoZWQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgIG5hbWU6ICfkuqzkuJwnLFxyXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgc21vb3RoOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogcHJpY2VzXHJcbiAgICAgICAgfV1cclxuICAgICAgfTtcclxuICAgICAgY2hhcnQuc2V0T3B0aW9uKG9wdGlvbilcclxuICAgICAgcmV0dXJuIGNoYXJ0XHJcbiAgICB9XHJcbiAgICBvbkxvYWQocGFyYW1zLCBkYXRhKSB7XHJcbiAgICAgIHRoaXMuY29tbW9kaXR5ID0gZGF0YS5wcmVsb2FkLmNvbW1vZGl0eVxyXG4gICAgfVxyXG4gIH1cclxuIl19