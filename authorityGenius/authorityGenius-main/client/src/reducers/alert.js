// This file is the alertReducer that will determine how the state should be changed based on the action dispatched
// It will either add alerts to the state or remove them

import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function alertReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
