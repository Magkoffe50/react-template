import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import history from './utils/history';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import Web3Provider from './containers/Web3Provider';

const store = configureStore();
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Web3Provider>
        <App />
      </Web3Provider>
    </ConnectedRouter>
  </Provider>,
  root,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
