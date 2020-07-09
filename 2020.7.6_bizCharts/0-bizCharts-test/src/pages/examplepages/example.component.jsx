import React,{useCallback } from 'react';
import People from '../../components/people/people.component';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchPeopleAsync } from '../../redux/people/people.action';
import { useEffect } from 'react';

const Example = ({fetchPeopleAsync}) => {

    // 性能优化一下
    const fetchDate = useCallback( ()=>{
       fetchPeopleAsync();
    },[fetchPeopleAsync] );

    useEffect(()=>{
        fetchDate();
    },[fetchDate]);

    return(
        <div>
            <Link to={"/"} >主页</Link>
            <People />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchPeopleAsync: () => dispatch(fetchPeopleAsync()),
});

export default connect( null,mapDispatchToProps )(Example);