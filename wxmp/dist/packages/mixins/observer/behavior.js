"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var behavior = exports.behavior = Behavior({
  created: function created() {
    var _this = this;

    if (!this.$options) {
      return;
    }

    var cache = {};
    var setData = this.setData;

    var _$options = this.$options(),
        computed = _$options.computed;

    var keys = Object.keys(computed);

    var calcComputed = function calcComputed() {
      var needUpdate = {};
      keys.forEach(function (key) {
        var value = computed[key].call(_this);

        if (cache[key] !== value) {
          cache[key] = needUpdate[key] = value;
        }
      });

      return needUpdate;
    };

    this.setData = function (data, callback) {
      data && setData.call(_this, data, callback);
      setData.call(_this, calcComputed());
    };
  },
  attached: function attached() {
    this.setData();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGF2aW9yLmpzIl0sIm5hbWVzIjpbImJlaGF2aW9yIiwiQmVoYXZpb3IiLCJjcmVhdGVkIiwiJG9wdGlvbnMiLCJjYWNoZSIsInNldERhdGEiLCJjb21wdXRlZCIsImtleXMiLCJPYmplY3QiLCJjYWxjQ29tcHV0ZWQiLCJuZWVkVXBkYXRlIiwiZm9yRWFjaCIsInZhbHVlIiwia2V5IiwiY2FsbCIsImRhdGEiLCJjYWxsYmFjayIsImF0dGFjaGVkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLDhCQUFXQyxTQUFTO0FBQy9CQyxTQUQrQixxQkFDckI7QUFBQTs7QUFDUixRQUFJLENBQUMsS0FBS0MsUUFBVixFQUFvQjtBQUNsQjtBQUNEOztBQUVELFFBQU1DLFFBQVEsRUFBZDtBQUxRLFFBTUFDLE9BTkEsR0FNWSxJQU5aLENBTUFBLE9BTkE7O0FBQUEsb0JBT2EsS0FBS0YsUUFBTCxFQVBiO0FBQUEsUUFPQUcsUUFQQSxhQU9BQSxRQVBBOztBQVFSLFFBQU1DLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUQsUUFBWixDQUFiOztBQUVBLFFBQU1HLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFVBQU1DLGFBQWEsRUFBbkI7QUFDQUgsV0FBS0ksT0FBTCxDQUFhLGVBQU87QUFDbEIsWUFBTUMsUUFBUU4sU0FBU08sR0FBVCxFQUFjQyxJQUFkLE9BQWQ7O0FBRUEsWUFBSVYsTUFBTVMsR0FBTixNQUFlRCxLQUFuQixFQUEwQjtBQUN4QlIsZ0JBQU1TLEdBQU4sSUFBYUgsV0FBV0csR0FBWCxJQUFrQkQsS0FBL0I7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT0YsVUFBUDtBQUNELEtBWEQ7O0FBYUEsU0FBS0wsT0FBTCxHQUFlLFVBQUNVLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNqQ0QsY0FBUVYsUUFBUVMsSUFBUixRQUFtQkMsSUFBbkIsRUFBeUJDLFFBQXpCLENBQVI7QUFDQVgsY0FBUVMsSUFBUixRQUFtQkwsY0FBbkI7QUFDRCxLQUhEO0FBSUQsR0E1QjhCO0FBOEIvQlEsVUE5QitCLHNCQThCcEI7QUFDVCxTQUFLWixPQUFMO0FBQ0Q7QUFoQzhCLENBQVQsQ0FBakIiLCJmaWxlIjoiYmVoYXZpb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYmVoYXZpb3IgPSBCZWhhdmlvcih7XG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYgKCF0aGlzLiRvcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2FjaGUgPSB7fTtcbiAgICBjb25zdCB7IHNldERhdGEgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBjb21wdXRlZCB9ID0gdGhpcy4kb3B0aW9ucygpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wdXRlZCk7XG5cbiAgICBjb25zdCBjYWxjQ29tcHV0ZWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZWVkVXBkYXRlID0ge307XG4gICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb21wdXRlZFtrZXldLmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKGNhY2hlW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgY2FjaGVba2V5XSA9IG5lZWRVcGRhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5lZWRVcGRhdGU7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0RGF0YSA9IChkYXRhLCBjYWxsYmFjaykgPT4ge1xuICAgICAgZGF0YSAmJiBzZXREYXRhLmNhbGwodGhpcywgZGF0YSwgY2FsbGJhY2spO1xuICAgICAgc2V0RGF0YS5jYWxsKHRoaXMsIGNhbGNDb21wdXRlZCgpKTtcbiAgICB9O1xuICB9LFxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuc2V0RGF0YSgpO1xuICB9XG59KTtcbiJdfQ==