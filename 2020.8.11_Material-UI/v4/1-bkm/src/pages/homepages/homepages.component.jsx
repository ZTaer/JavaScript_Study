import React,{useEffect,useCallback,useState} from 'react';
import IndexPeople from '../../components/index-people/index-people.component';

// redux-saga
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchPeopleReduxSagaStart } from '../../redux/people/people.action';
import {  
    changeDefaultTheme,
    changeDarkTheme,
    changeGreenTheme,
} from '../../redux/theme/theme.action';
import { selectThemeOrigin } from '../../redux/theme/theme.selectors';

// react-router-dom
import { Link } from 'react-router-dom';

// Material-UI
import {  
    Paper,
    Typography,
    Button,
} from '@material-ui/core';

const Index = ({ 
    fetchPeopleReduxSagaStart,
    changeDarkTheme,
    changeDefaultTheme, 
    changeGreenTheme,
    theme,
}) => {

    const test = ()=>{
        fetchPeopleReduxSagaStart();
    }

    useEffect(()=>{
        test();
    },[test]);

    return (
        <div className="index">
            <Link to={"/example"} >example</Link>
            <IndexPeople target={"L"} />
            <p style={{
                color: "fff",
                fontSize: "1rem",
                letterSpacing: "1px",
            }} >
                0. 挂载: constructor() --》 componentWillMount() --》 render() --》 componentDidMount()<br/>
                1. 更新: shouldComponentUpdate() --》 render() --》 componentDidUpdate()<br/>
                2. 卸载: componetWillUnmout()<br/>
            </p>
            <Button variant="contained" color="primary" onClick={()=>changeDarkTheme()} >
              改变Dark主题
            </Button>
            <Button variant="contained" color="primary" onClick={()=>changeDefaultTheme()} >
              改变Default主题
            </Button>
            <Button variant="contained" color="primary" onClick={()=>changeGreenTheme()} >
              改变Green主题
            </Button>
            <Paper>
                <Typography>
                    切换不同的主题
                </Typography>
            </Paper>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    theme: selectThemeOrigin 
});


const mapDispatchToProps = dispatch => ({
    fetchPeopleReduxSagaStart: ()=> dispatch(fetchPeopleReduxSagaStart()), 
    changeDefaultTheme: ()=>dispatch(changeDefaultTheme()),
    changeDarkTheme: ()=>dispatch(changeDarkTheme()),
    changeGreenTheme: ()=>dispatch(changeGreenTheme()),
});

export default connect( mapStateToProps,mapDispatchToProps )(Index);