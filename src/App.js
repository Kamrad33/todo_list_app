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
const [deleteForm, setDeleteForm] = useState(true);
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

  return (
    <div className="App">
    <AppHeader>
    <AppContainer style={{
      backgroundColor: 'blue',
      minWidth: '100px',
      minHeight: '100px',
      flex: '0 0 100px',
    }}>Icon</AppContainer>
    <AppContainer style = {{
      backgroundColor: 'green',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    }}>
    <text>
    Todo
    </text>
    <AppButton
      color = '#69665c'
      fontColor = 'white'
      minWidth = '15vw'
      onClick = {openAddForm}>Add</AppButton>
    </AppContainer>
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
          data = {editedTask}/>
        </TaskItemForm>

        <TaskItemForm
        active = {addForm}
        setActive = {setAddForm}
        fixed = {true}>
          <ItemFormContent
          action = 'Add'
          close = {closeAddForm}
          data = {''}/>
        </TaskItemForm>
        <TaskItemForm
        active = {deleteForm}
        setActive = {setDeleteForm}
        fixed = {false}>
        shure&
        </TaskItemForm>
        <TaskItem task = {tasks[0]} edit = {openEditForm} drop = {openDeleteForm}/>
        <TaskItem task = {tasks[1]} edit = {openEditForm}/>
        <TaskItem task = {tasks[2]} edit = {openEditForm}/>
        <TaskItem task = {tasks[3]} edit = {openEditForm}/>
    </AppContainer>
    </AppContainer>

    </div>
  );
}

export default App;
