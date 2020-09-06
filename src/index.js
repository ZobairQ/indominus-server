import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolversCompact";
import { User } from "./models/User";
import { AuthenticationError } from "apollo-server-express";
const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const { ObjectId } = mongoose.Types; // I need the ObjectID from mongoose types to validate my input id.
      const token = req.headers.authorization || ""; // Get he id from the header
      if (token && ObjectId.isValid(token)) { // Check if token is set and valid
        const user = await User.findById(token);
        if (user) {
          return user;
        }
      }
      throw new AuthenticationError("you must be logged in");
    },
  });

  // const server = new ApolloServer({
  //   typeDefs: [queryTypeDef, mutationTypeDef, userTypeDef, cityTypeDef],
  //   resolvers: merge(userResolvers), // Add more resolvers here.
  // });
  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/indominus", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer();
