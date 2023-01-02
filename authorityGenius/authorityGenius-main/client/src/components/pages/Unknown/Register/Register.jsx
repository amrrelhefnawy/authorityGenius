// Upon user submission, it will double-check the intended password before dispatching the register action
// Actions we want to use in this component are passed as props
// Redirects to Dashboard once authenticated

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { setAlert } from '../../../../actions/alert';
import { register } from '../../../../actions/auth';
import PropTypes from 'prop-types';

import PersonIcon from '@mui/icons-material/Person';

import './Register.css'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    accountType: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { accountType, firstName, lastName, email, password, passwordConfirm } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      // Sends msg and alertType
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ accountType, firstName, lastName, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div className='register__container'>
      <div className="register__header">
        <h1 className='heading-1'>Sign Up Today!</h1>
        <p className='heading-6 cta'>
          <PersonIcon/> Create Your Account
        </p>
      </div>

      <form className='register__form' onSubmit={(e) => onSubmit(e)}>
          <div className="register__form-accounttype">
            <div>
              <input type="radio" id="publisher" name="accountType" value="Publisher" onClick={(e) => onChange(e)}/>
              <label htmlFor="publisher" >Publisher</label>
            </div>
            <div>
              <input type="radio" id="reviewer" name="accountType" value="Reviewer" onClick={(e) => onChange(e)}/>
              <label htmlFor="reviewer" >Reviewer</label>
            </div>
          </div>
          <input
            className='register__form-input'
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={(e) => onChange(e)}
          />
          <input
            className='register__form-input'
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={(e) => onChange(e)}
          />
          <input
            className='register__form-input'
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
          <input
            className='register__form-input'
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
          <input
            className='register__form-input'
            type='password'
            placeholder='Confirm Password'
            name='passwordConfirm'
            value={passwordConfirm}
            onChange={(e) => onChange(e)}
          />
        <input type='submit' className='register__form-submit' value='Register' />
      </form>
      <p className='cta body-regular'>
        Already have an account? <Link to='/login' className='link-regular'>Sign In</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);

