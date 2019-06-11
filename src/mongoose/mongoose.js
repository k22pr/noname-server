import mongoose from "mongoose";

export default () => {
   let db = mongoose.connect(`mongodb://localhost:27017/test`);

   return db;
};
