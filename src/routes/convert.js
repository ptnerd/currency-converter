const express = require('express'),
      { getCurrencies, convertCurrencies } = require('../utils/getData'),
      router  = new express.Router();

router.get('/', async (req, res) => {
    const data = await getCurrencies();
    const currencies = Object.keys(data.rates);

    res.render('index', {
        currencyName: currencies
    });
});

router.get('/currencies', (req, res) => {

});

router.post('/currencies', async (req, res) => {
    const currencyAmount = req.body.currencyAmount || null,
          currencyFrom   = req.body.currencyFrom,
          currencyTo     = req.body.currencyTo,
          currencyResult = req.body.currencyResult || null,
          data           = await getCurrencies();
    // -------------------------------------------------------- \\

    console.log(currencyAmount);
    console.log(currencyFrom);
    console.log(currencyTo);
    console.log(currencyResult);
    
    const currencies = Object.keys(data.rates);
    const rates = Object.values(data.rates);
    
    var found = currencies.find(function(coin) {
        return coin === currencyFrom;
    });

    console.log(found);

    res.send('works');
});

module.exports = router;