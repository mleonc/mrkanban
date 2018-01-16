import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducer from './Redux/store';

ReactDOM.render(
	<Provider store={reducer}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
