//Retorna todos os reducers combinados

import {combineReducers} from 'redux';
import WidgetReducer from './WidgetReducer';

export default combineReducers({
  widgets: WidgetReducer
});
