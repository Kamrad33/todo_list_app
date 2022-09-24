import React, {useState} from 'react';
import AppButton from './UI/button/AppButton';
import axios from 'axios';
import { useAuth } from './AuthPages/Auth'
import classes from '../styles/AuthFormContent.module.css';

const AuthFormContent = ({formAction, loginAction, registerAction, ...props}) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')

  const closeForm = () => {
    formAction();
  };
  const loginForm = () => {
    loginAction(login, password);
    setLogin('');
    setPassword('');
  };
  const registerForm = () => {
    registerAction();
  };

  return (
    <div className = {classes.content}>
      <div className = {classes.inputs}>
      <b>Login</b>
      <br/>
        <input
        placeholder = 'Your login...'
        className = {classes.input}
        value = {login}
        onChange = {e => setLogin(e.target.value)}/>
      <br/>
      <b>Password</b>
      <br/>
        <input
        placeholder = 'Your password...'
        className = {classes.input}
        value = {password}
        onChange = {e => setPassword(e.target.value)}/>
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
        minWidth = '10vw'
        onClick = {loginForm}>
        Ok
        </AppButton>
      </div>
    </div>
  );
};

export default AuthFormContent;
