import React, {useState, useEffect} from 'react';
import TaskTag from './TaskTag';
import AppInput from './UI/input/AppInput';
import AppButton from './UI/button/AppButton';

const ItemFormContent = ({action, close, data, ...props}) =>{

  const [formActive, setFormActive] = useState(false);

  const [dataValue, setDataValue] = useState('');
  const [workTag, setWorkTag] = useState();
  const [studyTag, setStudyTag] = useState();
  const [entertaimentTag, setEntertaimentTag] = useState();
  const [familyTag, setFamilyTag] = useState();
  console.log(workTag, 'tag');
  useEffect(() =>{
    setDataValue(data);
  },[data]);

  const closeForm = (e) =>{
    setDataValue('');
    setWorkTag(false);
    setStudyTag(false);
    setEntertaimentTag(false);
    setFamilyTag(false);
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
      <AppInput
      value = {dataValue.title}
      onChange = {e => setDataValue(e.target.value)}/>
      <div className = 'TaskItemForm_Content_Info_Description'>
      Description
      </div>
      <AppInput
      value = {dataValue.text}
      onChange = {e => setDataValue(e.target.value)}/>
    </div>

    <div>

    <div>Tags</div>
    <div className = 'TaskItemForm_Content_Tags'>
    <TaskTag
    color = {'#FFCECE'}
    fixed = {false}
    tagActive = {workTag}
    onClick ={() => setWorkTag(!workTag)}>Work</TaskTag>
    <TaskTag
    color = {'#D1E5F7'}
    fixed = {false}
    tagActive = {studyTag}
    onClick ={() => setStudyTag(!studyTag)}>Study</TaskTag>
    <TaskTag
    color = {'#DAF2D6'}
    fixed = {false}
    tagActive = {entertaimentTag}
    onClick ={() => setEntertaimentTag(!entertaimentTag)}>Entertaiment</TaskTag>
    <TaskTag
    color = {'#D2CEFF'}
    fixed = {false}
    tagActive = {familyTag}
    onClick ={() => setFamilyTag(!familyTag)}>Family</TaskTag>
    </div>
    </div>
    </div>
  );
};

export default ItemFormContent;
