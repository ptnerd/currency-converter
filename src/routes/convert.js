const express = require('express'),
      { getCurrencies, convertCurrency } = require('../utils/currencyData'),
      router  = new express.Router();
// -------------------------------------------------------------------------- \\
const chalk = require('chalk')
      log   = console.log,
      err   = chalk.bold.red,
      msg   = chalk.bold.blue,
      warn  = chalk.bold.yellow;
// -------------------------------------------------------------------------- \\

router.get('/', async (req, res) => {
    try {
        const data = await getCurrencies();
        const currency = Object.keys(data.rates);
        res.render('index', {
            currency,
            date: data.date
        });    
    } catch (e) {
        log(err(e));
        res.status(404).send(e.message);
    }
});

router.get('/currencies', async (req, res) => {
    try {
        const amount = req.query.amount;
        const currencyFrom = req.query.currencyFrom;
        const currencyTo = req.query.currencyTo;
    
        if(!amount){
            return res.send({
                error: 'Please provide an amount to convert!'
            });
        }
    
        var result = await convertCurrency(amount, currencyFrom, currencyTo);
        res.send({
           result
        });
    } catch (e) {
        log(err(e));
        res.status(500).send();
    }
});

module.exports = router;