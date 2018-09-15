'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeProps = observeProps;
function observeProps(props) {
  if (!props) {
    return;
  }

  Object.keys(props).forEach(function (key) {
    var prop = props[key];
    if (prop === null || !prop.type) {
      prop = { type: prop };
    }

    var _prop = prop,
        observer = _prop.observer;

    prop.observer = function () {
      if (observer) {
        if (typeof observer === 'string') {
          observer = this[observer];
        }
        observer.apply(this, arguments);
      }
      this.setData();
    };

    props[key] = prop;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BzLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVQcm9wcyIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wIiwia2V5IiwidHlwZSIsIm9ic2VydmVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsWSxHQUFBQSxZO0FBQVQsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDbEMsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVjtBQUNEOztBQUVEQyxTQUFPQyxJQUFQLENBQVlGLEtBQVosRUFBbUJHLE9BQW5CLENBQTJCLGVBQU87QUFDaEMsUUFBSUMsT0FBT0osTUFBTUssR0FBTixDQUFYO0FBQ0EsUUFBSUQsU0FBUyxJQUFULElBQWlCLENBQUNBLEtBQUtFLElBQTNCLEVBQWlDO0FBQy9CRixhQUFPLEVBQUVFLE1BQU1GLElBQVIsRUFBUDtBQUNEOztBQUorQixnQkFNYkEsSUFOYTtBQUFBLFFBTTFCRyxRQU4wQixTQU0xQkEsUUFOMEI7O0FBT2hDSCxTQUFLRyxRQUFMLEdBQWdCLFlBQVc7QUFDekIsVUFBSUEsUUFBSixFQUFjO0FBQ1osWUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDQSxxQkFBVyxLQUFLQSxRQUFMLENBQVg7QUFDRDtBQUNEQSxpQkFBU0MsS0FBVCxDQUFlLElBQWYsRUFBcUJDLFNBQXJCO0FBQ0Q7QUFDRCxXQUFLQyxPQUFMO0FBQ0QsS0FSRDs7QUFVQVYsVUFBTUssR0FBTixJQUFhRCxJQUFiO0FBQ0QsR0FsQkQ7QUFtQkQiLCJmaWxlIjoicHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVByb3BzKHByb3BzKSB7XG4gIGlmICghcHJvcHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGxldCBwcm9wID0gcHJvcHNba2V5XTtcbiAgICBpZiAocHJvcCA9PT0gbnVsbCB8fCAhcHJvcC50eXBlKSB7XG4gICAgICBwcm9wID0geyB0eXBlOiBwcm9wIH07XG4gICAgfVxuXG4gICAgbGV0IHsgb2JzZXJ2ZXIgfSA9IHByb3A7XG4gICAgcHJvcC5vYnNlcnZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIgPSB0aGlzW29ic2VydmVyXTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXREYXRhKCk7XG4gICAgfTtcblxuICAgIHByb3BzW2tleV0gPSBwcm9wO1xuICB9KTtcbn1cbiJdfQ==