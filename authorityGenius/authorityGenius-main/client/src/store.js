// Redux-thunk allows our action creators to return an object OR return a function
// By allowing us to return a function instead of an object, we can perform asynchronous tasks before dispatching the action
// The generated store will be imported in the App.js file with all the reducers, initial state, and any middleware we apply

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
