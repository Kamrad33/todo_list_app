import React, {useState} from 'react';
import TaskSave from './TaskSave';
const TaskSavesList = ({saves, ...props}) => {
  //let save = JSON.parse(saves);
  console.log('saves', saves[0].id);
  return (
    <div>
    <TaskSave
    saveName = {'111 '}
    saveDate = {'222'}/>
    {saves.map(save => )}

    </div>
  );
};

export default TaskSavesList;
