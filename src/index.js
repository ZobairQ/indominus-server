import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import {typeDefs} from './graphql/types'
import { resolvers } from "./graphql/resolvers";
import {context} from './utils/context';

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
  });
  
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
