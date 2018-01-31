import React, { Component } from 'react';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show:null,
    };
  }

  render() {
    return (
      <div>
        <h2>Logged</h2>
      </div>
    )
  }
}