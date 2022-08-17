import React from 'react';
import classes from './AppContainer.module.css';

const AppContainer = ({children, ...props}) =>{
  return(
    
    <div {...props} className = {classes.myContainer}>
    {children}
    </div>

  )
}

export default AppContainer;
