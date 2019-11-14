# CURRENCY CONVERTER APP

<<<<<<< HEAD
Small web app that allows you to convert exchange ratesbetween different currencies using the last exchange rates available online through https://fixer.io/ API. The currency display information is loaded into the form upon loading the page ('/'). When submiting the form the amount entered will be converted/exchanged and returned to the user in the second input box.
=======
Small web app that allows you to convert exachange rates from between different currencies using the last exchange rates availble online through https://fixer.io/ API. The currency display information is loaded into the form upon loading the page ('/'). When submiting the form the amount entered will be converted/exchanged and returned to the user in the second input box. 
>>>>>>> 604de27eacc0b866e85e77debb016f1b7626ba1a

As it is a async/await call you might see a loading message while the conversion is made. I've set the default values in the convert to EUR and CZK. If the page refreshes these values will be loaded. If the first (top) input inbox is empty an amount will be requested.

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
<<<<<<< HEAD

* Display the Exchange Date;
* Complete the About Page;
* Fix broken GitHub link - DONE;
* Add Fixer.io link - Done;
* UI improvement.

**Problems**

* Environment Variables - FIXED;
* If the value entered is using a float number using comma (,) type NaN will be returned, in the UI the user * will see the error 'Please enter a valid number value'. The workaround for now is to use dot (.);
=======
* Display the Exchange Date;
* Complete the About Page;
* Fix broken GitHub link;
* UI improvement.

**Problems**
* Environment Variables - FIXED;
* If the value entered is using a float number using comma (,) type NaN will be returned, in the UI the user will see the error 'Please enter a valid number value'. The workaround for now is to use dot (.);
>>>>>>> 604de27eacc0b866e85e77debb016f1b7626ba1a
