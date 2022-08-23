import React, {useState} from 'react';
import '../styles/TaskItemForm.css';

const TaskTag = ({color, fixed, children}) =>{
  const [tagActive, setTagActive] = useState(true);
  return (
    <div className = {tagActive ? 'TaskItemForm_Content_Tags_Tag active' : 'TaskItemForm_Content_Tags_Tag'}
        onClick = {event => {setTagActive(!tagActive); console.log('tag', tagActive);}}>
      <div style = {{
        margin: '5px',
        width:'20px',
        height:'20px',
        background: color,
        borderRadius:'50%'}}>
      </div>
      <div>
      {children}
      </div>
    </div>

  );
}

export default TaskTag;
