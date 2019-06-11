import mongoose, { Schema, Document } from "mongoose";

interface IMessage extends Document {
  //보낸 사람
  sourceId: String;
  groupId: String;
  type: eMessageType;
  date: Date;
  readDate: Date;
}

enum eMessageType {
  Default
}

export { IMessage, eMessageType };
