import React from 'react';
import { connect } from 'react-redux';
import { selectPeopleResultFind } from '../../redux/people/people.selectors';

import PeopleItem from '../people-item/people-item.component';

const IndexPeople = ({target = "", selectPeopleResultFind}) => {
    return(
        <div>
            {
                selectPeopleResultFind.map( (cur,index)=><PeopleItem key={index} item={cur} /> )
            }
        </div>        
    );
};

// redux mapStateToProps 传输参数正常
const mapStateToProps = ( state,ownProps ) => ({
    selectPeopleResultFind: selectPeopleResultFind(ownProps)(state),    
});

export default connect( mapStateToProps )(IndexPeople);