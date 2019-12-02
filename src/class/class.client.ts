import * as Encrypt from "../util/encrypt";
import { SHA3, Keccak } from "sha3";

class ClientList {
  static clientList: Client[] = [];

  public static Add(client: any, serverKey: Encrypt.Rsa, clientPublicKey: string) {
    this.clientList.push(new Client(client, serverKey, clientPublicKey));
  }

  public static Remove(client: any) {
    let index = 0;
    this.clientList.find(current => {
      if (current && client.id == current.id) {
        this.clientList.splice(index, 1);
      }
      index++;
    });
  }

  public static Find(client: any) {
    return this.clientList.find(current => {
      return current.id == client.id;
    });
  }
}

class Client {
  id: string;
  client: any;
  privateKey: string;
  publicKey: string;
  clientPublicKey: string;

  constructor(client: any, serverKey: Encrypt.Rsa, clientPublicKey: string) {
    this.id = client.id;
    this.client = client;
    this.privateKey = serverKey.privateKey;
    this.publicKey = serverKey.publicKey;
    this.clientPublicKey = clientPublicKey;
  }
}

export default ClientList;
export { Client };
