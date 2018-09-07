import { 
    BOOK_UPDATE,
    ENTERED_EMPTY_FIELD 
} from './types';

export const bookUpdate = ({ prop, value }) => {
    return {
        type: BOOK_UPDATE,
        payload: { prop, value }
    };
};

export const bookCreate = ({ author_name, published_date, book_title, book_image }) => {
    const pdate = moment(published_date);
    console.log(pdate);
    
    if((author_name === '') || (published_date === '') || (book_title === '') || (book_image === '')) {
        return (dispatch) => emptyFieldError(dispatch);    
    }
    
    console.log(author_name, published_date, book_title, book_image);
}

const emptyFieldError = (dispatch) => {
  dispatch({
    type: ENTERED_EMPTY_FIELD
  });
};