import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Perfil from './containers/Perfil';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Perfil} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
