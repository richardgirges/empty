'use strict';

module.exports = require('./functionThatReturns')(null);

if ('production' != process.env.NODE_ENV) {
  Object.freeze(module.exports);
}
