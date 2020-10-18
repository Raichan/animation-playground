import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import Main from './components/Main'
import Climate from './components/Climate'
import Scroll from './components/Scroll'
import Kawaii from './components/Kawaii'

function App() {
  return (
    <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/climate" component={Climate}/>
          <Route exact path="/scroll" component={Scroll}/>
          <Route exact path="/kawaii" component={Kawaii}/>
        </Switch>
    </Router>
  );
}

export default App;