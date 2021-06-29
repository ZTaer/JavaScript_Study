import React from 'react';

/**
 * 第三方库
 */
// a) material-ui
import {  
    Button,
    Paper,
} from '@material-ui/core';

// b) redux
import { connect } from 'react-redux';
import {  
    changeDefaultTheme,
    changeDarkTheme,
    changeGreenTheme,
} from '../../redux/custom-theme/custom-theme.action';

const SwitchCustomTheme = ({
    changeDefaultTheme,
    changeDarkTheme,
    changeGreenTheme,   
}) => {
    return (
        <div>
           <Button variant="contained" color="primary" onClick={ ()=>changeDefaultTheme() }  >
             默认主题
           </Button> 
           <Button variant="contained" color="primary" onClick={ ()=>changeDarkTheme() }  >
             黑夜主题
           </Button> 
           <Button variant="contained" color="primary" onClick={ ()=>changeGreenTheme() }  >
             绿色主题
           </Button> 
           <Paper>
               测试主题
           </Paper>
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    changeDefaultTheme: ()=>dispatch(changeDefaultTheme()),
    changeDarkTheme: ()=>dispatch(changeDarkTheme()),
    changeGreenTheme: ()=>dispatch(changeGreenTheme()),
});



export default connect( null, mapDispatchToProps )(SwitchCustomTheme);
