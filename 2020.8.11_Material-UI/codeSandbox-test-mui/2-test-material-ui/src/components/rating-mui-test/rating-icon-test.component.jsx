import React from "react";
import { Rating } from "@material-ui/lab";

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

/**
 * Rating组件: 高度自定义Rating组件的ICON( 完成笔记 )
 *      0. getLabelText函数: 获取迭代的label
 *      1. IconContainerComponent函数: 迭代渲染对应icon，固定逻辑
 */

const RatingIconTest = () => {


    // a) 准备好icon以及label( label并非是必需品 )
    const customIcons = {
        1: {
          icon: <SentimentVeryDissatisfiedIcon />,
          label: 'Very Dissatisfied',
        },
        2: {
          icon: <SentimentDissatisfiedIcon />,
          label: 'Dissatisfied',
        },
        3: {
          icon: <SentimentSatisfiedIcon />,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon />,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon />,
          label: 'Very Satisfied',
        },
    };
      
    // b) 固定逻辑: 配合Rating组件的IconContainerComponent属性，用于索引渲染对应icon
    const IconContainer = (props) => {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
    }

    return (
        <div className="">
            <Rating
                name="customized-div-icons"
                defaultValue={2}
                getLabelText={(value) => customIcons[value].label}      // getLabelText函数: 获取迭代的label
                IconContainerComponent={IconContainer}                  // IconContainerComponent函数: 迭代渲染对应icon，固定逻辑
            />
        </div>
    );
};

export default RatingIconTest;