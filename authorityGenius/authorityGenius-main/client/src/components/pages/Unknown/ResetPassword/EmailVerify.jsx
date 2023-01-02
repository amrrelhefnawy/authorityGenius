import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './ResetPassword.css'
import { emailcheck } from '../../../../actions/auth';

const EmailVerify = ({verifyEmail}) => {

    const [email, setEmail] = useState('');


    
    const onChangeEmail = (e) =>
    setEmail(e.target.value );

    const onSubmit = async (e) => {
        e.preventDefault();
        verifyEmail(await emailcheck({ email }));
      };



      return (

<div className="reset_password__container">
      <div className="reset_password__header">
        <h1 className='heading-2'>Forgot Your Password?</h1>
        <p className='body-large break'>Enter your email and we’ll send you a link to reset your password </p>
        <hr className="line" />
      </div>

      <form className='reset_password__form' onSubmit={(e) => onSubmit(e)}>
        <input
              className='reset_password__form-input'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChangeEmail(e)}
              required
            />
        <input type='submit' className='reset_password__form-submit' value='Reset Password' />
      </form>

      <p className='cta body-regular'>
        Want to Sign In?<Link to='/login' className='link-regular'>Click Here</Link>
      </p>

      </div>
      )
}



export default EmailVerify;