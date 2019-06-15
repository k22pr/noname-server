import * as Encrypt from "./util/encrypt";
let hex =
  "3310330a7432db2dddb0a64b33cdc21db957af3c875a59e1eea25aff07570bd8eed1ed7079a0782835672f864c0c4f45ef618593e302103e143b5543035a5388f71ade94a6f794ec1ba1a35ade83a081a14184d1c5afcb4511561d04d65741860f084eae388601be0fc0a171c0311520b25257c95c200884ad54a9ae640cc203c21187669cdf6fcf32ca1b5e07";
let kor = Encrypt.hex2Kor(hex);
console.log(kor);
let newHex = Encrypt.kor2Hex(kor);
console.log(newHex);

console.log(Encrypt.hex2Emo(hex));
for (var i = 0; i < 65535; i++) {
  //console.log(Encrypt.hex2Emo(i));
}
