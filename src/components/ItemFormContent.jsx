import React, {useState, useEffect} from 'react';
import TaskTag from './TaskTag';
import AppInput from './UI/input/AppInput';
import AppButton from './UI/button/AppButton';

const ItemFormContent = ({action, actionFunc, close, data, ...props}) =>{

  const [formActive, setFormActive] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [workTag, setWorkTag] = useState(false);
  const [studyTag, setStudyTag] = useState(false);
  const [entertaimentTag, setEntertaimentTag] = useState(false);
  const [familyTag, setFamilyTag] = useState(false);

  useEffect(() =>{
    setTitleValue(data.title);
    setTextValue(data.text);
    setWorkTag(data.workTag);
    setStudyTag(data.studyTag);
    setEntertaimentTag(data.entertaimentTag);
    setFamilyTag(data.familyTag);
  },[close]);

  const closeForm = (e) =>{
    setTitleValue('');
    setTextValue('');
    setWorkTag(false);
    setStudyTag(false);
    setEntertaimentTag(false);
    setFamilyTag(false);
    setFormActive(false);
    close(formActive);
    console.log('title', titleValue, 'text', textValue);
  };

  const rightButton = () => {
    if (action == 'Edit') {
      editButton()
    }
    else {
      addButton()
    }
  };

  const editButton = () => {
    console.log('fetch edit data', titleValue, textValue, workTag, studyTag, entertaimentTag, familyTag);
    console.log(data.id, 'id');
    actionFunc(
      data.id, 
      titleValue,
      textValue,
      workTag,
      studyTag,
      entertaimentTag,
      familyTag);
  }
  const addButton = () => {
    console.log('fetch add data', titleValue, textValue, workTag, studyTag, entertaimentTag, familyTag);
    actionFunc(titleValue, textValue, workTag, studyTag, entertaimentTag, familyTag);
  }

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
      minWidth = '10vw'
      onClick = {rightButton}>{action}</AppButton>
    </div>

    <div className = 'TaskItemForm_Content_Info'>
      <div className = 'TaskItemForm_Content_Info_Title'>
      Title
      </div>
      <AppInput
        value = {titleValue}
        onChange = {e => setTitleValue(e.target.value)}/>
      <div className = 'TaskItemForm_Content_Info_Description'>
      Description
      </div>
      <AppInput
        value = {textValue}
        onChange = {e => setTextValue(e.target.value)}/>
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
