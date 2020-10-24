import React from 'react'
import { motion } from "framer-motion";

const Six = () => {
    const container = {
        show: {
          background: "#ff00b1",
          transition: {
            staggerChildren: 0.5
          }
        },
        hide: {
          background: "#0D00FF"
        }
      };
  
    const box = {
      show: {
        rotate: 90,
        opacity: 1
      },
      hide: {
        rotate: 0,
        opacity: 0.7
      }
    };
  
    const [active, setActive] = React.useState(false);
  
    return (
      <motion.div
        variants={container}
        animate={active ? "show" : "hide"}
        onClick={() => setActive(!active)}
        className="container"
      >
        {[0, 1, 2].map(value => (
          <motion.div key={value} className="box" variants={box}/>
        ))}
      </motion.div>
      
      
    );
  };

export default Six;