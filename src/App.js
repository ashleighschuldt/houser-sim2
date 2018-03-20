import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';
import Wizard from './Components/Wizard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={`/Dashboard`} component={Dashboard}/>
          <Route path={`/wizard/:page`} component={Wizard}/>
          <Route path={`/`} component={Auth}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
