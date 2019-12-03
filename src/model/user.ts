import * as mongoose from "mongoose";

interface IUser {
  userId: String;
  userName: String;
  date: Date;
}

interface IUserEncrypt {
  index: String;
  encrypt: String;
}
let UserEncryptSchema = new mongoose.Schema(
  {
    index: { type: String, required: true, unique: true },
    encrypt: { type: String, required: true },
  },
  { versionKey: false }
);
let UserEncryptModel = mongoose.model<IUserEncrypt>("user.encrypt", UserEncryptSchema);

interface IIdBlock {
  identity: String;
  index: String;
}
let IIdBlockSchema = new mongoose.Schema(
  {
    identity: { type: String, required: true, unique: true },
    index: { type: String, required: true, unique: true },
  },
  { versionKey: false }
);
let IIdBlockModel = mongoose.model<IIdBlock>("user.idBlock", IIdBlockSchema);
interface IPassBlock {
  passCode: String;
  encryptKey: String;
}
let IPassBlockSchema = new mongoose.Schema(
  {
    passCode: { type: String, required: true, unique: true },
    encryptKey: { type: String, required: true },
  },
  { versionKey: false }
);
let IPassBlockModel = mongoose.model<IPassBlock>("user.passBlock", IPassBlockSchema);

interface IUserFailCount {
  identity: String;
  failCount: Number;
  lastDate: Date;
}
let UserFailCount = new mongoose.Schema(
  {
    identity: { type: String, required: true, unique: true },
    failCount: { type: Number, required: true },
    lastDate: { type: Date },
  },
  { versionKey: false }
);

let UserFailCountModel = mongoose.model<IUserEncrypt>("user.failCount", UserFailCount);

export { IUser, IUserEncrypt, UserEncryptModel, IUserFailCount, UserFailCountModel };
export { IIdBlock, IIdBlockModel, IPassBlock, IPassBlockModel };
