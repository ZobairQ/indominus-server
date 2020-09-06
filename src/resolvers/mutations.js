import { User } from "../models/User";
import { ApolloError } from "apollo-server";
import { City } from "../models/City";

/**
 * @description {Mutation} Creates a new user if the username does not exist.
 * @param  {String} name -  name of the player
 * @param  {String} username - username of the player
 * @param  {String} password - password of the player
 * @param  {String} email - email of the player
 * @param  {String} cityName - name of the players initial city
 */
export const mutationCreateNewUser = async (
  _,
  { name, username, password, email, cityName }
) => {
  // Check if the user exists
  const count = await User.count({ username });
  if (count > 0) {
    console.log("The User already exists.");
    throw new ApolloError("The user alreayd exits", "500");
  }

  //We will reach here if the user does not exist.

  const user = new User({ name, username, password, email, cityName });
  const city = new City({
    user: user,
    name: cityName,
    gold: 1000,
    militaryPower: 0,
    population: 100,
    goldMineLevel: 1,
    houseLevel: 1,
    militaryBaseLevel: 0,
  });

  console.log("User ID:", user._id);
  console.log("City ID", city._Id);
  await city.save();
  user.city.push(city);
  const res = await user.save();
  return res;
};

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