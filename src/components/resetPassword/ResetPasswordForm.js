import React, { useState } from 'react';
import '../../assets/styles/components/resetPasswordForm.scss';

import { resetUserPassword } from '../../redux/actions/actions';
import { InputElement, ButtonElememnt } from './customInput/customInputs';

const RestPasswordForm = ({
  checkOnchange, callApiThunk, displayMessage,
}) => {
  const [{ email, message, isvalid }, setEmail] = useState({
    email: '',
    isvalid: '',
    message: '',
  });
  const validationMsg = 'Email must be a valid address, e.g. me@mydomain.com';
  const inputChange = (e) => {
    checkOnchange(e, validationMsg, setEmail);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
    };
    await callApiThunk('post', '/reset_pw/user', resetUserPassword, body);
    setEmail((prevEmail) => ({
      ...prevEmail,
      isvalid: '',
      message: '',
      email: '',

    }));
  };

  return (

    <form className="resetform" data-testid="reset-form">
      <span className="validation-message" id="validation-message">{(message === '') ? displayMessage : ''}</span>
      {isvalid ? <span className={isvalid} id="validate">{message}</span> : ''}
      <InputElement
        type="email"
        name="email"
        id="user-email"
        value={email}
        palceholder="Type your email"
        onchenge={inputChange}

      />

      <ButtonElememnt
        id="submitBtn"
        onclick={onSubmit}
        value="Submit"
      />
    </form>

  );
};

export default RestPasswordForm;
