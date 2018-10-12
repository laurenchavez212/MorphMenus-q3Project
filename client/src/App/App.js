import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../components/homepage/Homepage';
import WelcomeAdmin from '../components/admin/welcomeAdmin';
import Menu from '../components/Menu';

class App extends Component {
  
  render() {
    const App = () => <div className="App">
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/admin" component={WelcomeAdmin} /> */}
          {/* <Route path="/menu" component={Menu} /> */}
        </Switch>
      </div>;
    return (
      // <Switch>
        <App />
      // </Switch>
    );
  }
}

export default App;