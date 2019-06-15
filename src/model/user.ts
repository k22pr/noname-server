import mongoose, { Schema, Document } from "mongoose";

interface IUser {
  userId: String;
  userName: String;
  date: Date;
}

interface IUserEncrypt extends Document {
  index: String;
  encrypt: String;
}
let UserEncryptSchema = new Schema(
  {
    index: { type: String, required: true, unique: true },
    encrypt: { type: String, required: true }
  },
  { versionKey: false }
);
let UserEncryptModel = mongoose.model<IUserEncrypt>("user.encrypt", UserEncryptSchema);

interface IIdBlock extends Document {
  identity: String;
  index: String;
}
let IIdBlockSchema = new Schema(
  {
    identity: { type: String, required: true, unique: true },
    index: { type: String, required: true, unique: true }
  },
  { versionKey: false }
);
let IIdBlockModel = mongoose.model<IIdBlock>("user.idBlock", IIdBlockSchema);
interface IPassBlock extends Document {
  passCode: String;
  encryptKey: String;
}
let IPassBlockSchema = new Schema(
  {
    passCode: { type: String, required: true, unique: true },
    encryptKey: { type: String, required: true }
  },
  { versionKey: false }
);
let IPassBlockModel = mongoose.model<IPassBlock>("user.passBlock", IPassBlockSchema);

interface IUserFailCount extends Document {
  identity: String;
  failCount: Number;
  lastDate: Date;
}
let UserFailCount = new Schema(
  {
    identity: { type: String, required: true, unique: true },
    failCount: { type: Number, required: true },
    lastDate: { type: Date }
  },
  { versionKey: false }
);

let UserFailCountModel = mongoose.model<IUserEncrypt>("user.failCount", UserFailCount);

export { IUser, IUserEncrypt, UserEncryptModel, IUserFailCount, UserFailCountModel };
export { IIdBlock, IIdBlockModel, IPassBlock, IPassBlockModel };
