import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducerLogin from '../Actions/Login';

const login = createStore(reducerLogin, {}, applyMiddleware(thunk, logger));

export default login;