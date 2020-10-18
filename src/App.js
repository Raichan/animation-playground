import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import Main from './components/Main'
import Climate from './components/Climate'
import Scroll from './components/Scroll'
import Kawaii from './components/Kawaii'

import './App.css';

function App() {
  return (
    <Router>
        <div id="flexcontainer">
        <Navigation/>
        <div id="content">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/climate" component={Climate}/>
            <Route exact path="/scroll" component={Scroll}/>
            <Route exact path="/kawaii" component={Kawaii}/>
          </Switch>
        </div>
        <div id="footer"><a href="https://www.laurasirola.com">Made by Laura Sirola</a></div>
        </div>
    </Router>
  );
}

export default App;