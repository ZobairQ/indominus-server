import { User } from "./models/User";
import { ApolloError } from "apollo-server";
import { City } from "./models/City";
import {
  queryCityById,
  queryUserById,
  queryUserByUsername,
  queryCityByName,
  QueryAllCities,
} from "./resolvers/queries";
import {
  mutationCreateNewUser,
  mutationChangeMilitaryPower,
  mutationChangeGold,
  mutationChangePopluation,
  mutationIncrementGoldMineLevel,
  mutationIncrementHouseLevel,
  mutationIncrementMilitaryBaseLevel,
} from "./resolvers/mutations";

export const resolvers = {
  Query: {
    cities: QueryAllCities,
    city: queryCityByName,
    user: queryUserByUsername,
    userById: queryUserById,
    cityById: queryCityById,
  },
  Mutation: {
    createNewUser: mutationCreateNewUser,
    changeMilitaryPower: mutationChangeMilitaryPower,
    changeGold: mutationChangeGold,
    changePopluation: mutationChangePopluation,
    incrementGoldMineLevel: mutationIncrementGoldMineLevel,
    incrementHouseLevel: mutationIncrementHouseLevel,
    incrementMilitaryBaseLevel: mutationIncrementMilitaryBaseLevel,
  },
};
