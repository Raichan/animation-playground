import React, { Component } from 'react'
import KawaiiIcon from './KawaiiIcon.js'

class Kawaii extends Component {
  constructor(props) {
    super(props);
    this.state = {icons: [
      {
        id: 1,
        tag: "planet",
        size: 150,
        mood: "happy",
        color: "#A6E191"
      },
      {
        id: 2,
        tag: "icecream",
        size: 230,
        mood: "excited",
        color: "#FDA7DC"
      },
      {
        id: 3,
        tag: "backpack",
        size: 230,
        mood: "blissful",
        color: "#FFD882"
      },
    ]};
  }

  componentDidMount() {
    const { changePage } = this.props;
    changePage("kawaii");
 }
    render() {
      return (
        <div id="kawaii">
              {this.state.icons.map(icon => (
                <KawaiiIcon key={icon.id} tag={icon.tag} size={icon.size} mood={icon.mood} color={icon.color}/>
              ))}
        </div>
      );
    }
  }

export default Kawaii;