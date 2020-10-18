import React, { Component } from 'react'

class Scroll extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("scroll");
 }

  render() {
      return (
        <div id="scroll">
            <p>This is placeholder text.</p>
            <p>When this demo is done...</p>
            <p>...these bits of text should appear...</p>
            <p>...one after another.</p>
        </div>
      );
    }
  }

export default Scroll;