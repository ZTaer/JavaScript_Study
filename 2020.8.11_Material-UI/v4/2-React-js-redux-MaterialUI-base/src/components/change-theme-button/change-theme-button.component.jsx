import React from 'react';

/**
 * 第三方库
 */
import {  
    IconButton,
} from '@material-ui/core';
import {  
    Brightness7 as Brightness7Icon,
    Brightness4 as Brightness4Icon,
} from '@material-ui/icons';
import { 
    connect 
} from 'react-redux';
import { 
    createStructuredSelector 
} from 'reselect';

/**
 * 本地组件
 */
import { 
    selectCustomThemeOrigin 
} from '../../redux/custom-theme/custom-theme.selectors';
import {  
    changeDefaultTheme,
    changeDarkTheme,
} from '../../redux/custom-theme/custom-theme.action';


const ChangeThemeButton = (props) => {

    const {
        changeDarkTheme,
        changeDefaultTheme,
        customTheme,
    } = props;

    return customTheme === "DEFAULT_THEME" ?
    (
        <IconButton aria-label="切换夜晚模式主题" color="inherit" onClick={ ()=>changeDarkTheme() } >
            <Brightness4Icon />
        </IconButton>
    ) :
    (
        <IconButton aria-label="切换白天模式主题" color="inherit" onClick={ ()=>changeDefaultTheme() } >
            <Brightness7Icon />
        </IconButton>   
    );
};

const mapStateToProps = createStructuredSelector({
    customTheme: selectCustomThemeOrigin, 
});

const mapDispatchToProps = dispatch => ({
    changeDefaultTheme: ()=>dispatch(changeDefaultTheme()),
    changeDarkTheme: ()=>dispatch(changeDarkTheme()),
});

export default connect( mapStateToProps, mapDispatchToProps )(ChangeThemeButton);
