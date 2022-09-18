import React, {useState, useEffect} from 'react';
import TaskItemForm from './TaskItemForm';
import TaskTag from './TaskTag';
import AppInput from './UI/input/AppInput';
import AppButton from './UI/button/AppButton';

import '../styles/TaskItem.css';

const TaskItem = ({task, edit, drop, done, ...props}) =>{

  const [doneTask, setDoneTask] = useState(task.done);
  const [formActive, setFormActive] = useState(false);
  const [taskData, setTaskData] = useState(task);
  const [taskTags, setTaskTags] = useState([
    {color: '#FFCECE', status: task.workTag},
    {color: '#D1E5F7', status: task.studyTag},
    {color: '#DAF2D6', status: task.entertaimentTag},
    {color: '#D2CEFF', status: task.familyTag}]);


  let status = '';
  doneTask != true ? status = '' : status = 'line-through';

  const editTask = (e) =>{
    setFormActive(true);
    edit(task);
  }
  const deleteTask = (e) =>{
    setFormActive(true);
    drop(task);
  }
  const doneTaskFunc = (e) =>{
    console.log('status1', doneTask, task.id)
    setDoneTask(!doneTask);
    done(!doneTask, task.id);
    console.log('status', !doneTask, task.id)
  }

  return(

    <div className = 'App_TaskItem' >
    
      <div className = 'App_TaskItem_Header'>
        <b className = 'App_TaskItem_Header_Font' style = {{textDecoration: status }}>{task.title}</b>

      </div>

      <div className = 'App_TaskItem_Text' style = {{textDecoration: status }}>
        {task.text}
      </div>

      <div className = 'App_TaskItem_Footer'>

        <div className = 'App_TaskItem_Footer_Tags'>
          {task.workTag == true ? <TaskTag color = {'#FFCECE'} fixed = {true}/> : ''}
          {task.studyTag == true ? <TaskTag color = {'#D1E5F7'} fixed = {true}/> : ''}
          {task.entertaimentTag == true ? <TaskTag color = {'#DAF2D6'} fixed = {true}/> : ''}
          {task.familyTag == true ? <TaskTag color = {'#D2CEFF'} fixed = {true}/> : ''}
        </div>
        <div className = 'App_TaskItem_Footer_Done'>
          <input
          type="checkbox"
          id="click"
          onChange ={doneTaskFunc}
          checked = {doneTask}/>
          Done
        </div>

      </div>
      <div className = 'App_TaskItem_Footer_Buttons'>
        <AppButton
        color = '#69665c'
        fontColor = 'white'
        minWidth = '10vw'
        onClick = {editTask}>
        Edit
        </AppButton>
        <AppButton
        color = '#69665c'
        fontColor = 'white'
        minWidth = '10vw'
        onClick = {deleteTask}>
        Delete
        </AppButton>
      </div>
    </div>
  )
}

export default TaskItem;
