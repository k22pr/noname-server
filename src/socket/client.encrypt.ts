import * as Model from "../model";
import * as Encrypt from "../util/encrypt";
import ClientList, { Client } from "../class/class.client";

export default class {
  public static async KeyChange(client, clientKey: string) {
    new Encrypt.Rsa().init().then(serverKey => {
      client.emit("keyShare", serverKey.publicKey);
      ClientList.Add(client, serverKey, clientKey);
    });
  }

  public static async requestKey(client: any, key: string, value: string) {
    client.emit("requestKey", [key, value]);
  }
}
