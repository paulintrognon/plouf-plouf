'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => { res.send({ hello: 'world' }); });

const drawRoutes = require('./drawRoutes.js');
router.use('/draw', drawRoutes);

module.exports = router;
