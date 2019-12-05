declare function require(str: string);
require("dotenv").config();
const Koa = require("koa");
const { ApolloServer, gql } = require("apollo-server-koa");

import db from "./db/connection";
import { SHA3 } from "sha3";
import Security from "./util/run.security";
import { typeDefs, resolvers } from "./graphql/schema";

var Prompt = require("prompt-password");

(async () => {
  console.log("starting server...");
  if (process.env.DB_PASSWORD_HASH != undefined) {
    Security.setMongoKey = process.env.DB_PASSWORD_HASH;
    await start();
  } else {
    var prompt = new Prompt({
      type: "password",
      message: "Enter mongo password please : ",
      name: "password",
      mask: (_: any) => "",
    });
    prompt.run().then(async (answers) => {
      const hash = new SHA3(256);
      Security.setMongoKey = hash.update(answers).digest("hex");
      await start();
    });
  }
})().then(() => {
  console.log("server is ready");
});

async function start() {
  console.log("starting mongo...");
  await db();

  const server = new ApolloServer({ typeDefs, resolvers });

  const app = new Koa();
  server.applyMiddleware({ app });
  // alternatively you can get a composed middleware from the apollo server
  // app.use(server.getMiddleware());

  app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
}

// async function start() {
//   console.log("starting mongo...");
//   await db();

//   console.log("starting socket...");
//   io.on("connection", (client) => {
//     console.log("connection user");
//     client.on("event", (data) => {
//       /* … */
//     });

//     client.on("disconnect", () => {
//       ClientList.Remove(client);
//     });

//     client.on("keyShare", (loginData: string) => {
//       Socket.Enrypt.KeyChange(client, loginData);
//     });
//     client.on("login", () => {
//       let findUser = ClientList.Find(client);
//       if (!findUser) Socket.Enrypt.requestKey(findUser, "login", "");
//       Socket.Login.LoginValidateCheck;
//     });
//     client.on("signup", (encData: string) => {
//       let findUser = ClientList.Find(client);
//       if (!findUser) Socket.Enrypt.requestKey(client, "signup", encData);
//       else Socket.Login.Signup(findUser, encData);
//     });
//     // client.on("keyShare", data => {
//     //    console.log(data);
//     //    console.log("keyshared event");
//     // });
//   });
//   await server.listen(3005);
//   console.log("socket is ready");
// }
