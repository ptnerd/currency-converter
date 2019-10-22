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

const convertCurrencies = (from, to, amount) => {
    try {
        return axios.get(convertURl + '&' + from + '&' + to + '&' + amount)
        .then((res) => {
            return res.data;
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getCurrencies, convertCurrencies };