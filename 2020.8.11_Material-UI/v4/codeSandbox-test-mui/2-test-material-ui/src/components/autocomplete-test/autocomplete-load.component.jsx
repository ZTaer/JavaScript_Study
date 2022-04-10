import React,{ useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const AutocompleteLoading = () => {

    /**
     * Autocomplete加载状态( 完成笔记 )
     *      0. loading属性: 当options为空时，且loading为true时，下拉选项将渲染loading状态
     */

    const [ options, setOptions ] = useState([]);

    return(
        <div style={{ width: "270px", margin: "0px auto" }} >
            <Autocomplete 
                options={ options }
                getOptionLabel={ ( item ) => item.title }            
                renderInput = { ( props ) => <TextField {...props} label="异步加载测试..." variant="outlined" /> }
                loading={true}          // loading属性: 当options为空时，且loading为true时，下拉选项将渲染loading状态
            />
        </div>
    );
};

export default AutocompleteLoading;