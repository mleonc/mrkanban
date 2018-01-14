import React, { Component } from 'react';

export default class Form extends Component {
	constructor(props) {
    super(props);

    let { inputs, handlerSubmit, handlerChange, autoEnabled } = this.props;

    this.state = {
      submitted: false,
      enabled: true,
      error: '',
      inputs: inputs,
      handlerSubmit: handlerSubmit,
      handlerChange: handlerChange,
      autoEnabled:autoEnabled,
    };

    inputs.map(function(element, i) {
    	var name = element.name;
    	this.state[name] = element.value;
  	}, this);

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerChange(e) {
  	let { handlerChange } = this.state;
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (handlerChange) {
    	handlerChange(e);
    }
  }

  handlerSubmit(e) {
  	let { handlerSubmit, autoEnabled } = this.state;
    e.preventDefault();
    var disabled = false;
    if (autoEnabled) {
    	disabled=true;
    }
    this.setState({
      submitted: true,
      enabled: disabled,
    })
    if (handlerSubmit) {
    	handlerSubmit(e, this);
    }
  }

  inputText(key, type, value, name, focus) {
  	return <div key={key} className="form-group">
  			<label htmlFor={name}>{name}:</label>
  			<input autoFocus={focus} type={type} id={name} name={name} value={this.state[name]} onChange={this.handlerChange} />
			</div>
  }

  inputButton(key, value, name, focus) {
  	let { enabled } = this.state;
  	return <div key={key} className="form-group">
  			<button className="btn btn-primary" name={name} disabled={ !enabled } >{value}</button>
			</div>
  }

  input(key, type, value, name, focus) {
  	switch (type) {
  		case 'text':
  		case 'password':
  			return this.inputText(key, type, value, name, focus);
  			break;
  		case 'submit':
  			return this.inputButton(key, value, name, focus);
  			break;
  		default:
  			break;
  	}
  	return <div key={key} className="form-group">
  			<label htmlFor={name}>{name}:</label>
  			<input autoFocus={focus} type={type} id={name} name={name} value={this.state[name]} onChange={this.handlerChange} />
			</div>
  }

  render() {
  	let { inputs } = this.state;
  	var focus = true;
  	return (
  		<form name="form" onSubmit={this.handlerSubmit}>
  			<div className="form-group-collection">
			  	{inputs.map(function(element, i){
			  		if (i > 0) {
			  			focus = false;
			  		}
			  		return this.input(i, element.type, element.value, element.name, focus);
					}, this)}
        </div>
    	</form>
    );
  }
}