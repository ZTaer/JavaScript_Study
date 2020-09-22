import React from 'react';
import { PeopleContainerStyled } from './people.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPeopleResult,selectPeopleIsFetching } from '../../redux/people/people.selectors';

import Spinner from '../spinner/spinner.component';
import PeopleItem from '../people-item/people-item.component';

const People = ({ people, isFetching}) => {

    return isFetching ?
    <Spinner /> :
    (
        <PeopleContainerStyled>
            {
                people.map( (cur,index) => {
                    return (
                        <PeopleItem 
                            item = { cur }
                            key = { index }
                        />
                    );
                } )
            }
        </PeopleContainerStyled>
    ) 
    
}

const mapStateToProps = createStructuredSelector({
    people: selectPeopleResult,
    isFetching: selectPeopleIsFetching,
});

export default connect( mapStateToProps )(People);