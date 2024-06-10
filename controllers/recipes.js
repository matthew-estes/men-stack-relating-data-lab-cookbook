// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');

// router logic will go here - will be built later on in the lab
router.get('/', async function() {
    resizeBy.render('recipes/index.ejs');
})


module.exports = router;