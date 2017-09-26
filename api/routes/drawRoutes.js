const express = require('express');
const router = express.Router();

const drawController = require('../controllers/drawController');

router.post('/create', (req, res, next) => next(drawController.create(req)));
router.get('/:slug', (req, res, next) => next(drawController.get(req)));

module.exports = router;
