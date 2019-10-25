const express = require('express'),
      { getCurrencies, convertCurrency } = require('../utils/currencyData'),
      router  = new express.Router();
// -------------------------------------------------------------------------- \\

router.get('/', async (req, res) => {
    const data = await getCurrencies();
    const currencies = Object.keys(data.rates);

    res.render('index', {
        currencyName: currencies
    });
});

router.get('/currencies', (req, res) => {

});

router.post('/currencies', async (req, res, next) => {
    const currencyAmount = req.body.currencyAmount || null,
          currencyFrom   = req.body.currencyFrom,
          currencyTo     = req.body.currencyTo,
          currencyResult = req.body.currencyResult || null;
    // -------------------------------------------------------- \\

    console.log('CURRENCY AMOUNT: ' + currencyAmount);
    console.log('CURRENCY FROM: ' + currencyFrom);
    console.log('CURRENCY TO: ' + currencyTo);
    console.log('CURRENCY RESULT: ' + currencyResult);
    
    var test = await convertCurrency(currencyAmount, currencyFrom, currencyTo, currencyResult);
    res.redirect('/');
    // res.send('works');
});

module.exports = router;