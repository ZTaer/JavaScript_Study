import React,{ useState, useEffect } from 'react';

/**
 * 第三方库
 */
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  
    Button
} from '@material-ui/core';

/**
 * 本地组件
 */
import { fetchBkmItemStart } from '../../redux/bkm/bkm.action';
import { selectBkmItemSimpleData, selectBkmItemIsFetching } from '../../redux/bkm/bkm.selectors';
import Spinner from '../../components/spinner/spinner.component';

const BkmItemPages = (props) => {
    const {
        match: { params },
        history,
        fetchBkmItemStart,
        bkmItemData,
        isFetching,
    } = props;
    
    useEffect(()=>{
        fetchBkmItemStart(params.bkmItemId);
    },[]);

    return isFetching ? 
    ( <Spinner /> ) :
    (
        <div>
            <h1>
                名称: {bkmItemData.name}
            </h1> 
            <img style={{ width:"150px" }} src={bkmItemData.imageUrl} alt={bkmItemData.name} />
            <p>
                ID: {bkmItemData.id} <br/>
                名称: {bkmItemData.name} <br/>
                高度: {bkmItemData.weight} <br/>
                重量: {bkmItemData.height} <br/>
            </p>
            <Button variant="contained" onClick={()=>history.goBack()} color="default">
                返回
            </Button>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    bkmItemData: selectBkmItemSimpleData,
    isFetching: selectBkmItemIsFetching,
});

const mapDispatchToProps =  ( dispatch ) => ({
    fetchBkmItemStart: (data) => dispatch( fetchBkmItemStart(data) )    
})


export default connect( mapStateToProps, mapDispatchToProps )(withRouter(BkmItemPages)); 
