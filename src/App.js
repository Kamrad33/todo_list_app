import React, {useState, useEffect, useRef} from 'react';
import './styles/App.css';
import AppContainer from './components/UI/container/AppContainer';
import AppHeader from './components/UI/header/AppHeader';
import AppButton from './components/UI/button/AppButton';
import TaskItem from './components/TaskItem';
import TaskItemForm from './components/TaskItemForm';
import ItemFormContent from './components/ItemFormContent';

function App() {
const [editForm, setEditForm] = useState(false);
const [addForm, setAddForm] = useState(false);
const [deleteForm, setDeleteForm] = useState(false);
const [editedTask, setEditedTask] = useState({});


const openEditForm = (task) =>{
  setEditForm(true);
  setEditedTask(task)
};
const openAddForm = () =>{
  setAddForm(true);
};
const openDeleteForm = () =>{
  setDeleteForm(true);
};
const closeEditForm = () =>{
  setEditForm(false);
};
const closeAddForm = () =>{
  setAddForm(false);
};
const closeDeleteForm = () => {
  setDeleteForm(false);
}


const [tasks, setTasks] = useState(
  [
    { id: 1,
      title:'title 1',
      text:'text text text 1 1 1 text text text 1 1 1 text text text 1 1 1 text text text 1 1 1 text text text 1 1 1 text text text 1 1 1 text text text 1 1 1 text text text 1 1 1',
      done: true,
      workTag: true,
      studyTag: false,
      entertaimentTag: false,
      familyTag: false,
      },
    {id: 2, title:'title 2', text:'text text text 2 2 2',
    workTag: false,
    studyTag: true,
    entertaimentTag: false,
    familyTag: false},
    {id: 3, title:'title 3', text:'text text text 3 3 3'},
    {id: 4, title:'title 4', text:'text text text 4 4 4'},
  ]);

  const addTaskFunc = (titleValue, textValue, workTag, studyTag, entertaimentTag, familyTag) => {

    const newTask = {id: 1,
      title: titleValue,
      text: textValue,
      done: false,
      workTag:workTag,
      studyTag:studyTag,
      entertaimentTag:entertaimentTag,
      familyTag:familyTag};
    setTasks([...tasks, newTask]);
  };

  const editTaskFunc = (
    id,
    titleValue,
    textValue,
    workTag,
    studyTag,
    entertaimentTag,
    familyTag) => {

      const editedTaskObj = {
        id: id,
        title: titleValue,
        text: textValue,
        done: false,
        workTag: true,
        studyTag: true,
        entertaimentTag: true,
        familyTag: true}

      let newTaskLists = tasks.filter(task => task.id != id);
        setTasks([editedTaskObj, ...newTaskLists])
  };
  return (
    <div className="App">
    <AppHeader>
    <AppContainer style={{
      backgroundColor: 'blue',
      minWidth: '100px',
      minHeight: '100px',
      flex: '0 0 100px',
    }}>Icon</AppContainer>
    <div className = 'App_Header_Content'>
      <div className = 'App_Header_Content_Text'>
      Todo list:
      </div>
    <AppButton
      color = '#69665c'
      fontColor = 'white'
      minWidth = '15vw'
      onClick = {openAddForm}>Add</AppButton>
    </div>
    </AppHeader>
    <AppContainer style = {{
      backgroundColor: 'grey',
      display: 'flex',
      margin: 'auto',
      height: 'calc(100vh - 100px)',

    }}>
    <AppContainer style = {{
      display: 'flex',
      flexDirection: 'column',
      margin: '5px',
    }}>
    <input type="checkbox" id="click" />
    <text>Hide done</text>
    <text>Work</text>
    <text>Study</text>
    <text>Entertaiment</text>
    <text>Family</text>
    </AppContainer>
    <AppContainer style = {{
      backgroundColor: '#ffffff',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      overflow: 'auto',
    }}>
        <TaskItemForm
        active = {editForm}
        setActive = {setEditForm}
        fixed = {true}>
          <ItemFormContent
          action = 'Edit'
          close = {closeEditForm}
          actionFunc = {editTaskFunc}
          data = {editedTask}/>
        </TaskItemForm>

        <TaskItemForm
        active = {addForm}
        setActive = {setAddForm}
        fixed = {true}>
          <ItemFormContent
          action = 'Add'
          close = {closeAddForm}
          actionFunc = {addTaskFunc}
          data = {''}/>
        </TaskItemForm>
        <TaskItemForm
        active = {deleteForm}
        setActive = {setDeleteForm}
        fixed = {false}>
          <div className = 'App_DeleteForm_Content'>
            <div>Are you shure?</div>
            <AppButton
              color = '#69665c'
              fontColor = 'white'
              minWidth = '10vw'
              onClick = {console.log('sss')}>
            YES
            </AppButton>
          </div>
        </TaskItemForm>
        {tasks.map(task => <TaskItem
          task = {task}
          key={tasks.id}
          edit = {openEditForm}
          drop = {openDeleteForm}/>)}

    </AppContainer>
    </AppContainer>

    </div>
  );
}

export default App;
