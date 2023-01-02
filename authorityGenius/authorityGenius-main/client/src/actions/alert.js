// This file describes how we want the reducer to receive the action of setting an alert on the page.
// This file will accept the message that should be displayed to the user, the type of alert that should be displayed (managed in the CSS)
// A unique id is generated to be used as the 'key' attribute for when multiple alerts are being mapped to the user
// Actions are dispatched with a type and a payload, which will dictate how the reducer should act
import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 3000) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id,
    },
  });

  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT, payload: id });
  }, timeout);
};
