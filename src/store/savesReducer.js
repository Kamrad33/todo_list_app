const defaultState = {
  saves: [
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
  ]
};

const LOAD_SAVES = 'LOAD_SAVES';

export const savesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_SAVES:
      return {...state, saves: action.payload};
    default:
    return state;
  }
}

export const loadSavesActionReducer = (payload) => ({type: LOAD_SAVES, payload});
