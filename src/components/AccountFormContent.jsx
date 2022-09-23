import React, {useState} from 'react';
import classes from '../styles/AccountFormContent.module.css';
import AppButton from './UI/button/AppButton';
const AccountFormContent = ({accountData, editAccount, ...props}) => {

  const editButton = () => {
    console.log('edit');
    editAccount();
  }
  return (
    <div className = {classes.content}>

      <div className = {classes.accountData}>
        <b>Your login</b>
        <input
        className = {classes.input}
        value = {accountData.user_name}/>
        <b>Your password</b>
        <input
        className = {classes.input}
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
