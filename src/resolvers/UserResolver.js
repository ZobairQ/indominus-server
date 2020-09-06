import { User } from "../models/User";
import { City } from "../models/City";
import { ApolloError } from "apollo-server";

export const userResolvers = {
  Query: {
    users: () => User.find().populate("city"),
    user: async (_, { username }) =>
      await User.findOne({ username }).populate("city").exec(),
    userById: async (_, { id }) => await User.findById(id).populate("cities"),
  },
  Mutation: {
    createNewUser: async (_, { name, username, password, email, cityName }) => {
      // Check if the user exists
      const count = await User.count({ username });
      if (count > 0) {
        console.log("The User already exists.");
        throw new ApolloError("The user alreayd exits", "500");
      }

      //We will reach here if the user does not exist.

      const user = new User({ name, username, password, email, cityName });
      const city = new City({
        user: user._id,
        name: cityName,
        gold: 1000,
        militaryPower: 0,
        population: 100,
      });

      user.city.push(city._id);
      await city.save();
      const res = await user.save();
      return res;
    },
  },
};
