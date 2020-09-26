import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './slice';
export const store = configureStore({
  //  now create multiple reducer
  reducer: {
    counter: reducers,
    // user: null,
    // hello: null,
  },
});
