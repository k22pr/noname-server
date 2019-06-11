"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _sha = require("sha3");

var _run = _interopRequireDefault(require("../util/run.security"));

var _default = function _default() {
  var hash = new _sha.SHA3(256);
  var host = process.env.DB_HOST;
  var port = process.env.DB_PORT;
  var dbName = process.env.DB_NAME;
  var userName = process.env.DB_USER;
  var key = _run["default"].DataKeyExtraction;
  console.log(key);

  var db = _mongoose["default"].connect("mongodb://".concat(userName, ":").concat(hash.update(process.env.DB_PASSWORD_HASH).digest("hex"), "@").concat(host, ":").concat(port, "/").concat(dbName, "?authSource=admin"), {
    useNewUrlParser: true
  }).then(function (data) {
    console.log("db connect");
  })["catch"](function (err) {
    console.log("db connect error");
    console.log(err);
  });

  return db;
};

exports["default"] = _default;