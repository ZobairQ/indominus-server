import * as mongoose from "mongoose";
import { Schema } from "mongoose";
const citySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: String,
  gold: Number,
  militaryPower: Number,
  population: Number,
  goldMineLevel: Number,
  houseLevel: Number,
  militaryBaseLevel: Number,
});

export const City = mongoose.model("city", citySchema);
