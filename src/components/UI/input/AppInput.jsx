import React from 'react';
import classes from './AppInput.module.css';
const AppInput = () => {
  return (
    <div className = {classes.myInput}>
    <textarea style = {{maxHeight: '30vh', resize:'vertical', width: '100%'}}>
    </textarea>
    </div>
  );
};

export default AppInput;
