# CURRENCY CONVERTER APP

Small web app that allows you to convert exachange rates from Euros (€) to any other currency using the last exchange rates availble online. The currency information is load into the form upon loading the page ('/'). When submiting the form the amount enter will be converted/exchanged and returned to the user in the second input box. 

As it is a async/await call you might say a loading message while the conversion is made.
I've set the default values in the convert to EUR and CZK. If the page refresh these values will be loaded.
If the first (left) input inbox is empty an amount will be requested.

**Features**
* https://fixer.io/ API
* NodeJS 
* Express
* EJS as a render engine
* Axios
* Chalk (just for code debug and terminal print) :)
* CMD-ENV

**Status**
* Working on error handling;
* Application deployed using Heroku at https://i-coin.herokuapp.com;

**Problems**
* UI Improvement...
* Environment Vairiables - FIXED
* if the value entered is using a float number using comma (,) NaN will be returned;