import React, { Component } from 'react'
import { GiCow, GiFarmTractor, GiEcology } from "react-icons/gi";

class Textbox extends Component {
  components = {
    cow: GiCow,
    tractor: GiFarmTractor,
    ecology: GiEcology
};
  render() {
    const TagName = this.components[this.props.icon || GiCow];
    let tag;
    if (this.props.textSide !== undefined) {
      tag = <div className="xxIcon">
          <TagName/>
      </div>;
    }
    else {
      tag = "";
    }

    let textclass = "textbox";
    if(this.props.textSide === "left"){
      textclass += " slideLeft";
    }
      return (
        <div className={textclass}>
            {tag}
            <div>{this.props.text}</div>
        </div>
      );
    }
  }

export default Textbox;