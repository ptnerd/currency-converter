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

    console.log('CURRENCY AMOUNT: ' + currencyAmount);
    console.log('CURRENCY FROM: ' + currencyFrom);
    console.log('CURRENCY TO: ' + currencyTo);
    console.log('CURRENCY RESULT: ' + currencyResult);
    
    const currencies = Object.keys(data.rates);
    
    var cFromCurrency = currencies.find(function(coin) {
        return coin === currencyFrom;
    });

    var cToCurrency = currencies.find((coin) => {
        return coin === currencyTo;
    });

    var value1 = data.rates[cFromCurrency];
    console.log('FROM RATE: ' + value1);
    var value2 = data.rates[cToCurrency];
    console.log('TO RATE: ' + value2);

    var conversion = currencyAmount * value2;
    console.log('CONVERSION: ' + conversion);

    var conversion1 = value2/(currencyAmount*value1);
    console.log(conversion1)
    console.log('/-------------------------------------------/');

    res.send('works');
});

module.exports = router;