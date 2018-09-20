'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./tip.js');

var _tip2 = _interopRequireDefault(_tip);

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
            _tip2.default.loading();
            data = params.query || {};

            console.log('url: ' + url + ' param: ' + JSON.stringify(data));
            _context.next = 5;
            return _wepy2.default.request({
              url: url,
              method: params.method || 'GET',
              data: data,
              header: {
                'Content-Type': 'application/json'
              }
            });

          case 5:
            res = _context.sent;

            _tip2.default.loaded();
            return _context.abrupt('return', res);

          case 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJ0aXAiLCJsb2FkaW5nIiwiZGF0YSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3ZXB5IiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsInJlcyIsImxvYWRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQTtBQUFBLHFFQUFZO0FBQUEsUUFBT0MsTUFBUCx1RUFBZ0IsRUFBaEI7QUFBQSxRQUFvQkMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQywwQkFBSUMsT0FBSjtBQUNJQyxnQkFGWSxHQUVMSixPQUFPSyxLQUFQLElBQWdCLEVBRlg7O0FBR2hCQyxvQkFBUUMsR0FBUixDQUFZLFVBQVVOLEdBQVYsR0FBZ0IsVUFBaEIsR0FBNkJPLEtBQUtDLFNBQUwsQ0FBZUwsSUFBZixDQUF6QztBQUhnQjtBQUFBLG1CQUlBTSxlQUFLQyxPQUFMLENBQWE7QUFDM0JWLG1CQUFLQSxHQURzQjtBQUUzQlcsc0JBQVFaLE9BQU9ZLE1BQVAsSUFBaUIsS0FGRTtBQUczQlIsb0JBQU1BLElBSHFCO0FBSTNCUyxzQkFBUTtBQUNOLGdDQUFnQjtBQURWO0FBSm1CLGFBQWIsQ0FKQTs7QUFBQTtBQUlaQyxlQUpZOztBQVloQlosMEJBQUlhLE1BQUo7QUFaZ0IsNkNBYVRELEdBYlM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQWdCQUUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmbEI7QUFEZSxDQUFqQiIsImZpbGUiOiJ3eFJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHRpcCBmcm9tICcuL3RpcCdcblxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMgKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcbiAgdGlwLmxvYWRpbmcoKVxuICBsZXQgZGF0YSA9IHBhcmFtcy5xdWVyeSB8fCB7fVxuICBjb25zb2xlLmxvZygndXJsOiAnICsgdXJsICsgJyBwYXJhbTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IHVybCxcbiAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgZGF0YTogZGF0YSxcbiAgICBoZWFkZXI6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG4gIH0pXG4gIHRpcC5sb2FkZWQoKVxuICByZXR1cm4gcmVzXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB3eFJlcXVlc3Rcbn1cbiJdfQ==