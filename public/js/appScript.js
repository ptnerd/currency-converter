console.log('CODE LOADED!!');
const currencyForm = document.querySelector('form');
const search = document.querySelector('input');
const cFrom = document.getElementById('currencyFrom');
cFrom.value = 'EUR';
const cTo = document.getElementById('currencyTo');
cTo.value = 'CZK';
const messageOne = document.getElementById('message'); // First Input Box
const messageTwo = document.getElementById('message-1'); // Second Input Box
// ------------------------------------------------------------------------- \\

currencyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = search.value;
    const currencyFrom = cFrom.value;
    const currencyTo = cTo.value;
    const url = '/currencies?amount='+amount+'&currencyFrom='+currencyFrom+'&currencyTo='+currencyTo;

    messageOne.textContent = 'Loading...';

    fetch(url).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error;
                messageTwo.value = '';
            } else if (data.result == null) {
                messageOne.textContent = 'Please enter a valid number value';
                messageTwo.value = '';
            } else {
                messageOne.textContent = ''; 
                messageTwo.value = parseFloat(data.result).toFixed(3); 
            }
        });
    });
});