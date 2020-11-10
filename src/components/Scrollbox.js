import React, { Component } from "react";
import { motion } from "framer-motion";
import Textbox from "./Textbox.js";

class Scrollbox extends Component {
  render() {
    return (
      <motion.div
        variants={{
          show: { opacity: 1 },
          hide: { opacity: 0 },
        }}
      >
        <Textbox text={this.props.text} />
      </motion.div>
    );
  }
}

export default Scrollbox;
