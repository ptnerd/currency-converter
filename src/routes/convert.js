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
        log(err('ERROR: ') + e);
        res.status(404).send(e);
    }
});

router.get('/currencies', async (req, res) => {
    const amount = req.query.amount;
    const currencyFrom = req.query.currencyFrom;
    const currencyTo = req.query.currencyTo;

    log(warn('FROM: ') + currencyFrom + warn(' TO: ') + currencyTo);
    if(!amount){
        return res.send({
            error: 'Please provide an amount to convert!'
        });
    }

    var result = await convertCurrency(amount, currencyFrom, currencyTo);
    res.send({
        result
    });
});

router.post('/currencies', async (req, res, next) => {
    // try {
    //     const currencyAmount = req.body.currencyAmount || null,
    //           currencyFrom   = req.body.currencyFrom,
    //           currencyTo     = req.body.currencyTo;
    //     // -------------------------------------------------------- \\

    //     log(msg('CURRENCY AMOUNT: ') + currencyAmount);
    //     log(msg('CURRENCY FROM: ') + currencyFrom);
    //     log(msg('CURRENCY TO: ') + currencyTo);
    //     log(msg('CURRENCY RESULT: ') + exchangeResult);
        
    //     var exchangeResult = await convertCurrency(currencyAmount, currencyFrom, currencyTo);
    //     res.render('index', { currencyAmount, exchangeResult });
    // } catch (e) {
    //     log(err('Unable to Connect: ') + e);
    //     res.status(500).send(e);
    // }
});

module.exports = router;