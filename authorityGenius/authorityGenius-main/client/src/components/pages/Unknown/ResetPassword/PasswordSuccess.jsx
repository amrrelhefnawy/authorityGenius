import React from 'react';
import {Link} from 'react-router-dom';



import './ResetPassword.css'


const PasswordSuccess = () => {
    return (
<div className='reset__password__success-container'>
          <h1 className='heading-4 reset__password__success-msg'>All set! We’ve sent you a link to reset your password</h1>
          <p className='cta body-small'>
          Want to Sign In?<Link to='/login' className='link-regular'>Click Here</Link>
          </p>
        </div>
    )
}

export default PasswordSuccess;