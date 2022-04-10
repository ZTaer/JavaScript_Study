import React,{ useState } from "react";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {
    Box,
    Typography,
} from "@material-ui/core";
import RatingIconTest from "./rating-icon-test.component";

/**
 * 自定义: Rating组件样式( 完成笔记 )
 *      注意: 这里只修改了颜色
 */
const useStyles_ForRating = makeStyles({
    iconFilled: {
        color: '#ff3d47',
    },
    iconHover: {
        color: '#ff6d75',
    },
});

const RatingMuiTest = () => {

    /**
     * Rating组件: 评分组件( 完成笔记 )
     *      0. name属性: h5属性( 必填 )
     *      1. value属性: 分值, 1代表1颗星, 0.5代表半颗星
     *      2. onChange属性: 改变value值，固定逻辑
     *      3. readOnly属性: 是否开启只读
     *      4. disabled属性: 是否禁用
     *      5. precision属性: 通常为0.5, 使允许出现半颗星
     *      6. max属性: 操控ICON数量
     *      7. size属性: "small"小尺寸 | "medium"中尺寸( 默认 ) | "large"大尺寸 
     *      8. icon属性: 自定义ICON
     *      9. classes属性: 修改组件样式
     */

    const classes = {
        useStyles_ForRating: useStyles_ForRating(),
    }

    const [ ratingValue, setRatingValue ] = useState(null);

    // a) 修改value值，固定逻辑
    const handleChangeRatingValue = ( event, newValue ) => {
        setRatingValue( newValue );
    };

    return(
        <div>
            <h4 className="">基本的Rating组件</h4>
            <Rating
                name="simple-controlled"                 // name属性: h5属性( 必填 )
                value={ratingValue}                      // value属性: 分值, 1代表1颗星, 0.5代表半颗星
                onChange={ handleChangeRatingValue }     // onChange属性: 改变value值，固定逻辑
                readOnly={false}                         // readOnly属性: 是否开启只读
                disabled={false}                         // disabled属性: 是否禁用
                precision={0.5}                          // precision属性: 通常为0.5, 使允许出现半颗星
                max={10}                                 // max属性: 操控ICON数量
                size="small"                             // size属性: "small"小尺寸 | "medium"中尺寸( 默认 ) | "large"大尺寸 
            />
            { ratingValue }

           <h4>Rating通常配合的容器组件</h4>
            <Box 
                borderColor="transparent" 
                component="fieldset" 
                mb={3} 
            >
                <Typography component="legend" > 我是备注 </Typography>
                <Rating name="container-rating" />
            </Box>

           <h4>自定义Rating组件ICON</h4>
            <Rating
                name="custom-icon-controlled"
                value={ratingValue}
                onChange={ handleChangeRatingValue }
                max={10}
                precision={0.5}

                icon={ <FavoriteIcon /> }                   // icon属性: 自定义ICON
                classes={ classes.useStyles_ForRating }     // classes属性: 修改组件样式
            />

            <h4>高度自定义Rating组件的ICON</h4>
            <RatingIconTest />
        </div>
    );
};

export default RatingMuiTest;