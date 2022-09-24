import React, {useState} from 'react';
import AppButton from './UI/button/AppButton';
import classes from '../styles/AuthFormContent.module.css';

const RegisterFormContent = ({formAction, loginAction, register, ...props}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const closeForm = () => {
    formAction();
  }
  const registerButton = () => {
    register(login, password);
    setLogin('');
    setPassword('');
  }

  return (
    <div className = {classes.content}>
      <div className = {classes.inputs}>
      <b>Login</b>
      <br/>
        <input
        placeholder = 'Insert login...'
        className = {classes.input}
        value = {login}
        onChange = {e => setLogin(e.target.value)}
        />
      <br/>
      <b>Password</b>
      <br/>
        <input
        placeholder = 'Insert password...'
        className = {classes.input}
        value = {password}
        onChange = {e => setPassword(e.target.value)}  />
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
        onClick = {registerButton}>
        Register
        </AppButton>
      </div>
    </div>
  );
};

export default RegisterFormContent;
