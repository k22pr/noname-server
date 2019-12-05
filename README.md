# noname server (graphQL)

익명 암호화 채팅서버 입니다.

모든 메세지는 유저 고유키로 AES256 암호화 하여 저장하고 모든 통신은 RSA로 암호화 되어 전송됩니다.

## 데이터 베이스 구조

### \*IUser

```ts
interface IUser {
  userId: String;
  userName: String;
  reg_date: Date;
  last_date: Date;
}
```

decrypt되어있는 유저의 정보 입니다. 해당 데이터는 DB에 저장되지 않습니다.

### IUserEncrypt

```ts
interface IUserEncrypt {
  index: String;
  encrypt: String;
}
```

seriarize된 IUser에 대한 정보를 암호화하여 저장하며 index을 이용해 찾을 수 있습니다.

### IIdBlock

```ts
interface IIdBlock {
  identity: String;
  index: String;
}
```

유저정보와 유일하게 연관점을 가지고 있는 IdBlock입니다. indentity와 index 모두 해쉬형태로 보관합니다.

### IUserFailCount

```ts
interface IUserFailCount {
  id: String;
  failCount: Number;
  lastDate: Date;
}
```

```IRoom
  name : String
  password : String
```
