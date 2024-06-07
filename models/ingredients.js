const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Ingredients = mongoose.model("Ingredients", ingredientsSchema);

module.exports = Ingredients;
