'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WxCanvas = function () {
  function WxCanvas(ctx, canvasId) {
    _classCallCheck(this, WxCanvas);

    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;

    // this._initCanvas(zrender, ctx);
    this._initStyle(ctx);
    this._initEvent();
  }

  _createClass(WxCanvas, [{
    key: 'getContext',
    value: function getContext(contextType) {
      if (contextType === '2d') {
        return this.ctx;
      }
    }

    // canvasToTempFilePath(opt) {
    //   if (!opt.canvasId) {
    //     opt.canvasId = this.canvasId;
    //   }

    //   return wx.canvasToTempFilePath(opt, this);
    // }

  }, {
    key: 'setChart',
    value: function setChart(chart) {
      this.chart = chart;
    }
  }, {
    key: 'attachEvent',
    value: function attachEvent() {
      // noop
    }
  }, {
    key: 'detachEvent',
    value: function detachEvent() {
      // noop
    }
  }, {
    key: '_initCanvas',
    value: function _initCanvas(zrender, ctx) {
      zrender.util.getContext = function () {
        return ctx;
      };

      zrender.util.$override('measureText', function (text, font) {
        ctx.font = font || '12px sans-serif';
        return ctx.measureText(text);
      });
    }
  }, {
    key: '_initStyle',
    value: function _initStyle(ctx) {
      var _arguments = arguments;

      var styles = ['fillStyle', 'strokeStyle', 'globalAlpha', 'textAlign', 'textBaseAlign', 'shadow', 'lineWidth', 'lineCap', 'lineJoin', 'lineDash', 'miterLimit', 'fontSize'];

      styles.forEach(function (style) {
        Object.defineProperty(ctx, style, {
          set: function set(value) {
            if (style !== 'fillStyle' && style !== 'strokeStyle' || value !== 'none' && value !== null) {
              ctx['set' + style.charAt(0).toUpperCase() + style.slice(1)](value);
            }
          }
        });
      });

      ctx.createRadialGradient = function () {
        return ctx.createCircularGradient(_arguments);
      };
    }
  }, {
    key: '_initEvent',
    value: function _initEvent() {
      var _this = this;

      this.event = {};
      var eventNames = [{
        wxName: 'touchStart',
        ecName: 'mousedown'
      }, {
        wxName: 'touchMove',
        ecName: 'mousemove'
      }, {
        wxName: 'touchEnd',
        ecName: 'mouseup'
      }, {
        wxName: 'touchEnd',
        ecName: 'click'
      }];

      eventNames.forEach(function (name) {
        _this.event[name.wxName] = function (e) {
          var touch = e.touches[0];
          _this.chart._zr.handler.dispatch(name.ecName, {
            zrX: name.wxName === 'tap' ? touch.clientX : touch.x,
            zrY: name.wxName === 'tap' ? touch.clientY : touch.y
          });
        };
      });
    }
  }]);

  return WxCanvas;
}();

exports.default = WxCanvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4LWNhbnZhcy5qcyJdLCJuYW1lcyI6WyJXeENhbnZhcyIsImN0eCIsImNhbnZhc0lkIiwiY2hhcnQiLCJfaW5pdFN0eWxlIiwiX2luaXRFdmVudCIsImNvbnRleHRUeXBlIiwienJlbmRlciIsInV0aWwiLCJnZXRDb250ZXh0IiwiJG92ZXJyaWRlIiwidGV4dCIsImZvbnQiLCJtZWFzdXJlVGV4dCIsInN0eWxlcyIsImZvckVhY2giLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInN0eWxlIiwic2V0IiwidmFsdWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJjcmVhdGVDaXJjdWxhckdyYWRpZW50IiwiZXZlbnQiLCJldmVudE5hbWVzIiwid3hOYW1lIiwiZWNOYW1lIiwibmFtZSIsInRvdWNoIiwiZSIsInRvdWNoZXMiLCJfenIiLCJoYW5kbGVyIiwiZGlzcGF0Y2giLCJ6clgiLCJjbGllbnRYIiwieCIsInpyWSIsImNsaWVudFkiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQSxRO0FBQ25CLG9CQUFZQyxHQUFaLEVBQWlCQyxRQUFqQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxJQUFiOztBQUVBO0FBQ0EsU0FBS0MsVUFBTCxDQUFnQkgsR0FBaEI7QUFDQSxTQUFLSSxVQUFMO0FBQ0Q7Ozs7K0JBRVVDLFcsRUFBYTtBQUN0QixVQUFJQSxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsZUFBTyxLQUFLTCxHQUFaO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7OzZCQUVTRSxLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7O2tDQUVjO0FBQ2I7QUFDRDs7O2tDQUVhO0FBQ1o7QUFDRDs7O2dDQUVXSSxPLEVBQVNOLEcsRUFBSztBQUN4Qk0sY0FBUUMsSUFBUixDQUFhQyxVQUFiLEdBQTBCLFlBQVk7QUFDcEMsZUFBT1IsR0FBUDtBQUNELE9BRkQ7O0FBSUFNLGNBQVFDLElBQVIsQ0FBYUUsU0FBYixDQUF1QixhQUF2QixFQUFzQyxVQUFVQyxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQjtBQUMxRFgsWUFBSVcsSUFBSixHQUFXQSxRQUFRLGlCQUFuQjtBQUNBLGVBQU9YLElBQUlZLFdBQUosQ0FBZ0JGLElBQWhCLENBQVA7QUFDRCxPQUhEO0FBSUQ7OzsrQkFFVVYsRyxFQUFLO0FBQUE7O0FBQ2QsVUFBSWEsU0FBUyxDQUFDLFdBQUQsRUFBYyxhQUFkLEVBQTZCLGFBQTdCLEVBQ1gsV0FEVyxFQUNFLGVBREYsRUFDbUIsUUFEbkIsRUFDNkIsV0FEN0IsRUFFWCxTQUZXLEVBRUEsVUFGQSxFQUVZLFVBRlosRUFFd0IsWUFGeEIsRUFFc0MsVUFGdEMsQ0FBYjs7QUFJQUEsYUFBT0MsT0FBUCxDQUFlLGlCQUFTO0FBQ3RCQyxlQUFPQyxjQUFQLENBQXNCaEIsR0FBdEIsRUFBMkJpQixLQUEzQixFQUFrQztBQUNoQ0MsZUFBSyxvQkFBUztBQUNaLGdCQUFJRCxVQUFVLFdBQVYsSUFBeUJBLFVBQVUsYUFBbkMsSUFDQ0UsVUFBVSxNQUFWLElBQW9CQSxVQUFVLElBRG5DLEVBRUU7QUFDQW5CLGtCQUFJLFFBQVFpQixNQUFNRyxNQUFOLENBQWEsQ0FBYixFQUFnQkMsV0FBaEIsRUFBUixHQUF3Q0osTUFBTUssS0FBTixDQUFZLENBQVosQ0FBNUMsRUFBNERILEtBQTVEO0FBQ0Q7QUFDRjtBQVArQixTQUFsQztBQVNELE9BVkQ7O0FBWUFuQixVQUFJdUIsb0JBQUosR0FBMkIsWUFBTTtBQUMvQixlQUFPdkIsSUFBSXdCLHNCQUFKLFlBQVA7QUFDRCxPQUZEO0FBR0Q7OztpQ0FFWTtBQUFBOztBQUNYLFdBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBTUMsYUFBYSxDQUFDO0FBQ2xCQyxnQkFBUSxZQURVO0FBRWxCQyxnQkFBUTtBQUZVLE9BQUQsRUFHaEI7QUFDREQsZ0JBQVEsV0FEUDtBQUVEQyxnQkFBUTtBQUZQLE9BSGdCLEVBTWhCO0FBQ0RELGdCQUFRLFVBRFA7QUFFREMsZ0JBQVE7QUFGUCxPQU5nQixFQVNoQjtBQUNERCxnQkFBUSxVQURQO0FBRURDLGdCQUFRO0FBRlAsT0FUZ0IsQ0FBbkI7O0FBY0FGLGlCQUFXWixPQUFYLENBQW1CLGdCQUFRO0FBQ3pCLGNBQUtXLEtBQUwsQ0FBV0ksS0FBS0YsTUFBaEIsSUFBMEIsYUFBSztBQUM3QixjQUFNRyxRQUFRQyxFQUFFQyxPQUFGLENBQVUsQ0FBVixDQUFkO0FBQ0EsZ0JBQUs5QixLQUFMLENBQVcrQixHQUFYLENBQWVDLE9BQWYsQ0FBdUJDLFFBQXZCLENBQWdDTixLQUFLRCxNQUFyQyxFQUE2QztBQUMzQ1EsaUJBQUtQLEtBQUtGLE1BQUwsS0FBZ0IsS0FBaEIsR0FBd0JHLE1BQU1PLE9BQTlCLEdBQXdDUCxNQUFNUSxDQURSO0FBRTNDQyxpQkFBS1YsS0FBS0YsTUFBTCxLQUFnQixLQUFoQixHQUF3QkcsTUFBTVUsT0FBOUIsR0FBd0NWLE1BQU1XO0FBRlIsV0FBN0M7QUFJRCxTQU5EO0FBT0QsT0FSRDtBQVNEOzs7Ozs7a0JBL0ZrQjFDLFEiLCJmaWxlIjoid3gtY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3hDYW52YXMge1xuICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0lkKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXNJZCA9IGNhbnZhc0lkO1xuICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuXG4gICAgLy8gdGhpcy5faW5pdENhbnZhcyh6cmVuZGVyLCBjdHgpO1xuICAgIHRoaXMuX2luaXRTdHlsZShjdHgpO1xuICAgIHRoaXMuX2luaXRFdmVudCgpO1xuICB9XG5cbiAgZ2V0Q29udGV4dChjb250ZXh0VHlwZSkge1xuICAgIGlmIChjb250ZXh0VHlwZSA9PT0gJzJkJykge1xuICAgICAgcmV0dXJuIHRoaXMuY3R4O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhbnZhc1RvVGVtcEZpbGVQYXRoKG9wdCkge1xuICAvLyAgIGlmICghb3B0LmNhbnZhc0lkKSB7XG4gIC8vICAgICBvcHQuY2FudmFzSWQgPSB0aGlzLmNhbnZhc0lkO1xuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aChvcHQsIHRoaXMpO1xuICAvLyB9XG5cbiAgc2V0Q2hhcnQoY2hhcnQpIHtcbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gIH1cblxuICBhdHRhY2hFdmVudCAoKSB7XG4gICAgLy8gbm9vcFxuICB9XG5cbiAgZGV0YWNoRXZlbnQoKSB7XG4gICAgLy8gbm9vcFxuICB9XG5cbiAgX2luaXRDYW52YXMoenJlbmRlciwgY3R4KSB7XG4gICAgenJlbmRlci51dGlsLmdldENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY3R4O1xuICAgIH07XG5cbiAgICB6cmVuZGVyLnV0aWwuJG92ZXJyaWRlKCdtZWFzdXJlVGV4dCcsIGZ1bmN0aW9uICh0ZXh0LCBmb250KSB7XG4gICAgICBjdHguZm9udCA9IGZvbnQgfHwgJzEycHggc2Fucy1zZXJpZic7XG4gICAgICByZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgX2luaXRTdHlsZShjdHgpIHtcbiAgICB2YXIgc3R5bGVzID0gWydmaWxsU3R5bGUnLCAnc3Ryb2tlU3R5bGUnLCAnZ2xvYmFsQWxwaGEnLCBcbiAgICAgICd0ZXh0QWxpZ24nLCAndGV4dEJhc2VBbGlnbicsICdzaGFkb3cnLCAnbGluZVdpZHRoJyxcbiAgICAgICdsaW5lQ2FwJywgJ2xpbmVKb2luJywgJ2xpbmVEYXNoJywgJ21pdGVyTGltaXQnLCAnZm9udFNpemUnXTtcblxuICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIHN0eWxlLCB7XG4gICAgICAgIHNldDogdmFsdWUgPT4ge1xuICAgICAgICAgIGlmIChzdHlsZSAhPT0gJ2ZpbGxTdHlsZScgJiYgc3R5bGUgIT09ICdzdHJva2VTdHlsZScgXG4gICAgICAgICAgICB8fCB2YWx1ZSAhPT0gJ25vbmUnICYmIHZhbHVlICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjdHhbJ3NldCcgKyBzdHlsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0eWxlLnNsaWNlKDEpXSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCA9ICgpID0+IHtcbiAgICAgIHJldHVybiBjdHguY3JlYXRlQ2lyY3VsYXJHcmFkaWVudChhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBfaW5pdEV2ZW50KCkge1xuICAgIHRoaXMuZXZlbnQgPSB7fTtcbiAgICBjb25zdCBldmVudE5hbWVzID0gW3tcbiAgICAgIHd4TmFtZTogJ3RvdWNoU3RhcnQnLFxuICAgICAgZWNOYW1lOiAnbW91c2Vkb3duJ1xuICAgIH0sIHtcbiAgICAgIHd4TmFtZTogJ3RvdWNoTW92ZScsXG4gICAgICBlY05hbWU6ICdtb3VzZW1vdmUnXG4gICAgfSwge1xuICAgICAgd3hOYW1lOiAndG91Y2hFbmQnLFxuICAgICAgZWNOYW1lOiAnbW91c2V1cCdcbiAgICB9LCB7XG4gICAgICB3eE5hbWU6ICd0b3VjaEVuZCcsXG4gICAgICBlY05hbWU6ICdjbGljaydcbiAgICB9XTtcblxuICAgIGV2ZW50TmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMuZXZlbnRbbmFtZS53eE5hbWVdID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICB0aGlzLmNoYXJ0Ll96ci5oYW5kbGVyLmRpc3BhdGNoKG5hbWUuZWNOYW1lLCB7XG4gICAgICAgICAgenJYOiBuYW1lLnd4TmFtZSA9PT0gJ3RhcCcgPyB0b3VjaC5jbGllbnRYIDogdG91Y2gueCxcbiAgICAgICAgICB6clk6IG5hbWUud3hOYW1lID09PSAndGFwJyA/IHRvdWNoLmNsaWVudFkgOiB0b3VjaC55XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19