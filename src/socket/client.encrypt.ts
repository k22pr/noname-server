import * as Model from "../model";
import Encrypt from "../util/encrypt";

export default class {
   public static KeyChange(clientKey: Buffer) {
      let keyPair = Encrypt.GenerateKey();
   }
}
