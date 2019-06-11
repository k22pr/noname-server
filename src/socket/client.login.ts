import { ILoginData } from "../db/model.login";

export default class {
  public static LoginValidateCheck(loginData: ILoginData) {
    console.log("login validate checking...");
    console.log(loginData);
  }
}
