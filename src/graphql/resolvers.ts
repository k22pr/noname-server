import { getUser, people } from "../controller";

const resolvers = {
  Query: {
    people: people,
    getUser: () => getUser(),
  },
};

export default resolvers;
