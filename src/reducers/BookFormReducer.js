import { 
    BOOK_UPDATE,
    ENTERED_EMPTY_FIELD 
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
        default:
            return state;
    }
};