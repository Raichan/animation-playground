import React, { Component } from 'react'
import { GiWhiteCat, GiHolyOak, GiScrollUnfurled } from "react-icons/gi";
import { Link } from 'react-router-dom'


class Navigation extends Component {
    render() {
      return (
        <div id="navigation">
            <div id="title">
              <Link to="/"><h1>Web Animation Playground</h1></Link>
            </div>
            <ul>
                <li>
                    <Link to="/climate"><GiHolyOak/></Link>
                </li>
                <li>
                    <Link to="/scroll"><GiScrollUnfurled/></Link>
                </li>
                <li>
                    <Link to="/kawaii"><GiWhiteCat/></Link>
                </li>
            </ul>
        </div>
      );
    }
  }

export default Navigation;