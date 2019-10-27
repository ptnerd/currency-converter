const express = require('express'),
      { getCurrencies, convertCurrency } = require('../utils/currencyData'),
      router  = new express.Router();
// -------------------------------------------------------------------------- \\
const chalk = require('chalk')
      log   = console.log,
      err = chalk.bold.red,
      msg   = chalk.bold.blue,
      warn  = chalk.bold.yellow;
// -------------------------------------------------------------------------- \\

router.get('/', async (req, res) => {
    try {
        const data = await getCurrencies();
        const currencies = Object.keys(data.rates);
    
        res.render('index', {
            currencyName: currencies,
            test: req.body.test
        });    
    } catch (e) {
        log(err('Unable to Connect! ') + e);
        res.status(500).send(e);
    }
});

router.post('/currencies', async (req, res, next) => {
    try {
        const currencyAmount = req.body.currencyAmount || null,
        currencyFrom   = req.body.currencyFrom,
        currencyTo     = req.body.currencyTo,
        currencyResult = req.body.currencyResult || null;
        // -------------------------------------------------------- \\

        log(msg('CURRENCY AMOUNT: ') + currencyAmount);
        log(msg('CURRENCY FROM: ') + currencyFrom);
        log(msg('CURRENCY TO: ') + currencyTo);
        log(msg('CURRENCY RESULT: ') + currencyResult);
        
        var test = await convertCurrency(currencyAmount, currencyFrom, currencyTo);

        res.redirect('/');   
    } catch (e) {
        log(err('Unable to Connect: ') + e);
        res.status(500).send(e);
    }
});

module.exports = router;