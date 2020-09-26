import React from 'react';

/**
 * 第三方库
 */
import { withRouter } from 'react-router-dom';

import {  
    Button
} from '@material-ui/core';

const BkmItemPages = (props) => {
    console.log('props :>> ', props);
    const {
        match: { params },
        history
    } = props;

    return (
        <div>
            <h1>
                ItemId: {params.bkmItemId}
            </h1> 
            <Button variant="contained" onClick={()=>history.goBack()} color="default">
                返回
            </Button>
        </div>
    )
};

export default withRouter(BkmItemPages); 
