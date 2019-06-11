class Security {
   private mongoKey: string;
   get getMongoKey(): string {
      return this.mongoKey;
   }

   set setMongoKey(inputKey: string) {
      this.mongoKey = inputKey;
   }
}
export default new Security();
