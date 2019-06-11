"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _connection = _interopRequireDefault(require("./db/connection"));

var _client = _interopRequireDefault(require("./socket/client.login"));

var _run = _interopRequireDefault(require("./util/run.security"));

require("dotenv").config();

var server = require("http").createServer();

var io = require("socket.io")(server);

var prompt = require("password-prompt");

// (async () => {
//   let encData: IUserEncrypt = {
//     identity: "test",
//     encrypt: "123456789"
//   };
//   let result = await UserEncryptModel.create(encData);
//   console.log(result);
// })();
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _run["default"].setMongoKey = prompt("password: ");
          (0, _connection["default"])();
          io.on("connection", function (client) {
            client.on("event", function (data) {
              /* … */
            });
            client.on("disconnect", function () {
              /* … */
            });
            client.on("login", _client["default"].LoginValidateCheck);
          });
          server.listen(3003);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();