import React, { Component } from 'react'
import KawaiiIcon from './KawaiiIcon.js'
import { motion } from "framer-motion"

class Kawaii extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: 0
    };
  }

  setRotation = rotate => {
    this.setState({ rotation: rotate });
  };

  componentDidMount() {
    const { changePage } = this.props;
    changePage("kawaii");
 }
    render() {
      return (
        <div id="kawaii">
          <motion.div
            id="planetwrapper"
            animate={{rotate: this.state.rotation}}
            onClick={() => this.setRotation(this.state.rotation + 180)}
          >
            <KawaiiIcon tag="planet" size={150} mood="happy" color="#A6E191"/>
          </motion.div>
          <motion.div
            whileHover={{rotate: [0, 20, -20, 0]}}
          >
            <KawaiiIcon tag="icecream" size={230} mood="excited" color="#FDA7DC"/>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <KawaiiIcon tag="backpack" size={230} mood="blissful" color="#FFD882"/>
          </motion.div>
        </div>
      );
    }
  }

export default Kawaii;