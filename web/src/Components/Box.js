import React, { Component } from 'react';
import '../Assets/css/box.css';

class Box extends Component {

  render() {
    let { left, wait, color, ang } = this.props;
    let style = {
      left:left,
      animation:"movement "+wait+"s ease-in-out infinite",
      background: "linear-gradient("+ang+"deg, white, "+color+")",
    }
    return (
      <div className="box" style={style}>
      </div>
    );
  }
}

export default Box;