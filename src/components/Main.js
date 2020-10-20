import React, { Component } from 'react'
import { GiStarSwirl } from "react-icons/gi";


class Main extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("main");
 }
    render() {
      return (
        <div id="main">
            <p>
              Welcome to my animation playground! It's a collection of various web animation demos, made just for fun and training. Enjoy!
              <br/>
              <span className="icon"><GiStarSwirl/></span>
              <br/><br/>
            </p>
        </div>
      );
    }
  }

export default Main;