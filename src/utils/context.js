import { AuthenticationError } from "apollo-server-express";
import { User } from "../models/User";
import mongoose from "mongoose";

export const context = async ({ req }) => {
    const { ObjectId } = mongoose.Types; // I need the ObjectID from mongoose types to validate my input id.
    const token = req.headers.authorization || ""; // Get he id from the header
    if (token && ObjectId.isValid(token)) { // Check if token is set and valid
      const user = await User.findById(token);
      if (user) {
        return user;
      }
    }
    throw new AuthenticationError("you must be logged in");
  }