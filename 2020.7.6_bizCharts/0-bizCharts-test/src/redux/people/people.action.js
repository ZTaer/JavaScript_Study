import { peopleActionTypes } from './people.types';
import axios from 'axios';

export const fetchPeopleReduxThunkStart = () => ({
    type: peopleActionTypes.FETCH_PEOPLE_REDUX_THUNK_START,
});

export const fetchPeopleReduxSagaStart = () => ({
    type: peopleActionTypes.FETCH_PEOPLE_REDUX_SAGA_START,
});

export const fetchPeopleSuccess = date => ({
    type: peopleActionTypes.FETCH_PEOPLE_SUCCESS,
    payload: date,
});

export const fetchPeopleFailure = date => ({
    type: peopleActionTypes.FETCH_PEOPLE_FAILURE,
    payload: date,
});

// redux-thunk
export const fetchPeopleAsync = () => {
    return dispatch => {
        const peopleAsync = async () => {
            try{
                dispatch( fetchPeopleReduxThunkStart() );
                const peopleDate = await axios("https://swapi.py4e.com/api/people/");
                dispatch( fetchPeopleSuccess(peopleDate.data) );
            }catch(err){
                dispatch( fetchPeopleFailure(err) );
            }
        }
        peopleAsync();
    }
}