import * as Encrypt from "./util/encrypt";
let hex = "1234567890abcdef09876543210";
console.log(hex);
let kor = Encrypt.hex2Kor(hex);
console.log(kor);
let newHex = Encrypt.kor2Hex(kor);
console.log(newHex);
