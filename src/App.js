import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PerfilContainer from './containers/PerfilContainer';
import PerfilFormContainer from './containers/PerfilFormContainer';
import UserContainer from './containers/UserContainer';
import UserFormContainer from './containers/UserFormContainer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/perfil" component={PerfilContainer} />
        <Route exact path="/perfilForm" component={PerfilFormContainer} />
        <Route exact path="/user" component={UserContainer} />
        <Route exact path="/userForm" component={UserFormContainer} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
