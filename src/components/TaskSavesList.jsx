import React, {useState} from 'react';
import TaskSave from './TaskSave';
import AppButton from './UI/button/AppButton';
import classes from '../styles/TaskSave.module.css';

const TaskSavesList = ({saves, formAction, loadAction, ...props}) => {

  const closeForm = () =>{
    console.log('close form');
    formAction();
  }
  const loadSave = (json) => {
    console.log('load save', json);
    loadAction(json);

  }

  return (
    <div className = {classes.listContent}>
      <div className = {classes.list}>
        {saves.map(save => <div
          key ={save.id}
          onClick ={() => loadSave(save.save_json)}>

          <TaskSave
          saveId = {save.id}
          saveName = {save.save_name}
          saveDate ={save.save_date}
          />
        </div>)}
      </div>

      <div className = {classes.closeBtn}>

      <AppButton
        color = '#69665c'
        fontColor = 'white'
        minWidth = '10vw'
        onClick = {closeForm}>
      Close
      </AppButton>

      </div>
    </div>
  );
};

export default TaskSavesList;
