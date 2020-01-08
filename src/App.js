import React, { Component } from 'react';
import About from './components/About';
import Bots from './components/Bots';
import Home from './components/Home';
import NavBar from './components/NavBar';
import TextGenerator from './components/TextGenerator';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles.css';

export default class App extends Component {
  render() {
    return (
      <div>        
          <Router>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/bots' component={Bots} />
              <Route path='/about' component={About} />
              <Route path='/text-generator' component={TextGenerator} />
            </Switch>
          </Router>
      </div>
    )
  }
}

