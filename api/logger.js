'use strict';

const winston = require('winston');
const config = require('config').logger;

const transports = [];

if (config.console) {
  const transport = new (winston.transports.Console)({
    level: config.console.level,
  });
  transports.push(transport);
}

if (config.file) {
  const transport = new (winston.transports.File)({
    filename: config.file.filename,
    level: config.file.level,
  });
  transports.push(transport);
}

const logger = new (winston.Logger)({
  transports,
});

module.exports = logger;
