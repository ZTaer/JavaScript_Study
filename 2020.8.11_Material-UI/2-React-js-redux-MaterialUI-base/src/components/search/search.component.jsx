import React,{ useState } from 'react';

/**
 * 第三方库
 */
import {  
    InputBase,
} from '@material-ui/core';

import {  
    Search as SearchIcon,
} from '@material-ui/icons';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
 
/**
 * 本地组件
 */
import { searchInputNameBkm } from '../../redux/bkm/bkm.action';

/**
 * CSS
 */
import { searchStyles } from './search.mui.styles';

const Search = ({ searchInputNameBkm, history, match }) => {
    const classes = searchStyles();
    const [search, setSearch] = useState("")

    /**
     * 逻辑区
     */
    const handleSearchValue = (event) => {
        setSearch( event.target.value );
        if( !match.isExact ){
            history.push("/");
        }
        searchInputNameBkm( event.target.value );
    };

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase
                value={search}
                onChange={handleSearchValue} 
                placeholder="搜索名称..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
};

const mapDispatchToProps =  ( dispatch ) => ({
    searchInputNameBkm: ( data ) => dispatch( searchInputNameBkm(data) ),
})

export default connect( null, mapDispatchToProps )( withRouter(Search)); 
