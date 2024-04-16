const express = require('express');
const router = express.Router();
const catsController = require('../controllers/cats.controller');

// Get all cats
router.get('/', catsController.getAllCats);

// Get a cat by id
router.get('/:id', catsController.getCatById);

// Create a cat with a name and age
router.post('/:name-:age', catsController.createCat);

// Update a cat by id
router.put('/:id/:name-:age', catsController.updateCat);

module.exports = router;