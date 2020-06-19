import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import  Modulo  from './containers/Modulo';
import ModuleContainer from './containers/ModulContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Modulo} />
        <Route exact path='/create-module' component={ModuleContainer} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
