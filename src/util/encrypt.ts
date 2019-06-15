import NodeRSA from "node-rsa";
import { SHA3, Keccak } from "sha3";
import ChainHash from "chain-hash";
import randomBytes from "random-bytes";
import Aes from "aes-js";
import splice from "buffer-splice";

var crypto = require("crypto");

class Rsa {
  key: NodeRSA;

  async init(keysize: 256 | 512 | 1024 | 2048 = 512): Promise<Rsa> {
    this.key = await new NodeRSA({ b: keysize }, "pkcs1_oaep");
    return this;
  }

  setPublicKey(publicKey: string): NodeRSA {
    if (publicKey.length == 0) return null;
    this.key = new NodeRSA().importKey(publicKey, "public");
    return this.key;
  }

  setPrivateKey(privateKey: string): NodeRSA {
    if (privateKey.length == 0) return null;
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

function Identity(idHash: string) {
  return new SHA3(256).update(idHash).digest("hex");
}

function HashChain(text: string, length: 256 | 384 | 512 = 256) {
  return new ChainHash(text, length);
}

async function Random(length: number = 16) {
  return await randomBytes(length);
}

function AesEncrypt(stringText: string, stringKey: string): string {
  let key = splice(Buffer.from(stringKey), 0, 32);
  let text = Buffer.from(stringText);
  var aesCtr = new Aes.ModeOfOperation.ctr(key);
  var encryptedBytes = aesCtr.encrypt(text);
  var encryptedHex = Aes.utils.hex.fromBytes(encryptedBytes);
  return encryptedHex;
}

export { Rsa, RandomKorean, Random, Identity, HashChain, AesEncrypt };

function hex2Kor(hex: string | Buffer): string {
  if (Buffer.isBuffer(hex)) hex = hex.toString("hex");
  let result = "";
  for (var i = 0; i < hex.length / 3; i++) {
    let number = parseInt(hex.substr(i * 3, 3), 16);

    result += String.fromCharCode(44031 + (i % 2 == 0 ? number : number + 4096));
  }
  return result;
}

function kor2Hex(kor: string | Buffer): string {
  if (Buffer.isBuffer(kor)) kor = kor.toString("hex");
  const result = kor
    .split("")
    .map((item, index) => {
      let number: number = item.charCodeAt(0) - 44031;
      if (index % 2 == 0) number -= 4096;

      const c = number & 0xf;
      const b = (number >>> 4) & 0xf;
      const a = (number >>> 8) & 0xf;

      return [a, b, c];
    })
    .reduce((prev, curr) => prev.concat(curr), [])
    .map(item => item.toString(16))
    .join("");
  return result;
}

function hex2Emo(hex: string | Buffer): string {
  let size = 4;
  if (Buffer.isBuffer(hex)) hex = hex.toString("hex");
  let result = "";
  for (var i = 0; i < hex.length / size; i++) {
    let number = parseInt(hex.substr(i * size, size), 16);

    result += String.fromCodePoint(0x1f600 + number);
  }
  return result;
}

export { hex2Kor, kor2Hex, hex2Emo };
