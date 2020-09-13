import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";
import { context } from "./utils/context";
import { User } from "./models/User";
const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  var dbHost = process.env.DATABASE_HOST || "localhost";
  var mongodbConnection = "mongodb://" + dbHost + ":27017/indominus";

  await mongoose.connect(mongodbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen({ port: 4000 }, () => {
    // We need to check if there a dummy user already exits.
    User.find(
      { username: "indominus", password: "ItWasFullMoon" },
      (err, result) => {
        if (err) {
          console.log(err);
        }
        //If the user does not exit find will return [] so the length is 0
        if (!result.length) {
          // The length is 0 so we create the user for the first time.
          const user = new User({
            username: "indominus",
            password: "ItWasFullMoon",
          });
          const id = user
            .save()
            .then((usr) =>
              console.log(
                "Use following id for your authorization header",
                usr._id
              )
            );
        }
      }
    );

    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer();
