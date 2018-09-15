'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var wxRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url = arguments[1];
    var data, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = params.query || {};
            _context.next = 3;
            return _wepy2.default.request({
              url: url,
              method: params.method || 'GET',
              data: data,
              header: {
                'Content-Type': 'application/json'
              }
            });

          case 3:
            res = _context.sent;
            return _context.abrupt('return', res);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function wxRequest() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  wxRequest: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJkYXRhIiwicXVlcnkiLCJ3ZXB5IiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsInJlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUE7QUFBQSxxRUFBWTtBQUFBLFFBQU9DLE1BQVAsdUVBQWdCLEVBQWhCO0FBQUEsUUFBb0JDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQyxnQkFEWSxHQUNMRixPQUFPRyxLQUFQLElBQWdCLEVBRFg7QUFBQTtBQUFBLG1CQUVBQyxlQUFLQyxPQUFMLENBQWE7QUFDM0JKLG1CQUFLQSxHQURzQjtBQUUzQkssc0JBQVFOLE9BQU9NLE1BQVAsSUFBaUIsS0FGRTtBQUczQkosb0JBQU1BLElBSHFCO0FBSTNCSyxzQkFBUTtBQUNOLGdDQUFnQjtBQURWO0FBSm1CLGFBQWIsQ0FGQTs7QUFBQTtBQUVaQyxlQUZZO0FBQUEsNkNBVVRBLEdBVlM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQWFBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZYO0FBRGUsQ0FBakIiLCJmaWxlIjoid3hSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMgKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcbiAgbGV0IGRhdGEgPSBwYXJhbXMucXVlcnkgfHwge31cbiAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiBwYXJhbXMubWV0aG9kIHx8ICdHRVQnLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgaGVhZGVyOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB3eFJlcXVlc3Rcbn1cbiJdfQ==