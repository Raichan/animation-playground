import React, { Component } from "react";
import Slidebox from "./Slidebox.js";
import { motion } from "framer-motion";

class Climate extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("climate");
  }

  render() {
    return (
      <motion.div
        id="climate"
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
              duration: 3,
              staggerChildren: 2,
            },
          },
        }}
      >
        <Slidebox
          slide="left"
          icon="tractor"
          text="European Parliament accepted the Common Agricultural Policy. 387 billion euros for the next 7 years, over a third of the EU budget."
        />
        <Slidebox
          slide="right"
          icon="cow"
          text="This CAP benefits factory farming and other harmful practices. It's not in line with the EU Green Deal or the Paris Agreement."
        />
        <Slidebox
          slide="left"
          icon="ecology"
          text="EU is abandoning our climate goals and our future in favour of the agricultural lobby. The European Commission must fix this."
        />
        <motion.div
          variants={{
            hide: {
              opacity: 0,
            },
            show: {
              opacity: 1,
            },
          }}
        >
          <motion.div
            className="stackText"
            variants={{
              hide: {
                opacity: 0,
              },
              show: {
                opacity: [1, 0, 1],
                transition: {
                  duration: 3,
                  ease: "easeOut",
                },
              },
            }}
          >
            #WithdrawTheCap
          </motion.div>
          <motion.div
            className="stackText burnText"
            variants={{
              hide: {
                opacity: 0,
              },
              show: {
                opacity: [0, 1, 0],
                transition: {
                  duration: 4,
                  ease: "easeOut",
                },
              },
            }}
          >
            #WithdrawTheCap
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
}

export default Climate;
