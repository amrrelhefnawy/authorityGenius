// This file acts as the root reducer that allows us to combine all of them from separate files
// The root reducer will be used in store.js where all of the reducers will have access to the store

import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

export default combineReducers({ alert, auth });
