import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import  Modulo  from './containers/Modulo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Modulo} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
