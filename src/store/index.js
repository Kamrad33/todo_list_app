import {createStore, combineReducers} from 'redux';
import {savesReducer} from './savesReducer';
import {tasksReducer} from './tasksReducer';
import {userDataReducer} from './userDataReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
const rootReducer = combineReducers({
  saves: savesReducer,
  tasks: tasksReducer,
  userData: userDataReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
