'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => next({ hello: 'world' }));
router.post('/log', (req, res, next) => next({ ok: true }));

module.exports = router;
