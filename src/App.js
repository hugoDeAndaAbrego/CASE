import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './containers/Menu';
import NavTitulo from './components/navTitulo';
import MenuForm from './components/MenuForm';

import './App.css';

function App() {
  return (
    <BrowserRouter>
     <NavTitulo />
      <Switch>

        <Route exact path="/" component={Menu} />
        <Route exact path="/nuevoMenu" component={MenuForm} />


      </Switch>
    </BrowserRouter> 


  );
}

export default App;
