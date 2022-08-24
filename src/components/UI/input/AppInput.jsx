import React, {useState, useEffect} from 'react';
import classes from './AppInput.module.css';
const AppInput = ({value, children}) => {
  const [textAreaValue, setTextAreaValue] = useState();
  console.log('child', value);
  useEffect(() => {
    console.log('eff');
    setTextAreaValue(value);
  }, [children])

  return (
      <textarea
      className = {classes.myInput}
      style = {{maxHeight: '30vh', resize:'vertical', width: '100%'}}
      defaultValue = {value}/>
  );
};

export default AppInput;
