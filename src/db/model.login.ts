import mongoose, { Schema, Document } from "mongoose";

interface ILoginData {
  userName: String;
  password: String;
}

export { ILoginData };
