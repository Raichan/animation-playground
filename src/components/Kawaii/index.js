import React, { Component } from 'react'
import { Planet, IceCream, Backpack } from 'react-kawaii'

class Kawaii extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("kawaii");
 }
    render() {
      return (
        <div id="kawaii">
              <Planet size={150} mood="happy" color="#A6E191" />
              <IceCream size={230} mood="excited" color="#FDA7DC" />
              <Backpack size={230} mood="blissful" color="#FFD882" />
        </div>
      );
    }
  }

export default Kawaii;