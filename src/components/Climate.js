import React, { Component } from 'react'
import Slidebox from './Slidebox.js'
import { motion } from "framer-motion"

class Climate extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("climate");
 }

  render() {
      return (
        <motion.div id="climate"
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
          <Slidebox slide="left" text="Mostly due to human activity, global temperatures have increased by about 1° Celsius in the past century."/>
          <Slidebox slide="right" text="Arctic sea ice and glaciers are melting, sea levels are rising, droughts, forest fires and other natural disasters are getting worse."/>
          <Slidebox slide="left" text="At the same time, we're in the middle of the sixth mass extinction. A million species are in danger of dying out."/>
          <Slidebox slide="right" text="100 companies cause 71% of the carbon dioxide emissions."/>
          <Slidebox slide="left" text="We need climate legislation and corporations being held accountable. NOW."/>
        </motion.div>
      );
    }
  }

export default Climate;