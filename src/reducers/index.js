import { combineReducers } from "redux";
import BookFormReducer from './BookFormReducer';

export default combineReducers({
  bookForm: BookFormReducer
});