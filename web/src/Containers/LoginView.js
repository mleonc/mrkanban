import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../Redux/LoginReducer';
import { Login as LoginActions }  from '../Actions/Login'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      disabled:false,
      focus:true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      password: '',
      disabled:true,
    });
  }

  waiting() {
    console.log('waiting');
  }

  success() {
    console.log('success');
  }

  error(error) {
    console.log('error');
    let { disabled } = this.state;
    if ( disabled ) {
      this.setState({
        password: '',
        disabled:false,
      });
    }
    this.password.focus(); 
  }

  componentDidUpdate() {
    let { state } = this.props;
    switch (state.type) {
      case LoginActions._PENDING:
        return this.waiting();
      case LoginActions._SUCCESS:
        return this.success();
      case LoginActions._ERROR:
        return this.error(state.error);
      default:
        return;
    }
  }

  render() {
    let { email, password, disabled } = this.state;
    return (
      <form name="loginForm" onSubmit={this.handleSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input autoFocus type="text" id="email" name="email" onChange={this.handleChange} value={email}/>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input ref={(password) => { this.password = password; }} type="password" name="password" onChange={this.handleChange} value={password}/>
          </div>
        </div>

        <input type="submit" value="Login" disabled={disabled}/>

        <div className="message">
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state:state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);