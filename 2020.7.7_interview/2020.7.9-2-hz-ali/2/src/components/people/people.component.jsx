import React,{useContext} from 'react';
import { PeopleContainerStyled } from './people.styles';

import Spinner from '../spinner/spinner.component';
import PeopleItem from '../people-item/people-item.component';

// context
import { PeopleContext } from '../../providers/people/people.provider';

const People = () => {
    const { peopleDateResult, isFetching } = useContext( PeopleContext );
    const people = peopleDateResult;

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

export default People;