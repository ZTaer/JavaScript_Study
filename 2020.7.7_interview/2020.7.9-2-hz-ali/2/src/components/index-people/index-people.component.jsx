import React,{useContext} from 'react';
import PeopleItem from '../people-item/people-item.component';

// context
import { PeopleContext } from '../../providers/people/people.provider';

const IndexPeople = ({target = ""}) => {

    const { peopleDateResult, getPeopleItem } = useContext(PeopleContext);
    const selectPeopleResultFind = getPeopleItem( peopleDateResult, target );

    return(
        <div>
            {
                selectPeopleResultFind.map( (cur,index)=><PeopleItem key={index} item={cur} /> )
            }
        </div>        
    );
};

export default IndexPeople;