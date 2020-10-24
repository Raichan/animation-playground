import React, { Component } from 'react'
import Scrollbox from './Scrollbox.js'
import Textbox from './Textbox.js'

class Scroll extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("scroll");
 }
 render() {
      return (
        <div id="scroll">
            <Textbox text="This is a long scroll of text..."/>
            <Textbox text="...showing bits one by one..."/>
            <Textbox text="...as you scroll down the page..."/>
            <Textbox text="...in a really nice-looking way!"/>
        </div>
      );
 }
  }

export default Scroll;