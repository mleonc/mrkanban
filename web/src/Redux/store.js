import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import LoginReducer from './LoginReducer'

const reducer = createStore(LoginReducer, {}, applyMiddleware(thunk, logger));

export default reducer;