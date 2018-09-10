import { 
    BOOK_UPDATE,
    ENTERED_EMPTY_FIELD,
    DATE_FIELD_ERROR,
    BOOK_CREATE,
    BOOK_SAVE_SUCCESS,
    BOOK_SAVE_CANCEL
} from "../actions/types";

const INITIAL_STATE = {
    author_name: '',
    published_date: '',
    book_title: '',
    book_image: '',
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BOOK_UPDATE:
            // action.payload === { prop: 'name', value: 'jane' } 
            return { ...state, [action.payload.prop]: action.payload.value };
        case ENTERED_EMPTY_FIELD:
            return { ...state, error: 'Empty Field' };
        case DATE_FIELD_ERROR:
            return { ...state, error: 'Invalid Date'};
        case BOOK_CREATE:
            return INITIAL_STATE;
        case BOOK_SAVE_SUCCESS:
            return INITIAL_STATE;
        case BOOK_SAVE_CANCEL:
            return INITIAL_STATE;
        default:
            return state;
    }
};