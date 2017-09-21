'use strict';

/**
 * Checking config existance
 */
const path = require('path');
const fs = require('fs');
const configPath = path.join(__dirname, '../config.json');
if (!fs.existsSync(configPath)) {
  throw new Error('You need to create the config.json file from config.json.example');
}

/**
 * Loading dependencies
 */
const bodyParser = require('body-parser');
const config = require('../config');
const cors = require('cors');
const db = require('./db');
const express = require('express');
const http = require('http');
const logger = require('./logger');

/**
 * Creating the app
 */
const app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json

/**
 * Configuring the app
 */
const port = (config.api && config.api.port) || 3001;
app.set('port', port);

/**
 * Connecting to MySQL
 * /!\ We need to connect to mysql first thing in order to have sequelize initialized
 */
db.connect()
  .then(() => {
    /**
     * Adding the routes
     */
    const routes = require('./routes');
    app.use('/api', routes);

    /**
     * Starting the app
     */
    const server = http.createServer(app);
    server.listen(port, () => {
      const address = server.address();
      logger.info(`API up and running on ${address.address}:${address.port}`);
    });
  });
