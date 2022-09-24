import React, {useState, useEffect, useRef} from 'react';
import './styles/App.css';
import axios from 'axios';
import logo from './logo.svg';
import AppContainer from './components/UI/container/AppContainer';
import AppHeader from './components/UI/header/AppHeader';
import AppButton from './components/UI/button/AppButton';
import TaskItem from './components/TaskItem';
import TaskItemList from './components/TaskItemList';
import TaskTag from './components/TaskTag';
import TagsList from './components/TagsList';
import TaskItemForm from './components/TaskItemForm';
import ItemFormContent from './components/ItemFormContent';
import AuthFormContent from './components/AuthFormContent';
import RegisterFormContent from './components/RegisterFormContent';
import AccountFormContent from './components/AccountFormContent';
import TaskSavesList from './components/TaskSavesList';
import TaskSave from './components/TaskSave';
import {AuthContext} from './components/AuthPages/Auth';

function App() {

  const [editForm, setEditForm] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [savesForm, setSavesForm] = useState(false);
  const [saveDialogForm, setSaveDialogForm] = useState(false);
  const [authForm, setAuthForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const [accountForm, setAccountForm] = useState(false);
  const [saveNameState, setSaveNameState] = useState('');
  const [editedTask, setEditedTask] = useState({});
  const [hideDone, setHideDone] = useState(false);
  const [workTag, setWorkTag] = useState(false);
  const [studyTag, setStudyTag] = useState(false);
  const [entertaimentTag, setEntertaimentTag] = useState(false);
  const [familyTag, setFamilyTag] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem('Tokens', JSON.stringify(data));
    setAuthTokens(data);
    console.log('Loacl data', data);
  }

  const [accountData, setAccountData] = useState({
    id: 1,
    user_name: 'Name1',
    user_password: 'Password'
  });
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
    setSaveNameState('');
    loadData(accountData.id);
  }
  const clickSaveDialogForm = () =>{
    setSaveDialogForm(!saveDialogForm);
    console.log('save name', saveNameState);
    console.log('save json', tasks);
    setSaveNameState('');
      console.log('save name 2', saveNameState);
  }
  const clickAuthForm = () => {
    setAuthForm(!authForm);
  }
  const clickRegisterForm = () =>{
    clickAuthForm();
    setRegisterForm(!registerForm);
  }
  const clickAccountForm = () => {
    console.log('account');
    setSavesForm(!savesForm);
    setAccountForm(!accountForm);
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
    console.log(' dhladhladjhfahjlaksdjhflasdjhflasdjhlfjsd',JSON.parse(json));
    setTasks(JSON.parse(json));
;
  }
  //server functions
  function loadData(user_id) {
      console.log('load data');
      axios.post('http://localhost:1348/loadTasks', {
        user_id: user_id,
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
        setSaves(res.data);
          console.log('PARSED', tasks);
      }).catch((error) => {
        console.warn('error', error);
      });
  };
  function saveData() {
    console.log('send data', tasks);
    console.log('send data', JSON.stringify(tasks));
    let date = new Date().toISOString().slice(0,19).replace('T', ' ');
    console.log(saveNameState, date, JSON.stringify(tasks), accountData.id);
    axios.post('http://localhost:1348/sendTasks', {
      save_name: saveNameState,
      save_date: date,
      save_json: JSON.stringify(tasks),
      user_id: accountData.id,
      headers:{
    'Access-Control-Allow-Origin':'*',
    "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE",
    "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
    'Content-Type': 'application/json',
  },
}).then(res => {
  console.log('save tasks');
  clickSaveDialogForm();
}).catch((error) => {
  console.warn('error', error);
})
};


  function postLogin(login, password) {
    console.log('login', login, password);
    axios.post('http://localhost:1348/userLogin', {
      user_name: login,
      user_password: password,
    })
    .then(res => {
      console.log('login length', JSON.stringify(res.data));
      if (res.data.length > 0) {
        setAuthTokens(res.data);
        let id = res.data[0].id
        setLoggedIn(true);
        setAccountData({id: res.data[0].id, user_name: res.data[0].user_name, user_password: res.data[0].user_password})
        clickAuthForm(!authForm);
        setIsError(false);
      } else {
        setIsError(true);
        console.log('login err', login);
      }
    })
    .catch((error) => {
      setIsError(true);
      console.warn('error', error);
    })
  };

  function postRegister(login, password) {
    console.log('register', login, password);
    axios.post('http://localhost:1348/checkUser', {
      user_name:login
    }).then(res => {
      if (res.data.length == 0) {
        setIsError(true);
        axios.post('http://localhost:1348/userRegister', {
          user_name: login,
          user_password: password
        }).then(res => {
          console.log('reg data', res);
          setRegisterForm(false);
          clickAuthForm(!authForm);
          setIsError(false);
        }).
        catch((err) => {
          console.warn('err', err);
        });
      } else {
        setIsError(true);
      }
    }).catch((error) => {
        setIsError(true);
        console.warn('error', error);
      })
  };

  const editAccountFunc = (id, login, password) => {
    console.log('edit2', id, login, password);
    axios.post('http://localhost:1348/editAccount', {
      id: id,
      user_name: login,
      user_password: password,
    }).then(res => {
        console.log(res);
        clickAccountForm();
    }).catch((err) => {
      console.warn('err', err);
    })
  };

  return (
    <div className="App">

      <AppHeader>

        <div
          className = 'App_Header_Icon'>
          {isLoggedIn ? (<div
          onClick = {() => clickSavesForm()}>{accountData.user_name}</div>) :
          (<div className = 'App_Header_Login'><AppButton
            color = '#69665c'
            fontColor = 'white'
            minWidth = '15vw'
            onClick = {clickAuthForm}>Log in</AppButton></div>)
        }</div>

        <div className = 'App_Header_Content'>

          <div className = 'App_Header_Content_Text'>
          Todo list:
          </div>
          <div className = 'App_Header_Buttons'>
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
        </div>
      </AppHeader>

      <div className = 'App_Content'>

        <div className = 'App_TagBar'>
          <TagsList
            doneButton = {hideDone}
            actionFunc = {hideDoneTasks}
            workTag = {workTag}
            studyTag = {studyTag}
            entertaimentTag = {entertaimentTag}
            familyTag = {familyTag}
            tagFunc = {tagFunction}/>
        </div>

        <AppContainer style = {{
          backgroundColor: '#ffffff',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          overflow: 'auto',
        }}>
                { isLoggedIn ?
                <TaskItemList
                tasks = {sortedTasks}
                openEditForm = {openEditForm}
                doneTask = {doneTaskAction}
                openDeleteForm = {openDeleteForm}/>
                : <div>You have to be logged in to use this app</div>
              }

        </AppContainer>

    </div>

      <div className = 'App_Forms'>

        {/*edit form*/}
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

        {/*add form*/}
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

        {/*delete form*/}
        <TaskItemForm
        active = {deleteForm}
        setActive = {setDeleteForm}
        fixed = {true}>
          <div className = 'App_DeleteForm_Content'>
            <div  className = 'App_DeleteForm_Content_Text'>Are you shure?</div>
            <div className = 'App_DeleteForm_Content_Button'>
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
          </div>
        </TaskItemForm>

        {/*save form*/}
        <TaskItemForm
        active = {savesForm}
        setActive = {setSavesForm}
        fixed = {true}>
          <TaskSavesList
          saves = {saves}
          formAction = {clickSavesForm}
          loadAction = {loadSave}
          accountAction = {clickAccountForm}/>
        </TaskItemForm>

        {/*save dialog form*/}
        <TaskItemForm
        active = {saveDialogForm}
        setActive = {setSaveDialogForm}
        fixed = {true}>

          <div className = "App_SaveDialogForm">
            <b style = {{flex: '1'}}>Save name: </b>
            <input style = {{flex: '5', width: 'auto', borderRadius: '10px'}}
              placeholder = 'Insert save name'
              value = {saveNameState}
              onChange = {e => setSaveNameState(e.target.value)}/>
            <AppButton
            style = {{flex: '1'}}
            color = '#69665c'
            fontColor = 'white'
            minWidth = '10vw'
            onClick = {saveData}>OK</AppButton>
          </div>

        </TaskItemForm>
        {/*Authorization form*/}
        <TaskItemForm
        active = {authForm}
        setActive = {setAuthForm}
        fixed = {true}>
          <AuthFormContent
          formAction = {clickAuthForm}
          registerAction = {clickRegisterForm}
          loginAction = {postLogin}/>
          {isError && <div style = {{color: 'red'}}>Wrong login or password!</div>}
        </TaskItemForm>
        {/*Registration form*/}
        <TaskItemForm
        active = {registerForm}
        setActive = {setRegisterForm}
        fixed = {true}>
          <RegisterFormContent
          formAction = {clickRegisterForm}
          register = {postRegister}/>
          {isError && <div style = {{color: 'red'}}>User already exist!</div>}
        </TaskItemForm>

        {/*Account form*/}
        <TaskItemForm
        active = {accountForm}
        setActive = {setAccountForm}
        fixed = {true}>
          <AccountFormContent
          accountData = {accountData}
          editAccount = {editAccountFunc}/>
        </TaskItemForm>
        </div>

    </div>
  );
}

export default App;
