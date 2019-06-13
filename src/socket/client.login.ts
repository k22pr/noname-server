import { ILoginData } from "../model/login";

export default class {
  public static LoginValidateCheck(loginData: ILoginData) {
    console.log("login validate checking...");
    console.log(loginData);
  }

  public static Singup(client: any, encData: Buffer) {
    console.log(encData);
  }
}
