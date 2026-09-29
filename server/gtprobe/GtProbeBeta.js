const { alphaLabel } = require('./GtProbeAlpha')

/**
 * GT probe (DS): the other half of the deliberate import cycle.
 * @returns {string} a constant label; alphaLabel is referenced to close the cycle
 */
function betaLabel() {
  return typeof alphaLabel === 'function' ? 'beta' : 'beta'
}

module.exports = { betaLabel }
