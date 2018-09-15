'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observe = observe;

var _behavior = require('./behavior.js');

var _props = require('./props.js');

function observe(sfc) {
  if (sfc.computed) {
    sfc.behaviors.push(_behavior.behavior);
    sfc.methods = sfc.methods || {};
    sfc.methods.$options = function () {
      return sfc;
    };

    if (sfc.properties) {
      (0, _props.observeProps)(sfc.properties);
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm9ic2VydmUiLCJzZmMiLCJjb21wdXRlZCIsImJlaGF2aW9ycyIsInB1c2giLCJiZWhhdmlvciIsIm1ldGhvZHMiLCIkb3B0aW9ucyIsInByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2dCQSxPLEdBQUFBLE87O0FBSGhCOztBQUNBOztBQUVPLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQzNCLE1BQUlBLElBQUlDLFFBQVIsRUFBa0I7QUFDaEJELFFBQUlFLFNBQUosQ0FBY0MsSUFBZCxDQUFtQkMsa0JBQW5CO0FBQ0FKLFFBQUlLLE9BQUosR0FBY0wsSUFBSUssT0FBSixJQUFlLEVBQTdCO0FBQ0FMLFFBQUlLLE9BQUosQ0FBWUMsUUFBWixHQUF1QjtBQUFBLGFBQU1OLEdBQU47QUFBQSxLQUF2Qjs7QUFFQSxRQUFJQSxJQUFJTyxVQUFSLEVBQW9CO0FBQ2xCLCtCQUFhUCxJQUFJTyxVQUFqQjtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJlaGF2aW9yIH0gZnJvbSAnLi9iZWhhdmlvcic7XG5pbXBvcnQgeyBvYnNlcnZlUHJvcHMgfSBmcm9tICcuL3Byb3BzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmUoc2ZjKSB7XG4gIGlmIChzZmMuY29tcHV0ZWQpIHtcbiAgICBzZmMuYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IpO1xuICAgIHNmYy5tZXRob2RzID0gc2ZjLm1ldGhvZHMgfHwge307XG4gICAgc2ZjLm1ldGhvZHMuJG9wdGlvbnMgPSAoKSA9PiBzZmM7XG5cbiAgICBpZiAoc2ZjLnByb3BlcnRpZXMpIHtcbiAgICAgIG9ic2VydmVQcm9wcyhzZmMucHJvcGVydGllcyk7XG4gICAgfVxuICB9XG59XG4iXX0=