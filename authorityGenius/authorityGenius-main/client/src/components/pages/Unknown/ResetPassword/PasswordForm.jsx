import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";

import './ResetPassword.css'

import { resetpass } from '../../../../actions/auth';

const PasswordForm = () => {

    const navigate = useNavigate();



    const [formData, setFormData] = useState({
        password: '',
        passwordConfirm: ''
      });
    
      
      //states
      const { password, passwordConfirm} = formData;

        //extracting token from pathname
  const pathname = useLocation().pathname;
  const index = pathname.indexOf("/reset-password/") + ("/reset-password/".length);
  const token = (pathname.substring(index, index + 64));

    const onChangePassword = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmitPassword = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      console.log('Passwords do not match');
    } else {
      if (await resetpass(token,password)){
        navigate("/login");
      } else {

      }
    }
  }

return (
<div className="reset_password__container">
      <div className="reset_password__header">
        <h1 className='heading-2'>Reset Your Password</h1>
        <p className='body-large break'>Your new password must: </p>
        <ul className='body-small'>
          <li>Be at least 8 characters long</li>
          <li>Contain one uppercase and one lowercase letter</li>
          <li>Contain at least one number</li>
        </ul>
        <hr className="line" />
      </div>

      <form className='reset_password__form' onSubmit={(e) => onSubmitPassword(e)}>
        <input
              className='reset_password__form-input'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChangePassword(e)}
              required
            />
                    <input
              className='reset_password__form-input'
              type='password'
              placeholder='Password'
              name='passwordConfirm'
              value={passwordConfirm}
              onChange={(e) => onChangePassword(e)}
              required
            />
        <input type='submit' className='reset_password__form-submit' value='Reset Password' />
      </form>



      </div>
)
}

export default PasswordForm;