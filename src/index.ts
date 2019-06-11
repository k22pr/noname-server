declare function require(str: string);
require("dotenv").config();
const server = require("http").createServer();
const io = require("socket.io")(server);
import db from "./db/connect";
import { IUserEncrypt, UserEncryptModel } from "./db/model.user";
import { ILoginData } from "./db/model.login";
import Login from "./socket/client.login";
db();

// (async () => {
//   let encData: IUserEncrypt = {
//     identity: "test",
//     encrypt: "123456789"
//   };
//   let result = await UserEncryptModel.create(encData);
//   console.log(result);
// })();

io.on("connection", client => {
  client.on("event", data => {
    /* … */
  });

  client.on("disconnect", () => {
    /* … */
  });

  client.on("login", Login.LoginValidateCheck);
});
server.listen(3003);
