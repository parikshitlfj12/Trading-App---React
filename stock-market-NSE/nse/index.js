var NSEAPI = require('./service/API');

function getQuoteInfo(symbol) {
  return NSEAPI.getQuoteInfo(symbol);
}


var nse = {
  getQuoteInfo: getQuoteInfo,
};

module.exports = nse;
