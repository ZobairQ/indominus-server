import {User} from '../../../models/User';
import { ApolloError } from "apollo-server";

// Queries 

export const queryUserById = async (_, { id }) => await User.findById(id).populate("city");
export const queryUserByUsername = async (_, { username }) => await User.findOne({ username }).populate("city").exec();
export const queryAllUsers = () => User.find().popluate("city").exec();

// Mutations

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