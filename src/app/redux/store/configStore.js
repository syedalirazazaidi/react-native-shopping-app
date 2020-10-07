// import {configureStore} from '@reduxjs/toolkit';
// import {reducers} from './slice';
// export const store = configureStore({
//   reducer: {
//     counter: reducers,
//   },
// });
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);
const store = configureStore({
  reducer: rootReducer,
});
