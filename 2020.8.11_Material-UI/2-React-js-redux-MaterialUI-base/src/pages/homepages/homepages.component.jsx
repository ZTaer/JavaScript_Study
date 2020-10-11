import React,{useEffect} from 'react';

/**
 * 第三方库
 */
import {  
    Grid,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/**
 * 本地组件
 */
import BkmItem from '../../components/bkm-item/bkm-item.component';
import { selectBkmFilterData, selectErrorMsg, selectIsFetching } from '../../redux/bkm/bkm.selectors';
import { fetchBkmStart } from '../../redux/bkm/bkm.action';
import Spinner from '../../components/spinner/spinner.component';

/**
 * Css相关
 */
import { homepagesUseStyles } from './homepages.mui.styles';

const HomePages = (props) => {
    const { fetchBkmStart, bkmData, isFetching, errorMsg } = props;

    const classes = homepagesUseStyles();

    useEffect(()=>{
        if( !bkmData && !errorMsg ){
            fetchBkmStart();
        }
    },[]);

    return isFetching ? 
    ( <Spinner /> ) :
    (
        <Grid container  >
            {
                bkmData.map( cur => {
                    return(
                        <Grid item xs={6} sm={4} md={3} lg={2} className={ classes.proItem } key={cur.id}>
                            <BkmItem 
                                title = {cur.title}
                                linkUrl = {`/bkm/${cur.id}`}
                                imageUrl = {cur.imageUrl} 
                                itemId = {cur.id}
                            />
                        </Grid>
                    );
                } )
            }
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    bkmData: selectBkmFilterData,
    isFetching: selectIsFetching,
    errorMsg: selectErrorMsg, 
}); 

const mapDispatchToProps =  ( dispatch ) => ({
    fetchBkmStart: ()=>dispatch(fetchBkmStart()),   
})


export default connect( mapStateToProps, mapDispatchToProps )(HomePages);
