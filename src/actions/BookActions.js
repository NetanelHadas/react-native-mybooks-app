import moment from 'moment';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  BOOK_UPDATE,
  ENTERED_EMPTY_FIELD,
  DATE_FIELD_ERROR,
  BOOK_CREATE,
  BOOKS_FETCH_SUCCESS,
  BOOK_SAVE_SUCCESS,
  BOOK_SAVE_CANCEL
} from "./types";

export const bookUpdate = ({ prop, value }) => {
    return {
        type: BOOK_UPDATE,
        payload: { prop, value }
    };
};

export const bookCreate = ({ author_name, published_date, book_title, book_image }) => {
    const pdate = moment(published_date);
    author_name = (uppercase(author_name)).replace(/[^a-zA-Z ]/g, "");
    book_title = (uppercase(book_title)).replace(/[^a-zA-Z ]/g, "");
   
    // strings – not empty
    if((author_name === '') || (book_title === '')) {
        return (dispatch) => emptyFieldError(dispatch);    
    };
    // date – valid date 
    if (!pdate.isValid()) {
        return (dispatch) => dateFieldError(dispatch);
    }
    
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser}/books`)
            .push({ author_name, published_date, book_title, book_image })
            .then(() => {
                dispatch({ type: BOOK_CREATE })    
                Actions.pop()
            });
    };
};

const emptyFieldError = (dispatch) => {
  dispatch({
    type: ENTERED_EMPTY_FIELD
  });
};

const dateFieldError = (dispatch) => {
  dispatch({
    type: DATE_FIELD_ERROR
  });
};

const uppercase = (str) => {
  let array1 = str.split(' ');
  let newarray1 = [];
    
  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}

export const booksFetch = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser}/books`)
            .on('value', snapshot => {
                dispatch({ type: BOOKS_FETCH_SUCCESS, payload: snapshot.val() });
            });       
    };
};

export const bookSave = ({ author_name, published_date, book_title, book_image, uid }) => {
    const { currentUser } = firebase.auth();

    const pdate = moment(published_date);
    author_name = (uppercase(author_name)).replace(/[^a-zA-Z. ]/g, "");
    book_title = (uppercase(book_title)).replace(/[^a-zA-Z. ]/g, "");

    // strings – not empty
    if((author_name === '') || (book_title === '')) {
        return (dispatch) => emptyFieldError(dispatch);    
    };
    // date – valid date 
    if (!pdate.isValid()) {
        return (dispatch) => dateFieldError(dispatch);
    }

    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser}/books/${uid}`)
        .set({ author_name, published_date, book_title, book_image })
        .then(() => {
            dispatch({ type: BOOK_SAVE_SUCCESS });
            Actions.pop();
        });  
    };
};

export const bookSaveCancel = () => {
    return {
        type: BOOK_SAVE_CANCEL
    };
}

export const bookDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    
    return () => {
        firebase.database().ref(`/users/${currentUser}/books/${uid}`)
            .remove()
            .then(() => {
                Actions.pop();
            });
    };
};

// With authentication we need to change each currentUser to currentUser.uid