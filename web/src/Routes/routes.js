import React from 'react';
import Login from '../Containers/LoginView'
import Dashboard from '../Containers/DashboardView'
import auth from '../Middleware/auth'
import { Route, Redirect, Switch } from 'react-router'

export const Routes = (
	<div className="App">
    <Switch>
  		<Route path="/dashboard" render={() => (
    		!auth() ? (
      		<Redirect to="/"/>
    		) : (
      		<Dashboard />
    		)
  		)}/>
		
  		<Route path="/" key="Login" render={() => (
    		!auth() ? (
          <Login />
    		) : 
          window.location.pathname === '/' ? (
            <Redirect to="/dashboard" />
          ) : (
            <Redirect to={window.location.pathname} />
          )
  		)}/>
    </Switch>
  </div>
);