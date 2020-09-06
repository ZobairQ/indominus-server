import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { City } from "./City";
const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  city: [{ type: mongoose.Schema.Types.ObjectId, ref: "city" }],
});
export const User = mongoose.model("user", userSchema);
