import {User} from '../../../models/User';
import {City} from '../../../models/City'
import { ApolloError } from "apollo-server";

// Queries 

/**
 * @description {Query} Find user by the given id param
 * @param {mongoose.Schema.Types.ObjectId} id 
 */
export const queryUserById = async (_, { id }) => await User.findById(id).populate("city");

/**
 * @description {Query} Find user by the username given as param
 * @param {mongoose.Schema.Types.ObjectId} id 
 */
export const queryUserByUsername = async (_, { username }) => await User.findOne({ username }).populate("city").exec();

/**
 * @description {Query} Finds all the users in the database and populates the cities for them.
 */
export const queryAllUsers = () => User.find().popluate("city").exec();

// Mutations

/**
 * @description {Mutation} creates a new user with given parameters and a default city.
 * @param {String} name -  name of the player
 * @param {String} username -  username of the player 
 * @param {String} password -  password of the player 
 * @param {String} email - email of the player 
 * @param {String} cityName -  name of the first city given to the player
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