import { IKeyPair } from "../model";
const EC = require("elliptic").ec;
var ec = new EC("secp256k1");

export default class {
   public static GenerateKey(): IKeyPair {
      const key = ec.genKeyPair();
      const keyPair: IKeyPair = {
         publicKey: key.getPublic(),
         privateKey: key.getPrivate()
      };

      return keyPair;
   }
}
