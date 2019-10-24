const axios = require('axios'),
      api   = 'http://data.fixer.io/api/latest?access_key=8b4617c5c7b56543342a965cc339c715&format=1',
      convertURl = 'http://data.fixer.io/api/convert?access_key=8b4617c5c7b56543342a965cc339c715';

const getCurrencies = () => {
    try {
        return axios.get(api)
        .then((res) => {
            return res.data;
        });
    } catch (e) {
        console.log(e);
    }
}

const convertCurrency = async (currencyAmount, currencyFrom, currencyTo, currencyResult) => {
    const data = await getCurrencies();
    try {
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

        return conversion1;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getCurrencies, convertCurrency };