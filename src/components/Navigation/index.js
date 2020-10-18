import React, { Component } from 'react'
import { GiBlackCat, GiHolyOak, GiScrollUnfurled } from "react-icons/gi";
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
      return (
        <div>
            <Link to="/"><h2>Web Animation Playground</h2></Link>
            <h4>By Laura Sirola</h4>
            <ul>
                <li>
                    <Link to="/climate"><GiHolyOak/></Link>
                </li>
                <li>
                    <Link to="/scroll"><GiScrollUnfurled/></Link>
                </li>
                <li>
                    <Link to="/kawaii"><GiBlackCat/></Link>
                </li>
            </ul>
        </div>
      );
    }
  }

export default Navigation;