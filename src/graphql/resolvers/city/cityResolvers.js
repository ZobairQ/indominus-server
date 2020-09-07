import {
  queryCityById,
  queryAllCities,
  mutationChangeMilitaryPower,
  mutationChangeGold,
  mutationChangePopluation,
  mutationIncrementGoldMineLevel,
  mutationIncrementHouseLevel,
  mutationIncrementMilitaryBaseLevel,
} from "./cityResolversHelper";

export const resolvers = {
  Query: {
    cities: queryAllCities,
    cityById: queryCityById,
  },
  Mutation: {
    changeMilitaryPower: mutationChangeMilitaryPower,
    changeGold: mutationChangeGold,
    changePopluation: mutationChangePopluation,
    incrementGoldMineLevel: mutationIncrementGoldMineLevel,
    incrementHouseLevel: mutationIncrementHouseLevel,
    incrementMilitaryBaseLevel: mutationIncrementMilitaryBaseLevel,
  },
};
