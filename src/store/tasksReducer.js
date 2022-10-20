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

export const tasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {...state, tasks: [...state.tasks, action.payload]};
    case 'EDIT_TASK':
      return {...state, tasks: action.payload};
    case 'DONE_TASK':
      return {...state, tasks: action.payload};
    case 'DELETE_TASK':
      return {...state, tasks: action.payload};
    case 'LOAD_TASK':
      return {...state, tasks: action.payload};
    default:
    return state;
  }
}
