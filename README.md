# CURRENCY CONVERTER APP

Small web app that allows you to convert exchange rates between different currencies using the last exchange rates available online through https://fixer.io/ API. The currency display information is loaded into the form upon loading the page ('/'). When submiting the form the amount entered will be converted/exchanged and returned to the user in the second input box.

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
* Sass

**Status**
* Application deployed using Heroku at https://i-coin.herokuapp.com;
* Working on error handling;

**Upgrades**

* Display the Exchange Date;
* Complete the About Page - DONE;
* Fix broken GitHub link - DONE;
* Add Fixer.io link on about page;
* Use Selectize;
* UI improvement.

**Problems**

* Environment Variables - FIXED;
* If the value entered is using a float number using comma (,) type NaN will be returned, in the UI the user * will see the error 'Please enter a valid number value'. The workaround for now is to use dot (.);

# Hi there
etc


---

## :checkered_flag: Passos para instalar o projeto 

Para rodar a aplicação, execute o comando: <br>

```console
npm install
npm run start
``` 
Em seguida, será aberto o endereço [http://localhost:3000](http://localhost:3000) em seu navegador.<br><br>

### :file_folder: Estrutura local
pasta: Documents\projetosCompartilhados\currency-converter

<!-- ### :trophy: Versao Online
Hospedado no moacir.net:  [http://moacir.net/reactPlaylist/](http://moacir.net/reactPlaylist/) -->


### :heavy_check_mark: To-DO
 - [x] Ponto inicial - commit via vsCode
 - [ ] React BootStrap funcional
 - [ ] Historico de consultas
 - [ ] Persistencia de dados localstorage
 - [ ] Login/Cadastro
 - [ ] Armazenar historico Remoto
 - [ ] Alertas (monitorar valores de moedas)
  

### :link: Links 
Algo que pode ser util.
 - [Video FreeCodeCamp](https://youtu.be/iVRO0toVdYM)  
 - [Repo no Git](https://github.com/weibenfalk/hooks-videoplayer-starterfiles)


### :satellite: Backend 
Nao ha backend no momento. 

#### :blue_book: Documentacao
 - [React Hooks](https://reactjs.org/docs/hooks-intro.html)
  
 
### FlowChart

```flow
st=>start: Login
op=>operation: Login operation
cond=>condition: Successful Yes or No?
e=>end: To admin

st->op->cond
cond(yes)->e
cond(no)->op
```

#
<footer>
<p style="float:right; width: 20%;">
Copyright © Moacir Jacomin e Andre Pinto
</p>


