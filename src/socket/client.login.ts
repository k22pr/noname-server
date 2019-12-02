import NodeRSA from "node-rsa";
import * as Model from "../model";
import * as Encrypt from "../util/encrypt";
import ClientList, { Client } from "../class/class.client";
import DataBase from "../db/connection";

export default class {
   public static LoginValidateCheck(loginData: Model.ILoginData) {
      console.log("login validate checking...");
      console.log(loginData);
   }

   public static async Signup(client: Client, encData: string) {
      let rsa: NodeRSA = new Encrypt.Rsa().setPrivateKey(client.privateKey);
      let json: string = rsa.decrypt(encData, "utf8");
      let formData: Model.UserInput.ISingupForm = JSON.parse(json);

      let jsonChain = Encrypt.HashChain(json, 256);
      let idChain = Encrypt.HashChain(formData.id, 256);
      let passChain = Encrypt.HashChain(formData.password, 256);

      //let passEncryptKey =
      let userIndex = Encrypt.RandomKorean(16);

      let dataEncryptKey = Buffer.from(await Encrypt.Random(32)).toString("hex");

      let issetIdBlock = await Model.User.IIdBlockModel.findOne({ identity: idChain.GetValidate }, (err: any, issetBlock: any) => {
         if (err) return err;
         else return issetBlock;
      });
      if (issetIdBlock) {
         return client.client.emit("err", "already id");
      }

      //index 중복 확인
      do {
         let issetIdBlock2Index = await Model.User.IIdBlockModel.findOne({ index: userIndex }, (err: any, issetIdBlock: any) => {
            if (err) return err;
            else return issetIdBlock;
         });
         if (!issetIdBlock2Index) break;
      } while (true);
      let dataEncrypt = Encrypt.AesEncrypt(dataEncryptKey, jsonChain.GetKey);

      let idBlock: Model.User.IIdBlock = {
         identity: Encrypt.hex2Kor(idChain.GetValidate),
         index: userIndex
      };

      let passBlock: Model.User.IPassBlock = {
         passCode: Encrypt.hex2Kor(jsonChain.GetValidate),
         encryptKey: Encrypt.hex2Kor(dataEncrypt)
      };

      let userData: Model.User.IUser = {
         userId: formData.id,
         userName: formData.id.slice(0, 16),
         date: new Date()
      };

      let userDataJson = JSON.stringify(userData);
      let userDataEncrypt = Encrypt.AesEncrypt(userDataJson, dataEncryptKey);
      let UserEncrypt: Model.User.IUserEncrypt = {
         index: userIndex,
         encrypt: Encrypt.hex2Kor(userDataEncrypt)
      };

      await new Model.User.IIdBlockModel(idBlock).save();
      await new Model.User.IPassBlockModel(passBlock).save();
      await new Model.User.UserEncryptModel(UserEncrypt).save();

      client.client.emit("movePage", "/login");
      //await new Model.User.UserModel(userData).save();

      //id already check
      //DataBase.findOne()
   }
}
