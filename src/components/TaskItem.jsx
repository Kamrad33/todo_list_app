import React, {useState} from 'react';
import TaskItemForm from './TaskItemForm';

const TaskItem = (props) =>{

  const [doneTask, setDoneTask] = useState();
  const [formActive, setFormActive] = useState(false);
  let status = '';
  doneTask != true ? status = '' : status = 'line-through'
  return(
    <div className = 'App_TaskItem'>
    <div className = 'App_TaskItem_Header'>
    <b className = 'App_TaskItem_Header_Font' style = {{textDecoration: status }}>First Task</b>
    <button className = 'App' onClick = {() => setFormActive(true)}>...PEN</button>
    </div>
    <div className = 'App_TaskItem_Text'>
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
    text text text text text text text
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
    checked = {doneTask}/>Done</div>
    </div>
    <TaskItemForm active = {formActive} setActive = {setFormActive}>
    halkdjhfladjshflajhdslfhajsfdlkh
    fasfaf
    halkdjhfladjshflajhdslfhajsfdlkh
    halkdjhfladjshflajhdslfhajsfdlkh
    halkdjhfladjshflajhdslfhajsfdlkh
    halkdjhfladjshflajhdslfhajsfdlkh
    halkdjhfladjshflajhdslfhajsfdlkhss
    halkdjhfladjshflajhdslfhajsfdlkh
    halkdjhfladjshflajhdslfhajsfdlkh
    halkdjhfladjshflajhdslfhajsfdlkh
    halkdjhfladjshflajhdslfhajsfdlkh
    halkdjhfladjshflajhdslfhajsfdlkh
    halkdjhfladjshflajhdslfhajsfdlkh

    halkdjhfladjshflajhdslfhajsfdlkh
    </TaskItemForm>
    </div>
  )
}

export default TaskItem;
