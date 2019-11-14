# CURRENCY CONVERTER APP

Small web app that allows you to convert exachange rates from Euros (€) to any other currency using the last exchange rates availble online through https://fixer.io/ API. The currency information is load into the form upon loading the page ('/'). When submiting the form the amount enter will be converted/exchanged and returned to the user in the second input box. 

As it is a async/await call you might say a loading message while the conversion is made. I've set the default values in the convert to EUR and CZK. If the page refresh these values will be loaded. If the first (top) input inbox is empty an amount will be requested.

**Features**
* NodeJS 
* Express
* EJS
* Axios
* Chalk (just for code debug and terminal print) :)
* CMD-ENV
* Bootstrap
* JQuery

**Status**
* Application deployed using Heroku at https://i-coin.herokuapp.com;
* Working on error handling;

**Upgrades**
* Display the Exchange Date;
* Complete the About Page;
* Fix broken GitHub link;
* UI improvement.

**Problems**
* Environment Variables - FIXED;
* If the value entered is using a float number using comma (,) type NaN will be returned, in the UI the user will see the error 'Please enter a valid number value'. The workaround for now is to use dot (.);
