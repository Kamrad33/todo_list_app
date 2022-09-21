import React, {useState} from 'react';
import classes from '../styles/TaskSave.module.css';
const TaskSave = ({saveName, saveDate, ...props}) => {
  //let save = JSON.parse(saves);

  return (
    <div className = {classes.content}>
      {saveName}
      <div className = {classes.nameRow}>
      {saveDate}
      </div>

    </div>
  );
};

export default TaskSave;
