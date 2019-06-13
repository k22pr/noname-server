import NodeRSA from "node-rsa";
import { ILoginData } from "../model/login";
import Encrypt, { RandomKorean } from "../util/encrypt";
import ClientList, { Client } from "../class/class.client";

export default class {
  public static LoginValidateCheck(loginData: ILoginData) {
    console.log("login validate checking...");
    console.log(loginData);
  }

  public static Signup(client: any, encData: string) {
    let findClient: Client = ClientList.Find(client);
    if (findClient) {
      let rsa: NodeRSA = new Encrypt().setPrivateKey(findClient.privateKey);
      let json = rsa.decrypt(encData, "utf8");
      console.log("enc : " + encData);
      console.log("json : " + json);
    }
  }
}
