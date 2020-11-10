import React, { Component } from "react";
import { GiStarSwirl } from "react-icons/gi";
import { motion } from "framer-motion";

class Main extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("main");
  }
  render() {
    return (
      <div id="main">
        <p>
          Welcome to my animation playground! It's a collection of various web
          animation demos, made just for fun and training. Enjoy!
          <br />
          <motion.span className="icon">
            <GiStarSwirl />
          </motion.span>
          <br />
          <br />
        </p>
      </div>
    );
  }
}

export default Main;
