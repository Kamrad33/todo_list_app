import React from 'react';
import classes from './AppHeader.module.css';

const AppHeader = ({children, ...props}) => {
  return(
    
    <div {...props} className = {classes.myHeader}>
    {children}
    </div>

  )
};

export default AppHeader;
