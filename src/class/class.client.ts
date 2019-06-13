import Encrypt from "../util/encrypt";

class ClientList {
  static clientList: Client[] = [];

  public static Add(client: any, serverKey: Encrypt, clientPublicKey: string) {
    this.clientList.push(new Client(client, serverKey, clientPublicKey));
  }

  public static Remove(client: any) {
    let index = 0;
    this.clientList.find(current => {
      if (client.id == current.id) {
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

  constructor(client: any, serverKey: Encrypt, clientPublicKey: string) {
    this.id = client.id;
    this.client = client;
    this.privateKey = serverKey.privateKey;
    this.publicKey = serverKey.publicKey;
    this.clientPublicKey = clientPublicKey;
  }
}

export default ClientList;
export { Client };
