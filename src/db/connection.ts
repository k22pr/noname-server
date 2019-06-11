import mongoose from "mongoose";
import { SHA3 } from "sha3";

import Security from "../util/run.security";

export default () => {
   const hash = new SHA3(256);
   let host: string = "108.160.129.14";
   let port: number = 27017;
   let dbName: string = "noname";
   let userName: string = "noname";
   let db = mongoose
      .connect(`mongodb://${userName}:${hash.update(Security.getMongoKey).digest("hex")}@${host}:${port}/${dbName}?authSource=admin`, { useNewUrlParser: true })
      .then(data => {
         console.log("db connect");
      })
      .catch(err => {
         console.log("db connect error");
         console.log(err);
      });
   return db;
};
