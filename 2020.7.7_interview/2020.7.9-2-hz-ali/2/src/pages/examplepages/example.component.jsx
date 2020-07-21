import React from 'react';
import People from '../../components/people/people.component';
import { Link } from 'react-router-dom';

const Example = () => {

    return(
        <div>
            <Link to={"/"} >主页</Link>
            <People />
        </div>
    );
};

export default Example;