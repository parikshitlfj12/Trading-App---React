// var API = require('indian-stock-exchange');
var express = require("express");
var API = require('./index');
var NSEAPI = API.NSE;
var app = express();

var cors = require('cors')
app.use(cors());

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


// National Stock Exchange (NSE) APIS

// Example: http://localhost:3000/nse/get_quote_info?companyName=TCS


app.get("/nse/get_quote_info", (req, res, next) => {
    NSEAPI.getQuoteInfo(req.query.companyName)
    .then(function (response) {
      res.json(response.data);
    });
});

module.exports = app;
