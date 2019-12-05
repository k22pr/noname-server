const fs = require("fs");
const path = require("path");
const { makeExecutableSchema } = require("graphql-tools");
import resolvers from "./resolvers";

// const typeDefs = fs.readFileSync(path.join(__dirname, "../../../src/model/graphQL/streamer.graphql"), "utf-8");
import typeDefs from "./graphql";

export { typeDefs, resolvers };
