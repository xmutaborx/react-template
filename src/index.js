import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import './index.scss';
import App from './components/App/App.jsx';
import {counterSlice} from './store/slices';

const reducer = {
  counter: counterSlice.reducer,
  // ...more reducers
};

const store = configureStore({reducer});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));