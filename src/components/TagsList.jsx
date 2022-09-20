import React, {useState} from 'react';
import TaskTag from './TaskTag';
import classes from '../styles/TagsList.module.css';

const TagsList = ({
  actionFunc,
  tagFunc,
  doneButton,
  workTag,
  studyTag,
  entertaimentTag,
  familyTag,  ...props}) => {

  //callbacks functionos from parent component
  const hideFunc = () =>{
    actionFunc(!doneButton);
  };
  const tagButtonFunc = (tag) =>{
    tagFunc(tag);
  };

  return(
      <div className = {classes.content}>
        <div className = {classes.hideContent}>
          <input
          className = {classes.hideInput}
          type="checkbox"
          id="click"
          onChange = {hideFunc}/>
          <div className = {classes.hideText}>Hide done</div>
        </div>

        <TaskTag
          color = {'#FFCECE'}
          fixed = {false}
          tagActive = {workTag}
          onClick ={() => tagButtonFunc('work')}>Work</TaskTag>
        <TaskTag
          color = {'#D1E5F7'}
          fixed = {false}
          tagActive = {studyTag}
          onClick ={() => tagButtonFunc('study')}>Study</TaskTag>
        <TaskTag
          color = {'#DAF2D6'}
          fixed = {false}
          tagActive = {entertaimentTag}
          onClick ={() => tagButtonFunc('entertaiment')}>Entertaiment</TaskTag>
        <TaskTag
          color = {'#D2CEFF'}
          fixed = {false}
          tagActive = {familyTag}
          onClick ={() => tagButtonFunc('family')}>Family</TaskTag>
      </div>
  );
};

export default TagsList;
