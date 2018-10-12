import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App/App.css';

import Welcome from './components/admin/welcomeAdmin'
import Homepage from './components/homepage/Homepage'
import Menu from './components/Menu'




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route exact path="/" component={Homepage} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));