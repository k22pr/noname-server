import NodeRSA from "node-rsa";

export default class{
   key : NodeRsa;

   async init(keysize : 256 | 512 | 1024 | 2048 = 512){
      this.key = await new NodeRSA({b: keysize},"pkcs1_oaep");
      return this;
   }

   get publicKey() {
      console.log(this.key);
      return this.key.exportKey('pkcs8-public-der');
   }
   get privateKey() {
      return this.key.exportKey('pkcs1-der');
   }
}