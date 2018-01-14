import React, { Component } from 'react';
import { Login, login } from '../Actions/Login';
import { connect } from 'react-redux';
import Form from '../Components/form'

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
      enabled: true,
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e, form) {
    e.preventDefault();
    this.setState({
      form:form,
    });
    let { username, password } = this.state;

    if (username && password) {
      return this.props.login(username, password);
    }
  }

  waiting() {
    alert('1');
  }

  success() {
    this.props.parentContext.handler();
  }

  error(error) {
    let { form } = this.state;
    let { enabled } = form.state;
    if (!enabled) {
      form.setState({
        enabled:true,
        password: '',
      })
      this.setState({
        password: '',
        error:error.message
      });
    }
  }

  componentDidUpdate() {
    let { state } = this.props;
    switch (state.status) {
      case Login._PENDING:
        return this.waiting();
      case Login._SUCCESS:
        return this.success();
      case Login._ERROR:
        return this.error(state.error);
      default:
        return;
    }
  }

  render() {
    let { username, password, submitted, enabled, error } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <Form inputs={[
          {type:'text',name:'username',value:''},
          {type:'password',name:'password',value:''},
          {type:'submit', name:'login', value:'Login'}
        ]} handlerChange={this.handleChange} handlerSubmit={this.handleSubmit} autoEnable='true'/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
