var axios = require('axios');

var QUOTE_INFO_URL = require('../constant').QUOTE_INFO_URL;
var GET_QUOTE_URL = require('../constant').GET_QUOTE_URL;

function getQuoteInfo(symbol) {
  return axios.get(QUOTE_INFO_URL + encodeURIComponent(symbol), {
    headers: {
      Referer: GET_QUOTE_URL + encodeURIComponent(symbol),
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
}
var NSEAPI = {
  getQuoteInfo: getQuoteInfo,
};

module.exports = NSEAPI;
