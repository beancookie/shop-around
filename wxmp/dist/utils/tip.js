'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.isLoading = false;
  }
  /**
   * 弹出提示框
   */

  _createClass(Tips, null, [{
    key: 'success',
    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: 'success',
          mask: true,
          duration: duration
        });
      }, 300);
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'confirm',
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '提示';

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: 'toast',
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: icon,
          mask: true,
          duration: 500
        });
      }, 300);

      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 警告框
     */

  }, {
    key: 'alert',
    value: function alert(title) {
      wx.showToast({
        title: title,
        image: '../images/alert.png',
        mask: true,
        duration: 1500
      });
    }

    /**
     * 错误框
     */

  }, {
    key: 'error',
    value: function error(title, onHide) {
      wx.showToast({
        title: title,
        image: '../images/error.png',
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 弹出加载提示
     */

  }, {
    key: 'loading',
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';

      if (Tips.isLoading) {
        return;
      }
      Tips.isLoading = true;
      wx.showLoading({
        title: title,
        mask: true
      });
    }

    /**
     * 加载完毕
     */

  }, {
    key: 'loaded',
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        wx.hideLoading();
      }
    }
  }, {
    key: 'share',
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast('分享成功');
        }
      };
    }
  }]);

  return Tips;
}();

/**
 * 静态变量，是否加载中
 */


exports.default = Tips;
Tips.isLoading = false;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcC5qcyJdLCJuYW1lcyI6WyJUaXBzIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXh0IiwicGF5bG9hZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJmYWlsIiwib25IaWRlIiwiaW1hZ2UiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwidXJsIiwiZGVzYyIsInBhdGgiLCJ0b2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7QUFDbkIsa0JBQWM7QUFBQTs7QUFDWixTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7QUFDRDs7Ozs7OzRCQUllQyxLLEVBQXVCO0FBQUEsVUFBaEJDLFFBQWdCLHVFQUFMLEdBQUs7O0FBQ3BDQyxpQkFBVyxZQUFNO0FBQ2ZDLFdBQUdDLFNBQUgsQ0FBYTtBQUNYSixpQkFBT0EsS0FESTtBQUVYSyxnQkFBTSxTQUZLO0FBR1hDLGdCQUFNLElBSEs7QUFJWEwsb0JBQVVBO0FBSkMsU0FBYjtBQU1ELE9BUEQsRUFPRyxHQVBIO0FBUUEsVUFBSUEsV0FBVyxDQUFmLEVBQWtCO0FBQ2hCLGVBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1AscUJBQVcsWUFBTTtBQUNmTTtBQUNELFdBRkQsRUFFR1AsUUFGSDtBQUdELFNBSk0sQ0FBUDtBQUtEO0FBQ0Y7O0FBRUQ7Ozs7Ozs0QkFHZVMsSSxFQUFrQztBQUFBLFVBQTVCQyxPQUE0Qix1RUFBbEIsRUFBa0I7QUFBQSxVQUFkWCxLQUFjLHVFQUFOLElBQU07O0FBQy9DLGFBQU8sSUFBSU8sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q04sV0FBR1MsU0FBSCxDQUFhO0FBQ1haLGlCQUFPQSxLQURJO0FBRVhhLG1CQUFTSCxJQUZFO0FBR1hJLHNCQUFZLElBSEQ7QUFJWEMsbUJBQVMsc0JBQU87QUFDZCxnQkFBSUMsSUFBSUMsT0FBUixFQUFpQjtBQUNmVCxzQkFBUUcsT0FBUjtBQUNELGFBRkQsTUFFTyxJQUFJSyxJQUFJRSxNQUFSLEVBQWdCO0FBQ3JCVCxxQkFBT0UsT0FBUDtBQUNEO0FBQ0YsV0FWVTtBQVdYUSxnQkFBTSxtQkFBTztBQUNYVixtQkFBT0UsT0FBUDtBQUNEO0FBYlUsU0FBYjtBQWVELE9BaEJNLENBQVA7QUFpQkQ7OzswQkFFWVgsSyxFQUFPb0IsTSxFQUEwQjtBQUFBLFVBQWxCZixJQUFrQix1RUFBWCxTQUFXOztBQUM1Q0gsaUJBQVcsWUFBTTtBQUNmQyxXQUFHQyxTQUFILENBQWE7QUFDWEosaUJBQU9BLEtBREk7QUFFWEssZ0JBQU1BLElBRks7QUFHWEMsZ0JBQU0sSUFISztBQUlYTCxvQkFBVTtBQUpDLFNBQWI7QUFNRCxPQVBELEVBT0csR0FQSDs7QUFTQTtBQUNBLFVBQUltQixNQUFKLEVBQVk7QUFDVmxCLG1CQUFXLFlBQU07QUFDZmtCO0FBQ0QsU0FGRCxFQUVHLEdBRkg7QUFHRDtBQUNGOztBQUVEOzs7Ozs7MEJBR2FwQixLLEVBQU87QUFDbEJHLFNBQUdDLFNBQUgsQ0FBYTtBQUNYSixlQUFPQSxLQURJO0FBRVhxQixlQUFPLHFCQUZJO0FBR1hmLGNBQU0sSUFISztBQUlYTCxrQkFBVTtBQUpDLE9BQWI7QUFNRDs7QUFFRDs7Ozs7OzBCQUlhRCxLLEVBQU9vQixNLEVBQVE7QUFDMUJqQixTQUFHQyxTQUFILENBQWE7QUFDWEosZUFBT0EsS0FESTtBQUVYcUIsZUFBTyxxQkFGSTtBQUdYZixjQUFNLElBSEs7QUFJWEwsa0JBQVU7QUFKQyxPQUFiO0FBTUE7QUFDQSxVQUFJbUIsTUFBSixFQUFZO0FBQ1ZsQixtQkFBVyxZQUFNO0FBQ2ZrQjtBQUNELFNBRkQsRUFFRyxHQUZIO0FBR0Q7QUFDRjs7QUFFRDs7Ozs7OzhCQUc4QjtBQUFBLFVBQWZwQixLQUFlLHVFQUFQLEtBQU87O0FBQzVCLFVBQUlGLEtBQUtDLFNBQVQsRUFBb0I7QUFDbEI7QUFDRDtBQUNERCxXQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0FJLFNBQUdtQixXQUFILENBQWU7QUFDYnRCLGVBQU9BLEtBRE07QUFFYk0sY0FBTTtBQUZPLE9BQWY7QUFJRDs7QUFFRDs7Ozs7OzZCQUdnQjtBQUNkLFVBQUlSLEtBQUtDLFNBQVQsRUFBb0I7QUFDbEJELGFBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQUksV0FBR29CLFdBQUg7QUFDRDtBQUNGOzs7MEJBRVl2QixLLEVBQU93QixHLEVBQUtDLEksRUFBTTtBQUM3QixhQUFPO0FBQ0x6QixlQUFPQSxLQURGO0FBRUwwQixjQUFNRixHQUZEO0FBR0xDLGNBQU1BLElBSEQ7QUFJTFYsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmxCLGVBQUs2QixLQUFMLENBQVcsTUFBWDtBQUNEO0FBTkksT0FBUDtBQVFEOzs7Ozs7QUFHSDs7Ozs7a0JBdElxQjdCLEk7QUF5SXJCQSxLQUFLQyxTQUFMLEdBQWlCLEtBQWpCIiwiZmlsZSI6InRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o+Q56S65LiO5Yqg6L295bel5YW357G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gIH1cbiAgLyoqXG4gICAqIOW8ueWHuuaPkOekuuahhlxuICAgKi9cblxuICBzdGF0aWMgc3VjY2Vzcyh0aXRsZSwgZHVyYXRpb24gPSA1MDApIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgIH0pXG4gICAgfSwgMzAwKVxuICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9LCBkdXJhdGlvbilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuehruiupOeql+WPo1xuICAgKi9cbiAgc3RhdGljIGNvbmZpcm0odGV4dCwgcGF5bG9hZCA9IHt9LCB0aXRsZSA9ICfmj5DnpLonKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgY29udGVudDogdGV4dCxcbiAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSxcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIHJlc29sdmUocGF5bG9hZClcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJlamVjdChwYXlsb2FkKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogcmVzID0+IHtcbiAgICAgICAgICByZWplY3QocGF5bG9hZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHRvYXN0KHRpdGxlLCBvbkhpZGUsIGljb24gPSAnc3VjY2VzcycpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgfSlcbiAgICB9LCAzMDApXG5cbiAgICAvLyDpmpDol4/nu5PmnZ/lm57osINcbiAgICBpZiAob25IaWRlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb25IaWRlKClcbiAgICAgIH0sIDUwMClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6K2m5ZGK5qGGXG4gICAqL1xuICBzdGF0aWMgYWxlcnQodGl0bGUpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvYWxlcnQucG5nJyxcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBkdXJhdGlvbjogMTUwMFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICog6ZSZ6K+v5qGGXG4gICAqL1xuXG4gIHN0YXRpYyBlcnJvcih0aXRsZSwgb25IaWRlKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2Vycm9yLnBuZycsXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pXG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXG4gICAgaWYgKG9uSGlkZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9uSGlkZSgpXG4gICAgICB9LCA1MDApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuWKoOi9veaPkOekulxuICAgKi9cbiAgc3RhdGljIGxvYWRpbmcodGl0bGUgPSAn5Yqg6L295LitJykge1xuICAgIGlmIChUaXBzLmlzTG9hZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFRpcHMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1hc2s6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOWKoOi9veWujOavlVxuICAgKi9cbiAgc3RhdGljIGxvYWRlZCgpIHtcbiAgICBpZiAoVGlwcy5pc0xvYWRpbmcpIHtcbiAgICAgIFRpcHMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2hhcmUodGl0bGUsIHVybCwgZGVzYykge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBwYXRoOiB1cmwsXG4gICAgICBkZXNjOiBkZXNjLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIFRpcHMudG9hc3QoJ+WIhuS6q+aIkOWKnycpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6Z2Z5oCB5Y+Y6YeP77yM5piv5ZCm5Yqg6L295LitXG4gKi9cblRpcHMuaXNMb2FkaW5nID0gZmFsc2VcbiJdfQ==