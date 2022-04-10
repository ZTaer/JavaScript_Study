import { peopleActionTypes } from './people.types';

const INITIAL_STATE = {
    peopleDate: null,
    isFetching: true,
    errorMsg: null,
}

const peopleReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case peopleActionTypes.FETCH_PEOPLE_REDUX_THUNK_START:
            return {
                ...state,
                isFetching: true
            }
        case peopleActionTypes.FETCH_PEOPLE_SUCCESS:
            return {
                ...state,
                peopleDate: action.payload,
                isFetching: false,
            }
        case peopleActionTypes.FETCH_PEOPLE_FAILURE:
            return {
                ...state,
                isFetching: true,
                errorMsg: action.payload,
            }
    
        default:
            return state;
    }
}

export default peopleReducer;