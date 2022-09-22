import React, {useState} from 'react';
import classes from '../styles/TaskSave.module.css';
const TaskSave = ({saveId, saveName, saveDate, ...props}) => {
  //let save = JSON.parse(saves);

  return (
    <div
    className = {classes.content}
    >

      <div className = {classes.nameRow}>
      {saveName}
      </div>
      <div className = {classes.dateRow}>
      {saveDate}
      </div>

    </div>
  );
};

export default TaskSave;
