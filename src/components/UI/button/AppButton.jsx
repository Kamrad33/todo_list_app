import React, {useState} from 'react';
import classes from './AppButton.module.css';

const AppButton = ({size, color, fontColor, minWidth, maxWidth, children, ...props}) =>{
  return (
    <button {...props}
    className={classes.myButton}
    style = {{
      fontSize: size,
      backgroundColor: color,
      color: fontColor,
      minWidth: minWidth,
      maxWidth: maxWidth}}>
    {children}
    </button>
  );
}

export default AppButton;
