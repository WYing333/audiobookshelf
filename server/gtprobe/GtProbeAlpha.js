const { betaLabel } = require('./GtProbeBeta')

/**
 * GT probe (DS): half of a deliberate two-module import cycle.
 * @returns {string} a label built from the sibling module
 */
function alphaLabel() {
  return `alpha:${betaLabel()}`
}

module.exports = { alphaLabel }
