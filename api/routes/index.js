'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => next({ hello: 'world' }));

const drawRoutes = require('./drawRoutes.js');
router.use('/draw', drawRoutes);

module.exports = router;
