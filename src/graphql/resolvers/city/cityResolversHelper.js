import { User } from "../../../models/User";
import { City } from "../../../models/City";

// City queries resolved

/**
 * @description {Query} Finds city by the given id
 * @param {*} id - The id city to be queried 
 * @returns {Model.Object}
 */
export const queryCityById = async (_, { id }) => await City.findById(id).populate("user");
export const queryAllCities = () => City.find().populate("user").exec();
export const queryAllUsers = () => User.find().popluate("city").exec();


// City mutations resolved

/**
 * @description {Mutation} Changes the military power of a city to value param
 * @param  {mongoose.Schema.Types.ObjectId} id -  id of the given City
 * @param  {int} value - value the military power should be set to
 * */
export const mutationChangeMilitaryPower = async (_, { id, value }) => {
  return await City.findByIdAndUpdate(id, { militaryPower: value });
};

/**
 * @description {Mutation} Changes the gold of a city to value param
 * @param {mongoose.Schema.Types.ObjectId} id - id of the given City
 * @param {int} value - value the gold should be set to
 */
export const mutationChangeGold = async (_, { id, value }) => {
  return await City.findByIdAndUpdate(id, { gold: value });
};

/**
 * @description {mutation} Changes the population of a city to value param
 * @param {mongoose.Schema.Types.ObjectId} id - id of the given City
 * @param {Int} value - Value the population should be set to
 */
export const mutationChangePopluation = async (_, { id, value }) => {
  return await City.findByIdAndUpdate(id, { population: value });
};

/**
 * @description {mutation} increments the level of the gold mine for given city.
 * @param {mongoose.Schema.Types.ObjectId} id - The id of the given cty
 */
export const mutationIncrementGoldMineLevel = async (_, { id }) => {
  return await City.findByIdAndUpdate(id, { $inc: { goldMineLevel: 1 } });
};

/**
 * @description {Mutation} increments the level of the house for given city
 * @param {mongoose.Schema.Types.ObjectId} id - The id of the given cty
 * @returns {mongoose.Document}
 */
export const mutationIncrementHouseLevel = async (_, { id }) => {
  return await City.findByIdAndUpdate(id, { $inc: { houseLevel: 1 } });
};

/**
 * @description {Mutation} increments the level of military base for given city
 * @param {mongoose.Schema.Types.ObjectId} id - The id of the given cty
 * @returns {mongoose.Document}
 */
export const mutationIncrementMilitaryBaseLevel = async (_, { id }) => {
  return await City.findByIdAndUpdate(id, { $inc: { militaryBaseLevel: 1 } });
};