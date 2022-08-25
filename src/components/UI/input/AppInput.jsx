import React, {useState, useEffect} from 'react';
import classes from './AppInput.module.css';

const AppInput = (props) => {

  return (
      <textarea className = {classes.myInput} {...props}/>
  );
};

export default AppInput;
