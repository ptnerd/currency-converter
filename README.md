# CURRENCY CONVERTER APP

Small web app that allows you to convert exachange rates from Euros (€) to any other currency using the last exchange rates availble online through https://fixer.io/ API. The currency information is load into the form upon loading the page ('/'). When submiting the form the amount enter will be converted/exchanged and returned to the user in the second input box. 

As it is a async/await call you might say a loading message while the conversion is made.
I've set the default values in the convert to EUR and CZK. If the page refresh these values will be loaded.
If the first (left) input inbox is empty an amount will be requested.

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
* Working on error handling;
* Application deployed using Heroku at https://i-coin.herokuapp.com;
* Working on the UI improvement. Currently Applying SCSS & Bootstrap

**Problems**
* Environment Vairiables - FIXED;
* About Page breaks on smaller displays
* jQuery is need in order for Selectize to work, for now I am using the online CDN lib
* if the value entered is using a float number using comma (,) NaN will be returned;
* In the UI the user will see the error 'Please enter a valid number value';
* Workaround is to use dot (.) for now;
* Broken GitHub link
* Empty About Page;
* Exchange message;
* Exchange date;
* Responsiveness
