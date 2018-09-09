import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import BookFormReducer from './BookFormReducer';
import BooksReducer from './BooksReducer';

export default combineReducers({
  auth: AuthReducer,
  bookForm: BookFormReducer,
  books: BooksReducer
});