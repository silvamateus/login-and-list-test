import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './app';

const Index = () => {
  return <App />;
};

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('index')
);
