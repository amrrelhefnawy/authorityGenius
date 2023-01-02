import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";


import EmailVerify from './EmailVerify';
import PasswordSuccess from './PasswordSuccess';
import PasswordForm from './PasswordForm';
import './ResetPassword.css'

import { tokencheck } from '../../../../actions/auth';

const ResetPassword = () => {


  //states to show appropiate components
  const [success, setSuccess] = useState(false);
  const [reset, setReset] = useState(false);

  const navigate = useNavigate();


  //extracting token from pathname
  const pathname = useLocation().pathname;
  const index = pathname.indexOf("/reset-password/") + ("/reset-password/".length);
  const token = (pathname.substring(index, index + 64));

  //verifies email using EmailVerify component
  const verifyEmail = (emailVerification) => {
    setSuccess(emailVerification);
  }

  //token checking is performed on render of page
  useEffect(() => {
    const check = async () => {
      if (await tokencheck(token)){
        setReset(true);
      } else {
        navigate("/reset-password/")
      }
    }

    check();
  },[])

  return (
    <>
      {!reset && !success && <EmailVerify verifyEmail={verifyEmail}/>}

      {!reset && success && <PasswordSuccess />}

      {reset && <PasswordForm />}
    </>
  );
};

export default ResetPassword;
