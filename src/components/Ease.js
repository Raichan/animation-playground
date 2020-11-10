import React, { Component } from "react";
import { motion } from "framer-motion";
import EaseRow from "./EaseRow.js";

class Ease extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("ease");
  }

  render() {
    return (
      <motion.div id="ease" initial="start" animate="grow">
        <EaseRow ease="linear" />
        <EaseRow ease="easeIn" />
        <EaseRow ease="easeOut" />
        <EaseRow ease="easeInOut" />
        <EaseRow ease="circIn" />
        <EaseRow ease="circOut" />
        <EaseRow ease="circInOut" />
        <EaseRow ease="backIn" />
        <EaseRow ease="backOut" />
        <EaseRow ease="backInOut" />
        <EaseRow ease="anticipate" />
      </motion.div>
    );
  }
}

export default Ease;
