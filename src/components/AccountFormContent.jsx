import React, {useState, useEffect} from 'react';
import classes from '../styles/AccountFormContent.module.css';
import AppButton from './UI/button/AppButton';
const AccountFormContent = ({accountData, editAccount, ...props}) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  useEffect( () => {
    console.log('eff');
    setLogin(accountData.user_name);
    setPassword(accountData.user_password);
  }, [accountData]);
  const editButton = () => {
    //console.log('adasd', accountData.user_name, login);
  //  console.log('edit', accountData.id, login, password);
   editAccount(accountData.id, login, password);
  }

  return (
    <div className = {classes.content}>

      <div className = {classes.accountData}>
        <b>Your login</b>
        <input
        className = {classes.input}
        value = {login}
        onChange = {e => setLogin(e.target.value)}/>
        <b>Your password</b>
        <input
        className = {classes.input}
        value = {password}
        onChange = {e => setPassword(e.target.value)}
        placeholder = 'paadsfadsfssword'
        />
      </div>

      <div className = {classes.buttons}>
        <AppButton
        color = '#69665c'
        fontColor = 'white'
        minWidth = '10vw'
        onClick ={editButton}>Edit</AppButton>
      </div>

    </div>
  );
};

export default AccountFormContent;
