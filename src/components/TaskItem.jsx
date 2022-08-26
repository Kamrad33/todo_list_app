import React, {useState} from 'react';
import TaskItemForm from './TaskItemForm';
import TaskTag from './TaskTag';
import AppInput from './UI/input/AppInput';
import AppButton from './UI/button/AppButton';

import '../styles/TaskItem.css';

const TaskItem = ({task, edit, drop, ...props}) =>{

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
    drop();
  }

  return(

    <div className = 'App_TaskItem'>

      <div className = 'App_TaskItem_Header'>
        <b className = 'App_TaskItem_Header_Font' style = {{textDecoration: status }}>{task.title}</b>

      </div>

      <div className = 'App_TaskItem_Text' style = {{textDecoration: status }}>
        {task.text}
      </div>

      <div className = 'App_TaskItem_Footer'>
        <div className = 'App_TaskItem_Footer_Tags'>
          {taskTags.filter(taskTag => taskTag.status == true)
            .map(taskTag => <TaskTag  color = {taskTag.color} fixed = {false} key={taskTag.color}/>)}
        </div>
        <div className = 'App_TaskItem_Footer_Done'>
          <input
          type="checkbox"
          id="click"
          onChange ={event =>{setDoneTask(!doneTask); console.log('status', doneTask)}}
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
