import React, {useState, useEffect} from 'react';
import TaskItem from './TaskItem';
const TaskItemList = ({
  tasks,
  openEditForm,
  doneTask,
  openDeleteForm,
  ...props}) => {
    const [sortedTasks, setSortedTasks] = useState(tasks);
    const sendId = (done, id) =>{
      console.log('kekw', done, id)
      doneTask(done, id);
    }
  useEffect(() =>{
    setSortedTasks(tasks);
    console.log('changes done', tasks);
  })
  return (

    <div className = 'App_TaskItems' onChange = {console.log('rerender task lists')}>
    
    {sortedTasks.map(task => (<TaskItem
        task = {task}
        key={task.id}
        edit = {openEditForm}
        done = {sendId}
        drop = {openDeleteForm}/>)) }
        </div>
  );
};

export default TaskItemList;
