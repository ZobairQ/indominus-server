import { User } from "../models/User";
import { City } from "../models/City";


export const cityResolvers = {
  Query: {
    cities: () => City.find().populate("user"),
    city: async (_, { name }) =>
      await City.findOne({ name }).populate("user").exec(),
  },
  Mutation: {},
};
