import {
  queryUserById,
  queryUserByUsername,
  mutationCreateNewUser,
} from "./userResolversHelper";

export const resolvers = {
  Query: {
    user: queryUserByUsername,
    userById: queryUserById,
  },
  Mutation: {
    createNewUser: mutationCreateNewUser,
  },
};
