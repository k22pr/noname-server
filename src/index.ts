declare function require(str: string);
require("dotenv").config();
const server = require("http").createServer();
const io = require("socket.io")(server);
import db from "./db/connection";
import { SHA3 } from "sha3";
import { IUserEncrypt, UserEncryptModel } from "./db/model.user";
import { ILoginData } from "./db/model.login";
import Login from "./socket/client.login";
import Security from "./util/run.security";
var Prompt = require("prompt-password");

(async () => {
   if (process.env.DB_PASSWORD_HASH != undefined) {
      Security.setMongoKey = process.env.DB_PASSWORD_HASH;
      await start();
   } else {
      var prompt = new Prompt({
         type: "password",
         message: "Enter mongo password please : ",
         name: "password",
         mask: _ => ""
      });
      prompt.run().then(async answers => {
         const hash = new SHA3(256);
         Security.setMongoKey = hash.update(answers).digest("hex");
         await start();
      });
   }
})();

async function start() {
   db();

   io.on("connection", client => {
      client.on("event", data => {
         /* … */
      });

      client.on("disconnect", () => {
         /* … */
      });

      client.on("login", Login.LoginValidateCheck);
   });
   server.listen(3004);
}
