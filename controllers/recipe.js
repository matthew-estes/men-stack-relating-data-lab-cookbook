// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');

router.get('/', async function(req, res) {
    res.render('/index.ejs');
  });

router.get('/new', async function (req, res) {
    res.render('recipes/new.ejs');
});

  

module.exports = router;