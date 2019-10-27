console.log('CODE LOADED!!');
const currencyForm = document.querySelector('form');
const search = document.querySelector('input');
const cFrom = document.getElementById('currencyFrom');
cFrom.value = 'EUR';
const cTo = document.getElementById('currencyTo');
cTo.value = 'CZK';
const messageOne = document.getElementById('message-1');

currencyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = search.value;
    const currencyFrom = cFrom.value;
    const currencyTo = cTo.value;
    const url = '/currencies?amount='+amount+'&currencyFrom='+currencyFrom+'&currencyTo='+currencyTo;

    messageOne.textContent = 'Loading...';

    fetch(url).then((response) => {
        response.json().then((data) => {
            console.log(data);
            if(data.error){
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = 'Converted Amount: ' + parseFloat(data.result).toFixed(2); 
            }
        });
    });
});