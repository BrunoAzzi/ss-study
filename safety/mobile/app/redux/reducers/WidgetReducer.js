import {
  FETCH_WIDGETS,
  FETCH_DETALHES
} from '../consts';

const INITIAL_STATE = {
  all: [],
  selected: null,
}

export default (state = {}, action) => {
  //console.log('response '+action.type+' -> object below');
  //console.log(action.payload)
  switch (action.type) {
    case FETCH_WIDGETS:
      return {...state, all: action.payload.data};
    case FETCH_DETALHES:
      return {...state, selected: action.payload.data};
  }
  return state;
};
