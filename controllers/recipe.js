// controllers/recipes.js

const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Recipe = require("../models/recipe.js");

router.get("/", async function (req, res) {
  try {
    const userRecipes = await Recipe.find({ owner: req.session.user._id });
    res.render('recipes/index.ejs', { recipes: userRecipes });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/new", async function (req, res) {
  res.render("recipes/new.ejs");
});

router.get('/:recipeId', async (req, res) => {
	try {
		const currentRecipe = await Recipe.findById(req.params.recipeId);
		res.render('recipes/show.ejs', { recipe: currentRecipe });
	} catch (err) {
		console.log(err);
		res.redirect('/');
	}
});


router.post('/create', async function(req, res) {
  try {
    const newRecipe = new Recipe(req.body);
    newRecipe.owner = req.session.user._id
    await newRecipe.save();
    res.redirect('/');
  } catch (error) {
   console.log(error);
   res.redirect('/new');
  }
});

router.put('/:recipeId', async (req, res) => {
	try {
		const currentRecipe = await Recipe.findById(req.params.recipeId);
		currentRecipe.set(req.body);
		await currentRecipe.save();
		res.redirect('/');
	} catch (err) {
		console.log(err);
		res.redirect('/');
	}
});

router.get('/:recipeId/edit', async (req, res) => {
	try {
		const currentRecipe = await Recipe.findById(req.params.recipeId);
		res.render('recipes/edit.ejs', { recipe: currentRecipe });
	} catch (err) {
		console.log(err);
		res.redirect('/');
	}
});

router.delete('/:recipeId', async (req, res) => {
	try {
		const currentRecipe = await Recipe.findById(req.params.recipeId);
		await currentRecipe.deleteOne();
		res.redirect('/recipes');
	} catch (err) {
		console.log(err);
		res.redirect('/');
	}
});

module.exports = router;
