'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _echarts = require('./../ec-canvas/echarts.js');

var _echarts2 = _interopRequireDefault(_echarts);

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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          // show: false
        },
        yAxis: {
          x: 'center',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
            // show: false
          } },
        series: [{
          name: '京东',
          type: 'line',
          smooth: true,
          data: [18, 36, 65, 30, 78, 40, 200]
        }]
      };
      chart.setOption(option);
      return chart;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/history'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImVjIiwibWV0aG9kcyIsImVjaGFydEluaXQiLCJlIiwiaW5pdENoYXJ0IiwiZGV0YWlsIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFydCIsImVjaGFydHMiLCJpbml0Iiwic2V0Q2hhcnQiLCJvcHRpb24iLCJ0aXRsZSIsInRleHQiLCJsZWZ0IiwiY29sb3IiLCJsZWdlbmQiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6IiwiZ3JpZCIsImNvbnRhaW5MYWJlbCIsInRvb2x0aXAiLCJzaG93IiwidHJpZ2dlciIsInhBeGlzIiwidHlwZSIsImJvdW5kYXJ5R2FwIiwieUF4aXMiLCJ4Iiwic3BsaXRMaW5lIiwibGluZVN0eWxlIiwic2VyaWVzIiwibmFtZSIsInNtb290aCIsInNldE9wdGlvbiIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFFBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLHdDQURHO0FBRWYscUJBQWEseUNBRkU7QUFHZixxQkFBYSx5Q0FIRTtBQUlmLHFCQUFhLHlDQUpFO0FBS2Ysc0JBQWMsMENBTEM7QUFNZixvQkFBWSx3Q0FORztBQU9mLHNCQUFjLDBDQVBDO0FBUWYscUJBQWE7QUFSRTtBQUZWLEssUUFhVEMsSSxHQUFPO0FBQ0xDLFVBQUk7QUFEQyxLLFFBR1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osYUFBS0MsU0FBTCxDQUFlRCxFQUFFRSxNQUFGLENBQVNDLE1BQXhCLEVBQWdDSCxFQUFFRSxNQUFGLENBQVNFLEtBQXpDLEVBQWdESixFQUFFRSxNQUFGLENBQVNHLE1BQXpEO0FBQ0Q7QUFITyxLOzs7Ozs4QkFLQUYsTSxFQUFRQyxLLEVBQU9DLE0sRUFBUTs7QUFFL0IsVUFBTUMsUUFBUUMsa0JBQVFDLElBQVIsQ0FBYUwsTUFBYixFQUFxQixJQUFyQixFQUEyQjtBQUN2Q0MsZUFBT0EsS0FEZ0M7QUFFdkNDLGdCQUFRQTtBQUYrQixPQUEzQixDQUFkO0FBSUFGLGFBQU9NLFFBQVAsQ0FBZ0JILEtBQWhCO0FBQ0EsVUFBTUksU0FBUztBQUNiQyxlQUFPO0FBQ0xDLGdCQUFNLEVBREQ7QUFFTEMsZ0JBQU07QUFGRCxTQURNO0FBS2JDLGVBQU8sQ0FBQyxTQUFELENBTE07QUFNYkMsZ0JBQVE7QUFDTm5CLGdCQUFNLENBQUMsSUFBRCxDQURBO0FBRU5vQixlQUFLLEVBRkM7QUFHTkgsZ0JBQU0sUUFIQTtBQUlOSSwyQkFBaUIsU0FKWDtBQUtOQyxhQUFHO0FBTEcsU0FOSztBQWFiQyxjQUFNO0FBQ0pDLHdCQUFjO0FBRFYsU0FiTztBQWdCYkMsaUJBQVM7QUFDUEMsZ0JBQU0sSUFEQztBQUVQQyxtQkFBUztBQUZGLFNBaEJJO0FBb0JiQyxlQUFPO0FBQ0xDLGdCQUFNLFVBREQ7QUFFTEMsdUJBQWEsS0FGUjtBQUdMOUIsZ0JBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckM7QUFDTjtBQUpLLFNBcEJNO0FBMEJiK0IsZUFBTztBQUNMQyxhQUFHLFFBREU7QUFFTEgsZ0JBQU0sT0FGRDtBQUdMSSxxQkFBVztBQUNUQyx1QkFBVztBQUNUTCxvQkFBTTtBQURHO0FBSWI7QUFMVyxXQUhOLEVBMUJNO0FBb0NiTSxnQkFBUSxDQUFDO0FBQ1BDLGdCQUFNLElBREM7QUFFUFAsZ0JBQU0sTUFGQztBQUdQUSxrQkFBUSxJQUhEO0FBSVByQyxnQkFBTSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsR0FBekI7QUFKQyxTQUFEO0FBcENLLE9BQWY7QUEyQ0FVLFlBQU00QixTQUFOLENBQWdCeEIsTUFBaEI7QUFDQSxhQUFPSixLQUFQO0FBQ0Q7Ozs7RUExRWdDNkIsZUFBS0MsSTs7a0JBQW5CNUMsSyIsImZpbGUiOiJoaXN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgZWNoYXJ0cyBmcm9tICcuLi9lYy1jYW52YXMvZWNoYXJ0cy5qcydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblk4Hljoblj7Lku7fmoLwnLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAnd3hjLWZsZXgnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtcGFuZWwnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wYW5lbC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXByaWNlJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcHJpY2UvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1sYWJlbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWxhYmVsL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtYXZhdGFyJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYXZhdGFyL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtZWxpcCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWVsaXAvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1idXR0b24nOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1idXR0b24vZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ2VjLWNhbnZhcyc6ICcuLi9lYy1jYW52YXMvZWMtY2FudmFzJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBlYzoge31cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGVjaGFydEluaXQoZSkge1xyXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KGUuZGV0YWlsLmNhbnZhcywgZS5kZXRhaWwud2lkdGgsIGUuZGV0YWlsLmhlaWdodClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdENoYXJ0KGNhbnZhcywgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICBcclxuICAgICAgY29uc3QgY2hhcnQgPSBlY2hhcnRzLmluaXQoY2FudmFzLCBudWxsLCB7XHJcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICAgIH0pXHJcbiAgICAgIGNhbnZhcy5zZXRDaGFydChjaGFydClcclxuICAgICAgY29uc3Qgb3B0aW9uID0ge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgIGxlZnQ6ICdsZWZ0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3I6IFtcIiMzN0EyREFcIl0sXHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBkYXRhOiBbJ+S6rOS4nCddLFxyXG4gICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgIGxlZnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y1RjVEQycsXHJcbiAgICAgICAgICB6OiAxMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgIHRyaWdnZXI6ICdheGlzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXHJcbiAgICAgICAgICBib3VuZGFyeUdhcDogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBbJ+WRqOS4gCcsICflkajkuownLCAn5ZGo5LiJJywgJ+WRqOWbmycsICflkajkupQnLCAn5ZGo5YWtJywgJ+WRqOaXpSddLFxyXG4gICAgICAgICAgLy8gc2hvdzogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHlBeGlzOiB7XHJcbiAgICAgICAgICB4OiAnY2VudGVyJyxcclxuICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgICAgICBzcGxpdExpbmU6IHtcclxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2Rhc2hlZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gc2hvdzogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgIG5hbWU6ICfkuqzkuJwnLFxyXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgc21vb3RoOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogWzE4LCAzNiwgNjUsIDMwLCA3OCwgNDAsIDIwMF1cclxuICAgICAgICB9XVxyXG4gICAgICB9O1xyXG4gICAgICBjaGFydC5zZXRPcHRpb24ob3B0aW9uKVxyXG4gICAgICByZXR1cm4gY2hhcnRcclxuICAgIH1cclxuICB9XHJcbiJdfQ==