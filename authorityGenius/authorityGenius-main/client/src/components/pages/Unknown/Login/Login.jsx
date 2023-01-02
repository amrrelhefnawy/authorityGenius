// Upon user submission, dispatch the login action
// Actions we want to use in this component are passed as props
// Redirects to Dashboard once authenticated

import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../../actions/auth';

import PersonIcon from '@mui/icons-material/Person';
import './Login.css'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div className="login__container">
      <div className="login__header">
        <h1 className='heading-1'>Find an <span className='highlight'>Expert</span></h1>
        <p className='heading-3'>or</p>
        <h1 className='heading-1'>Be an <span className='highlight'>Expert</span></h1>
        <p className='heading-6 cta'>
          <PersonIcon /> Sign Into Your Account
        </p>
      </div>

      <hr/>

      <form className='login__form' onSubmit={(e) => onSubmit(e)}>
        <input
              className='login__form-input'
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
        <input
            className='login__form-input'
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        <input type='submit' className='login__form-submit' value='Log In' />
      </form>

      <p className='cta body-regular'>
        Don't have an account? <Link to='/register' className='link-regular'>Sign Up</Link>
      </p>

    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
