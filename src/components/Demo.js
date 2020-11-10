import React, { Component } from "react";
import DemoContent from "./DemoContent.js";

class Demo extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("demo");
  }
  render() {
    return (
      <div id="demo">
        <DemoContent />
      </div>
    );
  }
}

export default Demo;
