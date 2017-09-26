const express = require('express');
const router = express.Router();

const drawController = require('../controllers/drawController');

router.post('/create', drawController.create);
router.get('/:slug', drawController.get);

module.exports = router;
