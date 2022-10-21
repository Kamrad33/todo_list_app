const defaultState = {
  account: {id: 1,
  user_name: 'Name1',
  user_password: 'Password'},
}

const LOG_IN = 'LOG_IN'
export const userDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {...state, account: action.payload};

    default:
    return state;
  }
}

export const logInActionReducer = (payload) => ({type: LOG_IN, payload});
