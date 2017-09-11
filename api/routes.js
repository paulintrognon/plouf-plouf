'use strict';

const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', (req, res, next) => { res.send({ hello: 'world' }); });

router.get('/draw/:slug', controller.get);
router.post('/draw', controller.create);

module.exports = router;
