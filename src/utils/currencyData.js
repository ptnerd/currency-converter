const axios = require('axios'),
      api   = 'http://data.fixer.io/api/latest?access_key=8b4617c5c7b56543342a965cc339c715&format=1';
// -------------------------------------------------------------------------------------------------- \\
const chalk = require('chalk')
      log   = console.log,
      err   = chalk.bold.red,
      msg   = chalk.bold.blue,
      warn  = chalk.bold.yellow;
// ------------------------------- \\

const getCurrencies = () => {
    return axios.get(api)
    .then((res) => {
        return res.data;
    }).catch((error) => {
        if (error.response == undefined) {
            throw new Error('Unable to Connect to Currency Exchange API.');
        }
    });
}

const convertCurrency = async (currencyAmount, currencyFrom, currencyTo) => {
    try {
        const data = await getCurrencies();
        const currencies = Object.keys(data.rates);
        
        log(warn('FROM: ') + currencyFrom + warn(' TO: ') + currencyTo);

        const cFromCurrency = currencies.find(function(currencyName) {
            return currencyName === currencyFrom;
        });
    
        const cToCurrency = currencies.find((currencyName) => {
            return currencyName === currencyTo;
        });
        
        var value1 = data.rates[cFromCurrency];
        var value2 = data.rates[cToCurrency];
        log(warn('FROM RATE: ') + value1 + warn(' TO RATE: ') + value2);
    
        var conversion = currencyAmount * value2;
        log(warn('CONVERSION: ') + conversion);
        log('/-------------------------------------------/');

        return conversion;
    } catch (e) {
        log(err('ERROR: ') + e);
    }
}

module.exports = { getCurrencies, convertCurrency };