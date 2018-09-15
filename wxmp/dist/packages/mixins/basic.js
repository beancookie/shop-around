'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = undefined;

var _classNames = require('./../common/class-names.js');

var basic = exports.basic = Behavior({
  methods: {
    classNames: _classNames.classNames,

    $emit: function $emit() {
      this.triggerEvent.apply(this, arguments);
    },
    getRect: function getRect(selector, all) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbImJhc2ljIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwiY2xhc3NOYW1lcyIsIiRlbWl0IiwidHJpZ2dlckV2ZW50IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnZXRSZWN0Iiwic2VsZWN0b3IiLCJhbGwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwicmVjdCIsImxlbmd0aCIsImV4ZWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxJQUFNQSx3QkFBUUMsU0FBUztBQUM1QkMsV0FBUztBQUNQQyxzQ0FETzs7QUFHUEMsU0FITyxtQkFHQztBQUNOLFdBQUtDLFlBQUwsQ0FBa0JDLEtBQWxCLENBQXdCLElBQXhCLEVBQThCQyxTQUE5QjtBQUNELEtBTE07QUFPUEMsV0FQTyxtQkFPQ0MsUUFQRCxFQU9XQyxHQVBYLEVBT2dCO0FBQUE7O0FBQ3JCLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsV0FBR0MsbUJBQUgsR0FDR0MsRUFESCxRQUNZTixNQUFNLFdBQU4sR0FBb0IsUUFEaEMsRUFDMENELFFBRDFDLEVBRUdRLGtCQUZILENBRXNCLGdCQUFRO0FBQzFCLGNBQUlQLE9BQU9RLE1BQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFQLElBQThCQSxLQUFLQyxNQUF2QyxFQUErQztBQUM3Q1Qsb0JBQVFRLElBQVI7QUFDRDs7QUFFRCxjQUFJLENBQUNWLEdBQUQsSUFBUVUsSUFBWixFQUFrQjtBQUNoQlIsb0JBQVFRLElBQVI7QUFDRDtBQUNGLFNBVkgsRUFXR0UsSUFYSDtBQVlELE9BYk0sQ0FBUDtBQWNEO0FBdEJNO0FBRG1CLENBQVQsQ0FBZCIsImZpbGUiOiJiYXNpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICcuLi9jb21tb24vY2xhc3MtbmFtZXMnO1xuXG5leHBvcnQgY29uc3QgYmFzaWMgPSBCZWhhdmlvcih7XG4gIG1ldGhvZHM6IHtcbiAgICBjbGFzc05hbWVzLFxuXG4gICAgJGVtaXQoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBnZXRSZWN0KHNlbGVjdG9yLCBhbGwpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgIC5pbih0aGlzKVthbGwgPyAnc2VsZWN0QWxsJyA6ICdzZWxlY3QnXShzZWxlY3RvcilcbiAgICAgICAgICAuYm91bmRpbmdDbGllbnRSZWN0KHJlY3QgPT4ge1xuICAgICAgICAgICAgaWYgKGFsbCAmJiBBcnJheS5pc0FycmF5KHJlY3QpICYmIHJlY3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYWxsICYmIHJlY3QpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5leGVjKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuIl19