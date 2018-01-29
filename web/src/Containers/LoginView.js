import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../Redux/LoginReducer';
import { Login as LoginActions }  from '../Actions/Login'
import '../Assets/css/style.css';
import Box  from '../Components/Box'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      disabled:true,
      focus:true,
      errorText:'',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (this.state.email && this.state.password) {
      this.setState({
        disabled:false,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      password: '',
    });
  }

  waiting() {
    console.log('waiting');
  }

  success() {
    console.log('success');
  }

  error(error) {
    let { disabled } = this.state;
    if ( disabled === false ) {
      this.setState({
        password: '',
        errorText: error,
        disabled: true,
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
        state.type = null;
        return this.error(state.error);
      default:
        return;
    }
  }

  render() {
    let { email, password, disabled, errorText } = this.state;
    let position = window.innerWidth / 4;
    return (
      <div className="background">
        <Box left={position*0+110} wait='5'  color='#9B2335' ang='45' />
        <Box left={position*1+110} wait='10' color='#FF7913' ang='-45' />
        <Box left={position*2+110} wait='13' color='#0095C6' ang='135' />
        <Box left={position*3+110} wait='8'  color='#BFD58E' ang='-135' />
        <img src="http://localhost.mrkanban/assets/images/background.png" alt="background" />
        <div className="login-box">
          <img className="logo" src="http://localhost.mrkanban/assets/images/mrkanban.png" alt="mrKanban" />
          <form name="loginForm" onSubmit={this.handleSubmit}>
            <div className="form-group-collection">
              <div className="form-group">
                <input className="input" autoFocus type="text" id="email" name="email" onChange={this.handleChange} value={email} required />
                <label htmlFor="email">Correo electrónico</label>
              </div>
              <div className="form-group">
                <input className="input" ref={(password) => { this.password = password; }} type="password" id="password" name="password" onChange={this.handleChange} value={password} required />
                <label htmlFor="password">Contraseña</label>
              </div>
              <div className="form-submit">
                <a href='' className="reminder">¿Has olvidado tu contraseña?</a>
                <input type="submit" value="Acceder" disabled={disabled}/>
              </div>
            </div>
            { errorText ? <span className="error">{errorText}</span> : ''}
          </form>
        </div>
      </div>
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