import React, { Component } from 'react'
import { motion } from "framer-motion"

class Textbox extends Component {
  render() {
      return (
        <motion.p id="scroll"
            variants={{
                hide: {
                    opacity: 0
                },
                show: {
                    opacity: 1
                }
            }}
        >
            {this.props.text}
        </motion.p>
      );
    }
  }

export default Textbox;