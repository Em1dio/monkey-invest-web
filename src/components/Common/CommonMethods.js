let commonMethods = {
  // API Group 1
  install: function (_Vue) {
    if (!_Vue.prototype.$commonMethods) {
      _Vue.prototype.$commonMethods = {};
    }
    _Vue.prototype.$commonMethods.capitalize = function (str) {
      return str[0].toUpperCase() + str.substr(1);
    };
    _Vue.prototype.$commonMethods.calcPercent = function (initial, now) {
      const value = now / initial;
      return value - 1;
    };
  },
};

export default commonMethods;
