import React, {useState, useEffect, useRef} from 'react';
import './styles/App.css';
import axios from 'axios';
import AppContainer from './components/UI/container/AppContainer';
import AppHeader from './components/UI/header/AppHeader';
import AppButton from './components/UI/button/AppButton';
import TaskItem from './components/TaskItem';
import TaskItemList from './components/TaskItemList';
import TaskTag from './components/TaskTag';
import TagsList from './components/TagsList';
import TaskItemForm from './components/TaskItemForm';
import ItemFormContent from './components/ItemFormContent';
import TaskSavesList from './components/TaskSavesList';
import TaskSave from './components/TaskSave';

function App() {

  const [editForm, setEditForm] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [savesForm, setSavesForm] = useState(false);
  const [saveDialogForm, setSaveDialogForm] = useState(false);
  const [saveNameState, setSaveNameState] = useState('');
  const [editedTask, setEditedTask] = useState({});
  const [hideDone, setHideDone] = useState(false);
  const [workTag, setWorkTag] = useState(false);
  const [studyTag, setStudyTag] = useState(false);
  const [entertaimentTag, setEntertaimentTag] = useState(false);
  const [familyTag, setFamilyTag] = useState(false);

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
      { id: 2,
        title:'title2',
        text:'texttexttext22111',
        done: false,
        workTag: false,
        studyTag: true,
        entertaimentTag: false,
        familyTag: false},
    ]);
  const [saves, setSaves] = useState([
    {
      id: 1,
      save_name: 'name1',
      save_date: 'date1',
      save_json: [{id:1, title: 'lol1', text: 'lol lol lol', done: true, workTag: true, studyTag: false, entertaimentTag: false, familyTag: false}, {id: 2, title:'title2', text:'lol 2 lol 2', done: false, workTag: false, studyTag: true, entertaimentTag: false, familyTag: false}]
    },
    {
      id: 2,
      save_name: 'name2',
      save_date: 'date2',
      save_json: [{}],
    },
    {
      id: 3,
      save_name: 'name3',
      save_date: 'date3',
      save_json: [{}],
    },
    {
      id: 4,
      save_name: 'name4',
      save_date: 'date4',
      save_json: [{}],
    },
    {
      id: 5,
      save_name: 'name5',
      save_date: 'date5',
      save_json: [{}],
    }
  ]);

  //forms state functionalaity
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
  const clickSavesForm = () =>{
    setSavesForm(!savesForm);
  }
  const clickSaveDialogForm = () =>{
    setSaveDialogForm(!saveDialogForm);
    console.log('save name', saveNameState);
    console.log('save json', tasks);
  }

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
  };

  //Add/Edit/Delete/Done task functionalaity
  const addTaskFunc = (
    titleValue,
    textValue,
    workTag,
    studyTag,
    entertaimentTag,
    familyTag) => {
      const newTask = {
        id: Date.now(),
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
        familyTag: familyTag};
      let newTaskLists = tasks.filter(task => task.id != id);
      setTasks([editedTaskObj, ...newTaskLists]);
      closeEditForm();
  };
  const deleteTaskFunc = () =>{
    let newTaskLists = tasks.filter(task => task.id != editedTask.id);
    setTasks(newTaskLists);
    closeDeleteForm();
  };
  const doneTaskAction = (done, id) => {
    console.log('doneTaskAction', done, id);
    setTasks(tasks.map(task => task.id == id ? {...task, done: done} : task))
  };
  const hideDoneTasks = (doneTasks) =>{
    console.log('hideDoneTasks');
    setHideDone(!hideDone)
  };
  const tagFunction = (tag) =>{
    console.log('tagFunction', tag);
    switch (tag) {
      case 'work':
        setWorkTag(!workTag);
        break;
      case 'study':
        setStudyTag(!studyTag);
        break;
      case 'entertaiment':
        setEntertaimentTag(!entertaimentTag);
        break;
      case 'family':
        setFamilyTag(!familyTag);
        break;
      default:
    }
  }

  //task filter functionality
  function filterRender(tasks, hide, work, study, entertaiment, family) {

    let filtredTaskArray = [];
    let workTasks = [];
    let studyTasks = [];
    let entertaimentTasks = [];
    let familyTasks = [];

    console.log('filterRender 1', filtredTaskArray);

    if (hide) {
        tasks = tasks.filter(task => task.done != true)
    }
    if (work || study || entertaiment || family == true) {
      work ? workTasks = tasks.filter(task => task.workTag == true) : workTasks = [];
      study ? studyTasks = tasks.filter(task => task.studyTag == true) : studyTasks = [];
      entertaiment ? entertaimentTasks = tasks.filter(task => task.entertaimentTag == true) : entertaimentTasks = [];
      family ? familyTasks = tasks.filter(task => task.familyTag == true) : familyTasks = [];
      filtredTaskArray = [...new Set([...workTasks, ...studyTasks, ...entertaimentTasks, ...familyTasks])];
      console.log('show not all', filtredTaskArray);
      return filtredTaskArray;
    }
    else {
      console.log('show all', tasks);
      return tasks;
    }
  };
  const sortedTasks = filterRender(tasks, hideDone, workTag, studyTag, entertaimentTag, familyTag);

  function loadSave(json) {
    let data = JSON.parse(JSON.stringify(json));
    console.log('work nice', json);
    setTasks(json);
  }
  //server functions
  function loadData() {
      console.log('load data');
      axios.post('http://localhost:1348/loadTasks', {
        method: 'POST',
        mode: 'no-cors',
        bodyUsed: true,
        headers:{
          'Access-Control-Allow-Origin':'*',
          "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE",
          "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
          'Content-Type': 'application/json',
        },
      }).then(res => {
        let x = res.data;
        console.log('data', x[0].data);
        setTasks(JSON.parse(x[0].data));
          console.log('PARSED', tasks);
      }).catch((error) => {
        console.warn('error', error);
      });
  };
  function saveData() {
    console.log('send data', tasks);
    console.log('send data', JSON.stringify(tasks));

    axios.post('http://localhost:1348/sendTasks', {
      data: JSON.stringify(tasks),
      headers:{
    'Access-Control-Allow-Origin':'*',
    "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE",
    "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
    'Content-Type': 'application/json',
  },
}).then(res => {
  console.log('save tasks');
  loadData();
}).catch((error) => {
  console.warn('error', error);
})
};



  return (
    <div className="App">

      <AppHeader>

        <AppContainer style={{
          backgroundColor: 'blue',
          minWidth: '100px',
          minHeight: '100px',
          flex: '0 0 100px',
        }}>
        <div
        className = 'App_Header_Icon'
        onClick = {() => clickSavesForm()}>
        Icon
        </div>
        </AppContainer>

        <div className = 'App_Header_Content'>

          <div className = 'App_Header_Content_Text'>
          Todo list:
          </div>

          <AppButton
            color = '#69665c'
            fontColor = 'white'
            minWidth = '15vw'
            onClick = {clickSaveDialogForm}>Save</AppButton>

          <AppButton
            color = '#69665c'
            fontColor = 'white'
            minWidth = '15vw'
            onClick = {openAddForm}>Add</AppButton>

        </div>
      </AppHeader>

      <AppContainer style = {{
        backgroundColor: 'yellow',
        display: 'flex',
        margin: 'auto',
        height: 'calc(100vh - 100px)',
      }}>

        <AppContainer style = {{
          display: 'flex',
          flexDirection: 'column',
          margin: '5px',
        }}>


          <TagsList
            doneButton = {hideDone}
            actionFunc = {hideDoneTasks}
            workTag = {workTag}
            studyTag = {studyTag}
            entertaimentTag = {entertaimentTag}
            familyTag = {familyTag}
            tagFunc = {tagFunction}/>

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

            <TaskItemForm
            active = {savesForm}
            setActive = {setSavesForm}
            fixed = {true}>
            <TaskSavesList
            saves = {saves}
            formAction = {clickSavesForm}
            loadAction = {loadSave}/>
            </TaskItemForm>

            <TaskItemForm
            active = {saveDialogForm}
            setActive = {setSaveDialogForm}
            fixed = {true}>
              <div className = "App_SaveDialogForm">
                <b style = {{flex: '1'}}>Save name: </b>
                <input style = {{flex: '5', width: 'auto'}}
                  onChange = {e => setSaveNameState(e.target.value)}/>
                <AppButton
                style = {{flex: '1'}}
                color = '#69665c'
                fontColor = 'white'
                minWidth = '10vw'
                onClick = {clickSaveDialogForm}>OK</AppButton>
              </div>
            </TaskItemForm>

                <TaskItemList
                tasks = {sortedTasks}
                openEditForm = {openEditForm}
                doneTask = {doneTaskAction}
                openDeleteForm = {openDeleteForm}/>

        </AppContainer>
    </AppContainer>

    </div>
  );
}

export default App;
