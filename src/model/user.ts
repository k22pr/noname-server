import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  userId: String;
  userName: String;
  password: String;
}
let UserSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true }
});
let UserModel = mongoose.model<IUser>("user", UserSchema);

interface IUserEncrypt extends Document {
  identity: String;
  encrypt: Buffer;
}
let UserEncryptSchema = new Schema({
  identity: { type: String, required: true, unique: true },
  encrypt: { type: String, required: true }
});
let UserEncryptModel = mongoose.model<IUserEncrypt>("user.encrypt", UserEncryptSchema);

interface IUserShadow extends Document {
  identity: String;
  encryptKey: Buffer;
}
let IUserShadowSchema = new Schema({
  identity: { type: String, required: true, unique: true },
  encryptKey: { type: Buffer, required: true }
});
let IUserShadowModel = mongoose.model<IUserShadow>("user.encrypt", IUserShadowSchema);

interface IUserFailCount extends Document {
  identity: String;
  failCount: Number;
  lastDate: Date;
}
let UserFailCount = new Schema({
  identity: { type: String, required: true, unique: true },
  failCount: { type: Number, required: true },
  lastDate: { type: Date }
});

let UserFailCountModel = mongoose.model<IUserEncrypt>("user.failCount", UserFailCount);

export { IUser, UserModel, IUserEncrypt, UserEncryptModel, IUserFailCount, UserFailCountModel, IUserShadow, IUserShadowModel };
