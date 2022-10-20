import React, {useState} from 'react';
import '../styles/TaskItemForm.css';

const TaskItemForm = ({active, setActive, fixed, children}) => {

  return (

    <div className = {active ? 'TaskItemForm active' : 'TaskItemForm'}
         onClick ={ fixed ? () => setActive(true) : () => setActive(false)}>

      <div className = {active ? 'TaskItemForm_Content active' : 'TaskItemForm_Content'}
           onClick = {e => e.stopPropagation()}>

        {children}

      </div>

    </div>
  );
};

export default TaskItemForm;
