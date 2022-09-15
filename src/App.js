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
const [hideDone, setHideDone] = useState(false);

const openEditForm = (task) =>{
  setEditForm(true);
  setEditedTask(task)
};
const openAddForm = () =>{
  setAddForm(true);
};
const openDeleteForm = (task) =>{
  setDeleteForm(true);
  setEditedTask(task)
  console.log(task);
};
const closeEditForm = () =>{
  setEditForm(false);
  setEditedTask({});
};
const closeAddForm = () =>{
  setAddForm(false);
};
const closeDeleteForm = () => {
  setDeleteForm(false);
  setEditedTask({});
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
    done: false,
    workTag: false,
    studyTag: true,
    entertaimentTag: false,
    familyTag: false},

  ]);

  const addTaskFunc = (titleValue, textValue, workTag, studyTag, entertaimentTag, familyTag) => {

    const newTask = {id: Date.now(),
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
    familyTag,
    done) => {

      const editedTaskObj = {
        id: id,
        title: titleValue,
        text: textValue,
        done: done,
        workTag: workTag,
        studyTag: studyTag,
        entertaimentTag: entertaimentTag,
        familyTag: familyTag}

      let newTaskLists = tasks.filter(task => task.id != id);
        setTasks([editedTaskObj, ...newTaskLists])
        closeEditForm();
  };

  const deleteTaskFunc = () =>{
    let newTaskLists = tasks.filter(task => task.id != editedTask.id);
    setTasks(newTaskLists);
    closeDeleteForm();
  }
  const doneTaskActon = (done, id) => {
    console.log('log', done, id);
    setTasks(tasks.map(task => task.id == id ? {...task, done: done} : task))
  }

  useEffect(() => {
    //document.getElementsByClassName('App').forceUpdate();
    //TaskItem.forceUpdate();
    console.log('randerrender');
  }, [hideDone])

  const taskItemList = () => {
    const items = tasks.map(task => <TaskItem
      task = {task}
      key={tasks.id}
      edit = {openEditForm}
      done = {doneTaskActon}
      drop = {openDeleteForm}/>)
  }
  const saveData = () =>{

    console.log('fetch', tasks);
  }
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
        onClick = {saveData}>Save</AppButton>
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
    <input
    type="checkbox"
    id="click"
    onChange = {() => setHideDone(!hideDone)}/>
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
        fixed = {true}>
          <div className = 'App_DeleteForm_Content'>
            <div>Are you shure?</div>
            <AppButton
              color = '#69665c'
              fontColor = 'white'
              minWidth = '10vw'
              onClick = {closeDeleteForm}>
            NO
            </AppButton>
            <AppButton
              color = '#69665c'
              fontColor = 'white'
              minWidth = '10vw'
              onClick = {deleteTaskFunc}>
            YES
            </AppButton>
          </div>
        </TaskItemForm>
        <div className = 'App_TaskItems' onChange = {console.log('rerenderayaya')}>
        {hideDone ? tasks.filter(task => task.done == false).map(task => <TaskItem
          task = {task}
          key={tasks.id}
          edit = {openEditForm}
          done = {doneTaskActon}
          drop = {openDeleteForm}/>)
          : tasks.map(task => (<div className = {tasks.id}><TaskItem
            task = {task}
            key={tasks.id}
            edit = {openEditForm}
            done = {doneTaskActon}
            drop = {openDeleteForm}/></div>)) }
            </div>

    </AppContainer>
    </AppContainer>

    </div>
  );
}

export default App;
