'use strict';
const db = require('./db');

db.connect()
  .then(() => {
    require('./models/Draw');
  })
  .then(() => db.sync())
  .then(() => db.close());
