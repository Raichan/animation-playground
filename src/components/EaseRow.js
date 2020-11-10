import React, { Component } from 'react'
import { motion } from "framer-motion"

class EaseRow extends Component {

    render() {
        const svgVariants = {
            start: { opacity: 0 },
            grow: { 
              opacity: 1,
              transition: { duration : 1 }
            },
        }
          
        const pathVariants = {
            start: {
              opacity: 0,
              pathLength: 0,
            },
            grow: {
              opacity: 1,
              pathLength: 1,
              transition: { 
                duration: 5,
                ease: this.props.ease,
            }
            }
        };

      return (
        <div className="easeRow">
            <div className="easeName">{this.props.ease}</div>
            <div>
                <motion.svg
                    className="line"
                    viewBox="0 0 500 20"
                    variants={svgVariants}
                    initial="start"
                    animate="grow"
                    >
                    <motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="white"
                        d="M 0 15, L 500 15"
                        variants={pathVariants}
                    />
                </motion.svg>
            </div>
        </div>
      );
    }
  }

export default EaseRow;