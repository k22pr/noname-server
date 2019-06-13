class ClientList {
  clientList: Client[];

  findClient(client: any) {
    let find = this.clientList.find(current => {
      current.id == client.id;
    });

    return find[0];
  }
}

class Client {
  id: string;
  client: any;
  privateKey: Buffer;
  publicKey: Buffer;
  clientKey: Buffer;
}

export { Client, ClientList };
