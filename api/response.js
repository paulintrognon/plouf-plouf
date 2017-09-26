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
    res.status(200).send(result);
  }

  function handleError(error) {
    logger.error(error);
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
