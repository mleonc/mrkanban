import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes/routes'

class App extends Component {
  constructor(props){
    super(props);
   
    this.state={
      auth:localStorage.getItem('auth'),
    }
  }

  componentWillReceiveProps(props) {
    if (props.state.token !== false) {
      this.setState({
        auth:props.state.token,
      });
    }
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={ history }>
        { Routes }
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state:state
  };
}

App = connect(mapStateToProps)(App);

export default App;
