declare function require(str: string);
require("dotenv").config();
const server = require("http").createServer();
const io = require("socket.io")(server);
import db from "./db/connection";
import { SHA3 } from "sha3";
import Security from "./util/run.security";
import * as Socket from "./socket";

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
      console.log("connected");
      client.on("event", data => {
         /* … */
      });

      client.on("disconnect", () => {
         /* … */
      });

      client.on("login", Socket.SLogin.LoginValidateCheck);
      client.on("keyShare", Socket.SEnrypt.KeyChange);
      // client.on("keyShare", data => {
      //    console.log(data);
      //    console.log("keyshared event");
      // });
   });
   server.listen(3004);
}
