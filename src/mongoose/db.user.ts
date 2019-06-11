import mongoose from "mongoose";

const Schema = mongoose.Schema;

class userModel {
   userName: String;
   userId: String;
   Password: String;
   Email: String;
}

let UserSchema = new Schema(userModel);

export { userModel, UserSchema };
