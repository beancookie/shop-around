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
            _context.next = 4;
            return _wepy2.default.request({
              url: url,
              method: params.method || 'GET',
              data: data,
              header: {
                'Content-Type': 'application/json'
              }
            });

          case 4:
            res = _context.sent;

            _tip2.default.loaded();
            return _context.abrupt('return', res);

          case 7:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJ0aXAiLCJsb2FkaW5nIiwiZGF0YSIsInF1ZXJ5Iiwid2VweSIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXMiLCJsb2FkZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUE7QUFBQSxxRUFBWTtBQUFBLFFBQU9DLE1BQVAsdUVBQWdCLEVBQWhCO0FBQUEsUUFBb0JDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkMsMEJBQUlDLE9BQUo7QUFDSUMsZ0JBRlksR0FFTEosT0FBT0ssS0FBUCxJQUFnQixFQUZYO0FBQUE7QUFBQSxtQkFHQUMsZUFBS0MsT0FBTCxDQUFhO0FBQzNCTixtQkFBS0EsR0FEc0I7QUFFM0JPLHNCQUFRUixPQUFPUSxNQUFQLElBQWlCLEtBRkU7QUFHM0JKLG9CQUFNQSxJQUhxQjtBQUkzQkssc0JBQVE7QUFDTixnQ0FBZ0I7QUFEVjtBQUptQixhQUFiLENBSEE7O0FBQUE7QUFHWkMsZUFIWTs7QUFXaEJSLDBCQUFJUyxNQUFKO0FBWGdCLDZDQVlURCxHQVpTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFlQUUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmZDtBQURlLENBQWpCIiwiZmlsZSI6Ind4UmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgdGlwIGZyb20gJy4vdGlwJ1xuXG5jb25zdCB3eFJlcXVlc3QgPSBhc3luYyAocGFyYW1zID0ge30sIHVybCkgPT4ge1xuICB0aXAubG9hZGluZygpXG4gIGxldCBkYXRhID0gcGFyYW1zLnF1ZXJ5IHx8IHt9XG4gIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgIHVybDogdXJsLFxuICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCB8fCAnR0VUJyxcbiAgICBkYXRhOiBkYXRhLFxuICAgIGhlYWRlcjoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH1cbiAgfSlcbiAgdGlwLmxvYWRlZCgpXG4gIHJldHVybiByZXNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHd4UmVxdWVzdFxufVxuIl19