import React, { useEffect, useAnimation } from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import Textbox from './Textbox.js'

function Scrollbox() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        rootMargin: '-100px 0px',
    });

    useEffect(() => {
        if (inView) {
            controls.start("show");
    }
    }, [controls, inView]);

      return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hide"
            variants={{
                show: { opacity: 1},
                hide: { opacity: 0}
            }}
        >
            <Textbox text={this.props.text}/>
        </motion.div>
      );
  }

  export default Scrollbox;