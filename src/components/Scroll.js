import React, { Component } from 'react'
//import Scrollbox from './Scrollbox.js'
import Textbox from './Textbox.js'

class Scroll extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("scroll");
 }
 render() {
      return (
        <div id="scroll">
            <Textbox text="Still work in progress..."/>
            <Textbox text="...but when it's done..."/>
            <Textbox text="...the boxes will show up..."/>
            <Textbox text="...as you scroll down!"/>
        </div>
      );
 }
  }

export default Scroll;