var isBlank = require('is-blank');

module.exports = function isPresent(object) {
  return !isBlank(object);
};
