import NodeRSA from "node-rsa";
var crypto = require("crypto");

export default class Encrypt {
  key: NodeRSA;

  async init(keysize: 256 | 512 | 1024 | 2048 = 512): Promise<Encrypt> {
    this.key = await new NodeRSA({ b: keysize }, "pkcs1_oaep");
    return this;
  }

  setPublicKey(publicKey: string): NodeRSA {
    this.key = new NodeRSA().importKey(publicKey, "public");
    return this.key;
  }

  setPrivateKey(privateKey: string): NodeRSA {
    this.key = new NodeRSA().importKey(privateKey, "private");
    return this.key;
  }

  get publicKey(): string {
    return this.key.exportKey("public");
  }
  get privateKey(): string {
    return this.key.exportKey("private");
  }
}

function RandomKorean(length: number = 32) {
  var result = "";
  for (var i = 0; i < length; i++) {
    result += String.fromCharCode(44031 + Math.ceil(11172 * Math.random()));
  }
  return result;
}

export { RandomKorean };
