import mongoose, { Schema, Document } from "mongoose";

interface ILoginData {
  userName: Buffer;
  password: Buffer;
}

export { ILoginData };
