"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFailCountModel = exports.UserEncryptModel = exports.UserModel = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var UserSchema = new _mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

var UserModel = _mongoose["default"].model("user", UserSchema);

exports.UserModel = UserModel;
var UserEncryptSchema = new _mongoose.Schema({
  identity: {
    type: String,
    required: true,
    unique: true
  },
  encrypt: {
    type: String,
    required: true
  }
});

var UserEncryptModel = _mongoose["default"].model("user.encrypt", UserEncryptSchema);

exports.UserEncryptModel = UserEncryptModel;
var UserFailCount = new _mongoose.Schema({
  identity: {
    type: String,
    required: true,
    unique: true
  },
  failCount: {
    type: Number,
    required: true
  },
  lastDate: {
    type: Date
  }
});

var UserFailCountModel = _mongoose["default"].model("user.failCount", UserFailCount);

exports.UserFailCountModel = UserFailCountModel;