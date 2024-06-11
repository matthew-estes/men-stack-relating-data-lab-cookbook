// controllers/recipes.js

const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Recipe = require("../models/recipe.js");

router.get("/", async function (req, res) {
  try {
    const userRecipes = await Recipe.find({ owner: req.session.user._id });
    res.render("recipes/index.ejs", { recipes: userRecipes });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/new", async function (req, res) {
  res.render("recipes/new.ejs");
});

module.exports = router;
