import React, { Component } from 'react'
import { motion } from "framer-motion"
import Textbox from './Textbox.js'

class Scroll extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("scroll");
 }

  render() {
      return (
        <motion.div id="scroll"
          initial="hide"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 1
              }
            }
          }}
        >
            <Textbox text="This is placeholder text."/>
            <Textbox text="When this demo is done..."/>
            <Textbox text="...these bits of text should appear..."/>
            <Textbox text="...one after another."/>
        </motion.div>
      );
    }
  }

export default Scroll;