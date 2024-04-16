const express = require('express');
const router = express.Router();
const catsController = require('../controllers/cats.controller');

// Get all cats
router.get('/', catsController.getAllCats);

// Get a cat by id
router.get('/:id', catsController.getCatById);

module.exports = router;