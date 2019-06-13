import * as Model from "../model";
import Encrypt from "../util/encrypt";

export default class {
  public static async KeyChange(client, clientKey: Buffer) {
    let keyPair : Encrypt = new Encrypt().init().then(key => {
      console.log(key.publicKey);
      client.emit("keyShare", key.publicKey);
    });
  }
}
