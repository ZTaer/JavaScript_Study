import React from "react";
import "./typography-mui-test.styles.scss";
import { TypographyStyled } from "./typography-mui-test.styles";
/**
 * Typography组件: 文案组件，文字内容组件( 完成笔记 )
 *      a) Demon文档: https://material-ui.com/components/typography/
 *      b) API文档: https://material-ui.com/api/typography/
 *      c) variant属性: 在API文档中, 有全部实列 
 *      d) varint属性: 选择字体css默认样式
 *      e) component属性: 设定组件标签类型
 *      f) align属性: 文本排序方式left,right,center
 *      g) display属性: 与css3属性功能相同
 *      h) noWrap属性: 是否换行
 *      i) gutterBottom属性: 是否外边距
 *      j) paragraph属性: 是否外边距
 *      k) variantMapping属性: 根据variant属性，转换为指定'标签类型'
 */
import Typography from "@material-ui/core/Typography";

/**
 * makeStyles函数: 给组件赋予css样式( 完成笔记 )
 *      a) 修改组件css样式经过测试: 
 *          0. makeStyles：可以有效的修改组件样式
 *          1. scss: 不能完全有效的修改css样式
 *          2. styled-componentds: 可以有效的修改组件样式
 */
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    testTitleStyle: {
        color:"red",
        fontWeight: "bold",
    },
    testMakeStylesUseTypography: {
        fontWeight: "bold",
        fontSize:"10rem",
    }

});

const TypographyMuiTest = () => {

    const classes = useStyles();                    // makeStyles: 引入创建的css

    return(
        <div className="test-typography-container">
            <Typography
                variant = "h2"                      // varint属性: 选择字体css默认样式
                component = "p"                     // component属性: 设定组件标签类型
                align = "center"                    // align属性: 文本排序方式left,right,center
                display = "block"                   // display属性: 与css3属性功能相同
                noWrap = {false}                    // noWrap属性: 是否换行
                gutterBottom = {false}              // gutterBottom属性: 是否外边距
                paragraph = {true}                  // paragraph属性: 是否外边距
                className={classes.testTitleStyle}  // makeStyles: 使用创建的css
            >
                makeStyles测试文案
            </Typography>
            <Typography
                className="test-scss-use-typography"
                variant = "h1"
                variantMapping={{        
                    h1: 'a',             // variantMapping属性( 需variant属性配合 ): 当variant属性为'h1'时，则转换为'a'标签
                    h2: 'span'           // 当variant为h2时，则转换为'span'标签
                }}
            >
                Sass样式测试
            </Typography>
            <TypographyStyled
                variant = "h3"
                component = "h1"
            >
                Styled-components样式测试
            </TypographyStyled>
        </div>
    );
};

export default TypographyMuiTest;