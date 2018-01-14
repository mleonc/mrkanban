import React, { Component } from 'react';
import LoginView from './Containers/LoginView'

class App extends Component {
  constructor(props){
    super(props);
    this.handler = this.handler.bind(this);

    this.state={
      loginPage:[],
      appPage:[]
    }
  }

  handler() {
    var loginPage = []
    var appPage = []
    appPage.push(<LoginView key='Login' username='troll' parentContext={this}/>);
    this.setState({
      loginPage: loginPage,
      appPage: appPage
    })
  }

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginView key='Login' parentContext={this}/>);
    this.setState({
      loginPage:loginPage
    })
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

export default App;
