import React, { Component } from "react";
import { motion } from "framer-motion";
import Textbox from "./Textbox.js";

const slideLeft = {
  opacity: 0,
  x: -(window.innerWidth / 2),
};

const slideRight = {
  opacity: 0,
  x: window.innerWidth / 2,
};

class Slidebox extends Component {
  render() {
    return (
      <motion.div
        className="slidebox"
        variants={{
          hide: this.props.slide === "right" ? slideRight : slideLeft,
          show: {
            opacity: 1,
            x: 0,
            transition: {
              ease: "easeOut",
              duration: 3,
            },
          },
        }}
      >
        <Textbox
          icon={this.props.icon}
          textSide={this.props.slide}
          text={this.props.text}
        />
      </motion.div>
    );
  }
}

export default Slidebox;
