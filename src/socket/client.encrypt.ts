import * as Model from "../model";
import Encrypt, { RandomKorean } from "../util/encrypt";
import ClientList from "../class/class.client";

export default class {
  public static async KeyChange(client, clientKey: string) {
    new Encrypt().init().then(serverKey => {
      client.emit("keyShare", serverKey.publicKey);
      ClientList.Add(client, serverKey, clientKey);
    });
  }
}
