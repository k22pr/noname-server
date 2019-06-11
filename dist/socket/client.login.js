"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _default =
/*#__PURE__*/
function () {
  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
  }

  (0, _createClass2["default"])(_default, null, [{
    key: "LoginValidateCheck",
    value: function LoginValidateCheck(loginData) {
      console.log("login validate checking...");
      console.log(loginData);
    }
  }]);
  return _default;
}();

exports["default"] = _default;