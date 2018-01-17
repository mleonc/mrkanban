import React, { Component } from 'react';
import Login from './Containers/LoginView'
import Dashboard from './Containers/DashboardView'
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      loginPage:[],
      appPage:[]
    }
  }

  goApp() {
    console.log('logged');
    var loginPage = []
    var appPage = []
    appPage.push(<Dashboard key='Dashboard'/>);
    this.setState({
      loginPage: loginPage,
      appPage: appPage
    })
  }

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Login key='Login' />);
    this.setState({
      loginPage:loginPage
    })
  }

  componentWillReceiveProps(props) {
    if (props.state.token !== false) {
      this.goApp();
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.appPage}
      </div>     
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
