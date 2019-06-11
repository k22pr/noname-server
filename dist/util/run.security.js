"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Security =
/*#__PURE__*/
function () {
  function Security() {
    (0, _classCallCheck2["default"])(this, Security);
    (0, _defineProperty2["default"])(this, "mongoKey", void 0);
  }

  (0, _createClass2["default"])(Security, [{
    key: "getMongoKey",
    get: function get() {
      return this.mongoKey;
    }
  }, {
    key: "setMongoKey",
    set: function set(inputKey) {
      this.mongoKey = inputKey;
    }
  }]);
  return Security;
}();

var _default = new Security();

exports["default"] = _default;