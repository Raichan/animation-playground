import React, { Component } from 'react'

class Textbox extends Component {
  render() {
      return (
        <p>
            {this.props.text}
        </p>
      );
    }
  }

export default Textbox;