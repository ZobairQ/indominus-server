import {
  queryCityById,
  queryAllCities,
  mutationChangeMilitaryPower,
  mutationChangeGold,
  mutationChangePopluation,
  mutationIncrementGoldMineLevel,
  mutationIncrementHouseLevel,
  mutationIncrementMilitaryBaseLevel,
  mutationUpgradeBuilding
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
    upgradeCityBuilding: mutationUpgradeBuilding,
    incrementGoldMineLevel: mutationIncrementGoldMineLevel,
    incrementHouseLevel: mutationIncrementHouseLevel,
    incrementMilitaryBaseLevel: mutationIncrementMilitaryBaseLevel,
  },
};