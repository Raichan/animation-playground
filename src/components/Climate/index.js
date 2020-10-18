import React, { Component } from 'react'

class Climate extends Component {
  componentDidMount() {
    const { changePage } = this.props;
    changePage("climate");
 }

  render() {
      return (
        <div id="climate">
          <p>Mostly due to human activity, global temperatures have increased by about 1° Celsius in the past century.</p>
          <p>Arctic sea ice and glaciers are melting, sea levels are rising, droughts, forest fires and other natural disasters are getting worse.</p>
          <p>At the same time, we're in the middle of the sixth mass extinction. A million species are in danger of dying out.</p>
          <p>100 companies cause 71% of the carbon dioxide emissions.</p>
          <p>We need climate legislation and corporations being held accountable. NOW.</p>
        </div>
      );
    }
  }

export default Climate;