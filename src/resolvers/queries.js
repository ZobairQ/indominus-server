import { User } from "../models/User";
import { City } from "../models/City";

export const queryCityById = async (_, { id }) => await City.findById(id).populate("user");
export const queryUserById = async (_, { id }) => await User.findById(id).populate("city");
export const queryUserByUsername = async (_, { username }) => await User.findOne({ username }).populate("city").exec();
export const queryCityByName = async (_, { name }) => await City.findOne({ name }).populate("user").exec();
export const queryAllCities = () => City.find().populate("user").exec();
export const queryAllUsers = () => User.find().popluate("city").exec();