import React, {useState} from 'react';
import AppButton from './UI/button/AppButton';
import classes from '../styles/AuthFormContent.module.css';

const AuthFormContent = ({formAction, loginAction, registerAction, ...props}) => {

  const closeForm = () => {
    formAction();
  }
  const loginForm = () => {
    loginAction();
  }
  const registerForm = () => {
    registerAction();
  }

  return (
    <div className = {classes.content}>
      <div className = {classes.inputs}>
      <b>Login</b>
      <br/>
        <input
        placeholder = 'Your login...'
        className = {classes.input} />
      <br/>
      <b>Password</b>
      <br/>
        <input
        placeholder = 'Your password...'
        className = {classes.input} />
      </div>
      <div className = {classes.buttons}>
        <AppButton
        color = '#69665c'
        fontColor = 'white'
        minWidth = '10vw'
        onClick ={closeForm}>
        Close
        </AppButton>
        <AppButton
        color = '#69665c'
        fontColor = 'white'
        minWidth = '10vw'
        onClick ={registerForm}>
        Register
        </AppButton>
        <AppButton
        color = '#69665c'
        fontColor = 'white'
        minWidth = '10vw'>
        Ok
        </AppButton>
      </div>
    </div>
  );
};

export default AuthFormContent;
