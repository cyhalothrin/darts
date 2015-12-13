import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DartsApp from './containers/DartsApp';
import darts from './reducers/reducers';
import global from '../css/global.css';

const store = createStore(darts);
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <DartsApp />
  </Provider>,
  rootElement
);
