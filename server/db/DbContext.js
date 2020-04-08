import BurgerSchema from "../models/Burger";
import SideSchema from "../models/Side";
import ComboSchema from "../models/Combo";
import mongoose from "mongoose";

class DbContext {
  Burgers = mongoose.model("Burger", BurgerSchema);
  Sides = mongoose.model("Side", SideSchema);
  Combos = mongoose.model('Combo', ComboSchema)
}

export const dbContext = new DbContext();
