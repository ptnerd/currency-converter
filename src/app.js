import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './views/Home';
import Login from './views/Usuario.login';
import NovoUsuario from './views/Usuario.novo';
import UsuarioRecuperar from './views/Usuario.recuperar';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/novousuario' component={NovoUsuario} />
      <Route exact path='/recuperar'   component={UsuarioRecuperar} />
      <Route exact path='/login'       component={Login} />
    </Router>
  );
}

export default App;
