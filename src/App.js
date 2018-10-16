import React from 'react';
import './App.scss';
import DrumMachine from './components/DrumMachine';
import { Provider } from 'react-redux';
import store from './store';

export default () => (
  <Provider store={store}>
    <DrumMachine />
  </Provider>
);

