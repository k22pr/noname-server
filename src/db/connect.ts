import mongoose from "mongoose";
import { SHA3 } from "sha3";

export default () => {
  const hash = new SHA3(256);
  let host: string = process.env.DB_HOST;
  let port: string = process.env.DB_PORT;
  let dbName: string = process.env.DB_NAME;
  let userName: string = process.env.DB_USER;
  let db = mongoose
    .connect(`mongodb://${userName}:${hash.update(process.env.DB_PASSWORD_HASH).digest("hex")}@${host}:${port}/${dbName}?authSource=admin`, { useNewUrlParser: true })
    .then(data => {
      console.log("db connect");
    })
    .catch(err => {
      console.log("db connect error");
      console.log(err);
    });
  return db;
};
