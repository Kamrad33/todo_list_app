import React, {useState} from 'react';
import TaskItemForm from './TaskItemForm';
import TaskTag from './TaskTag';
import AppInput from './UI/input/AppInput';
import AppButton from './UI/button/AppButton';

import '../styles/TaskItem.css';

const TaskItem = ({task, ...props}) =>{

  const [doneTask, setDoneTask] = useState();
  const [formActive, setFormActive] = useState(false);
  const [tagActive, setTagActive] = useState(true);
  let status = '';
  doneTask != true ? status = '' : status = 'line-through';

  return(

    <div className = 'App_TaskItem'>

      <div className = 'App_TaskItem_Header'>
        <b className = 'App_TaskItem_Header_Font' style = {{textDecoration: status }}>{task.title}</b>
        <AppButton
        color = '#69665c'
        fontColor = 'white'
        minWidth = '10vw'
        onClick = {() => setFormActive(true)}>
        Edit
        </AppButton>
      </div>

      <div className = 'App_TaskItem_Text' style = {{textDecoration: status }}>
        {task.text}
      </div>

      <div className = 'App_TaskItem_Footer'>
        <div className = 'App_TaskItem_Footer_Tags'>
          
          <div style = {{margin: '5px', width:'20px', height:'20px', background: 'green', borderRadius:'50%'}}></div>
          <div style = {{margin: '5px', width:'20px', height:'20px', background: 'blue', borderRadius:'50%'}}></div>
          <div style = {{margin: '5px', width:'20px', height:'20px', background: 'white', borderRadius:'50%'}}></div>
          <div style = {{margin: '5px', width:'20px', height:'20px', background: 'red', borderRadius:'50%'}}></div>
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

      <TaskItemForm active = {formActive} setActive = {setFormActive} fixed = {true}>

        <div className = 'TaskItemForm_Content_Header'>
          <AppButton
          color = '#69665c'
          fontColor = 'white'
          minWidth = '10vw'
          onClick = {() => setFormActive(false)}>
          Cancel
          </AppButton>
          <AppButton
          color = '#69665c'
          fontColor = 'white'
          minWidth = '10vw'>Edit</AppButton>
        </div>

        <div className = 'TaskItemForm_Content_Info'>
          <div className = 'TaskItemForm_Content_Info_Title'>
            Title
          </div>
          <AppInput />
          <div className = 'TaskItemForm_Content_Info_Description'>
            Description
          </div>
          <AppInput></AppInput>
        </div>

        <div>

        <div>Tags</div>
        <div className = 'TaskItemForm_Content_Tags'>
          <TaskTag color = {'black'} fixed = {false}>TAG</TaskTag>
          <TaskTag color = {'green'} fixed = {false}>TAG</TaskTag>
          <TaskTag color = {'yellow'} fixed = {false}>TAG</TaskTag>
          <TaskTag color = {'red'} fixed = {false}>TAG</TaskTag>
        </div>
        </div>
      </TaskItemForm>
    </div>
  )
}

export default TaskItem;
