// This file describes how we we'll manage each authentication action and get the current user's information
// We will want to check to see if the user is authenticated by verifying the token (if there is one) in local storage
// We will set the header's 'x-auth-token' field to the current token if there is one
// If the user is logged in and they have a valid token, the res.data should be the user's information, and it will be part of the payload
// When the user is registering, it'll turn the form data sent into JSON and POST to /api/users, and return the jwt
// When the user logs in, it'll POST the email and password to /api/auth, and return the jwt

import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';

import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

  
// Register User
export const register =
  ({ accountType, firstName, lastName, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      accountType,
      firstName,
      lastName,
      email,
      password,
    });

    try {
      const res = await axios.post('/api/users', body, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const emailcheck = async ({email}) => {
  console.log(email);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      email,
    });

    try {
      const res = await axios.post('/api/reset', body, config);
      (console.log((res.data.msg)));

      return true;
    } catch (err){
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => (console.log(error.msg)));
      }
    }
}


export const tokencheck = async (token) => {
  if (token.length == 0){
    return 0;
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    token,
  });
  try {
  // sends token to back-end to check if reset process should continue
   const res = await axios.post('/api/reset/tokenCheck', body, config);
   return true;
  } catch (err) {
  // token can be either incorrect or expired for this error to show
    console.log('Invalid token');
  }
}

export const resetpass = async(token,password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    token,
    password
  });

  try {
  await axios.post('/api/reset/passwordReset', body, config);
  return true;
  } catch (err) {
  const errors = err.response.data.errors;

  console.log(errors);
 
 }
}
