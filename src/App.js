import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation.js'
import Main from './components/Main.js'
import Climate from './components/Climate.js'
import Scroll from './components/Scroll.js'
import Kawaii from './components/Kawaii.js'
import Demo from './components/Demo.js'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "main" };
  }

  changePage = pageClass => {
    this.setState({ page: pageClass });
  };
  
  render() {
    return (
      <Router>
          <div id="flexcontainer">
          <Navigation/>
          <div id="content" className={ this.state.page }>
            <Switch>
              <Route exact path="/" render={() => <Main changePage={this.changePage} />}/>
              <Route exact path="/climate" render={() => <Climate changePage={this.changePage} />}/>
              <Route exact path="/scroll" render={() => <Scroll changePage={this.changePage} />}/>
              <Route exact path="/kawaii" render={() => <Kawaii changePage={this.changePage} />}/>
              <Route exact path="/demo" render={() => <Demo changePage={this.changePage} />}/>
            </Switch>
          </div>
          <div id="footer"><a href="https://www.laurasirola.com">Made by Laura Sirola</a></div>
          </div>
      </Router>
    );
  }
}

export default App;