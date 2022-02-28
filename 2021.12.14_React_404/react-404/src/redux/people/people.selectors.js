import { createSelector } from 'reselect';

const selectPeople = state => state.people;

export const selectPeopleOrigin = createSelector(
    [selectPeople],
    people=>people 
);

export const selectPeopleResult = createSelector(
    [selectPeopleOrigin],
    people=>{
        return people.peopleDate ? people.peopleDate.results : null
    }
);

// 根据名称获取数据
export const selectPeopleResultFind = otherProps => createSelector(
    [selectPeopleResult],
    props => {
        const { target } = otherProps;
        if( props && target ){
            return props.filter( (item)=>{
                return item.name.includes(target);
            } );
        }
        return [];
    }
);

export const selectPeopleIsFetching = createSelector(
    [selectPeopleOrigin],
    props => {
        return props.isFetching;
    }
);

export const selectPeopleErrorMsg = createSelector(
    [selectPeopleOrigin],
    props => {
        return props.errorMsg;
    }
);