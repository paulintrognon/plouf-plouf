'use strict';

const logger = require('./logger');

module.exports = responseMiddleware;

function responseMiddleware(promise, req, res, next) {
  if (promise instanceof Error) {
    handleError(promise);
    return;
  }

  if (!promise.then) {
    handleSuccess(promise);
    next();
    return;
  }

  promise
    .then(handleSuccess, handleError)
    .catch(next);

  function handleSuccess(result) {
    logger.info(`${req.method} ${req.originalUrl}`, req.params, req.body);
    res.status(200).send(result);
  }

  function handleError(error) {
    logger.error(`${req.method} ${req.originalUrl}`, error);
    res.status(error.status || 400).send({
      error: true,
      status: error.status,
      name: error.name,
      message: error.message,
      code: error.code,
      errors: error.errors,
      payload: error.payload,
    });
  }
}
