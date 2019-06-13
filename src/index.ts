declare function require(str: string);
require("dotenv").config();
const server = require("http").createServer();
const io = require("socket.io")(server);
import db from "./db/connection";
import { SHA3 } from "sha3";
import Security from "./util/run.security";
import * as Socket from "./socket";
import * as Model from "./model";

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

    client.on("disconnect", () => {});

    client.on("keyShare", (loginData: Buffer) => {
      Socket.Enrypt.KeyChange(client, loginData);
    });
    client.on("login", Socket.Login.LoginValidateCheck);
    client.on("singup", (encData: Buffer) => {
      Socket.Login.Singup(client, encData);
    });
    // client.on("keyShare", data => {
    //    console.log(data);
    //    console.log("keyshared event");
    // });
  });
  server.listen(3005);
}
