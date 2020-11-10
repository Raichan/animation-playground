import React, { Component } from "react";
import { motion } from "framer-motion";
import Scrollbox from "./Scrollbox.js";
//import Textbox from './Textbox.js'

class Scroll extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("scroll");
  }
  render() {
    return (
      <motion.div
        id="scroll"
        initial="hide"
        animate="show"
        variants={{
          hide: {
            opacity: 0,
          },
          show: {
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: 2,
              staggerChildren: 1,
            },
          },
        }}
      >
        <Scrollbox text="Still work in progress..." />
        <Scrollbox text="...but when it's done..." />
        <Scrollbox text="...the boxes will show up..." />
        <Scrollbox text="...as you scroll down!" />
      </motion.div>
    );
  }
}

export default Scroll;
