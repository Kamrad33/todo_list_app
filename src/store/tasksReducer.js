const defaultState = {
  tasks: [
    { id: 1,
      title:'title 1123123123123123123',
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
  ],
}

const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DONE_TASK = 'DONE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const LOAD_TASK = 'LOAD_TASK';

export const tasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {...state, tasks: [...state.tasks, action.payload]};
    case EDIT_TASK:
      return {...state, tasks: action.payload};
    case DONE_TASK:
      return {...state, tasks: action.payload};
    case DELETE_TASK:
      return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)};
    case LOAD_TASK:
      return {...state, tasks: action.payload};
    default:
    return state;
  }
};

//action creators
export const addTaskActionReducer = (payload) => ({type: ADD_TASK, payload});
export const editTaskActionReducer  = (payload) => ({type: EDIT_TASK, payload});
export const doneTaskActionReducer  = (payload) => ({type: DONE_TASK, payload});
export const deleteTaskActionReducer  = (payload) => ({type: DELETE_TASK, payload});
export const loadTaskActionReducer  = (payload) => ({type: LOAD_TASK, payload});
