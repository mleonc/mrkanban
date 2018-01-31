import React from 'react';
import Login from '../Containers/LoginView'
import Dashboard from '../Containers/DashboardView'
import auth from '../Middleware/auth'
import { Route, Redirect } from 'react-router'

export const Routes = (
	<div className="App">
		<Route path="/dashboard" render={() => (
  		!auth() ? (
    		<Redirect to="/"/>
  		) : (
    		<Dashboard />
  		)
		)}/>
		
		<Route path="/" key="Login" render={() => (
  		auth() ? (
    		<Redirect to="/dashboard"/>
  		) : (
    		<Login />
  		)
		)}/>
  </div>
);