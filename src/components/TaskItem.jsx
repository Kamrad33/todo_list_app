import React, {useState} from 'react';
import TaskItemForm from './TaskItemForm';
import TaskTag from './TaskTag';
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
        <button onClick = {() => setFormActive(true)}>...PEN</button>
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
          <button onClick = {() => setFormActive(false)}>cancler</button>
          <button >edit</button>
        </div>

        <div className = 'TaskItemForm_Content_Info'>
          <div className = 'TaskItemForm_Content_Info_Title'>
            Title
          </div>
          <input></input>
          <div className = 'TaskItemForm_Content_Info_Description'>
            Description
          </div>
          <input></input>
        </div>

        <div>
        <div className = 'TaskItemForm_Content_Tags'>
        <div>Tags</div>
          <div className = {tagActive ? 'TaskItemForm_Content_Tags_Tag active' : 'TaskItemForm_Content_Tags_Tag'}
          onClick = {event => {setTagActive(!tagActive); console.log('tag', tagActive);}}>
            <div style = {{
              margin: '5px',
              width:'20px',
              height:'20px',
              background: 'grey',
              borderRadius:'50%'}}>
          </div>
          <div>
          TAG
          </div>
          </div>
          <TaskTag active = {tagActive} setActive = {setTagActive} fixed = {false}/>
          <div style = {{margin: '5px', width:'20px', height:'20px', background: 'green', borderRadius:'50%'}}></div>
          <div style = {{margin: '5px', width:'20px', height:'20px', background: 'blue', borderRadius:'50%'}}></div>
          <div style = {{margin: '5px', width:'20px', height:'20px', background: 'white', borderRadius:'50%'}}></div>
          <div style = {{margin: '5px', width:'20px', height:'20px', background: 'red', borderRadius:'50%'}}></div>
        </div>
        </div>
      </TaskItemForm>
    </div>
  )
}

export default TaskItem;
