import React, {useState, useEffect} from 'react';
import TaskTag from './TaskTag';
import AppInput from './UI/input/AppInput';
import AppButton from './UI/button/AppButton';

const ItemFormContent = ({action, close, data, ...props}) =>{

  const [formActive, setFormActive] = useState(false);
  const [tagActive, setTagActive] = useState(true);



  const closeForm = (e) =>{
    setFormActive(false);
    close(formActive);
  };

  return (
    <div>
    <div className = 'TaskItemForm_Content_Header'>
      <AppButton
      color = '#69665c'
      fontColor = 'white'
      minWidth = '10vw'
      onClick = {closeForm}>
      Cancel
      </AppButton>
      <AppButton
      color = '#69665c'
      fontColor = 'white'
      minWidth = '10vw'>{action}</AppButton>
    </div>

    <div className = 'TaskItemForm_Content_Info'>
      <div className = 'TaskItemForm_Content_Info_Title'>
        Title
      </div>
      <AppInput value = {data.title} />
      <div className = 'TaskItemForm_Content_Info_Description'>
        Description
      </div>
      <AppInput value = {data.text} />
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
    </div>
  );
};

export default ItemFormContent;
