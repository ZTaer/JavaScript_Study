import React from "react";
import "./button-mui-test.styles.scss";

import { ButtonExp } from "./button-mui-test.styles";
import ButtonHoc from "./button-mui-test.hoc.component";

/**
 * Material-UI
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * 0. Button组件: 按钮button( 完成笔记 )
 *      a) 默认为文字按钮
 *      b) variant: 设定按钮类型
 *          0. contained: 实体按钮
 *          1. outlined: 边框按钮
 *          2. 默认为文字按钮 
 *      c) disabled: 禁用按钮
 *      d) disabledElevation: 禁用阴影
 *      e) component: 转换标签类型
 *      f) size: 控制按钮大小
 *          0. small, medium, large
 *      g) href: 可直接在按钮加入href跳转链接属性
 *      h) startIcon: icon嵌套在按钮，头部
 *      i) endIcon: icon嵌套在按钮，尾部
 * 
 *  1. 上传按钮
 *      a) 核心: input的id === label的htmlFor, input在隐藏, 那么label下的标签就有自定义样式的上传功能
 *      b) input标签: 
 *          0. type='file': 设定为上传文件表单
 *          1. accept="": 设定上传文件类型
 *          2. multiple: 是否为多选文件上传
 *  2. IconButton组件: 与icon配合，icon按钮
 *      a) 安装icon核心: yarn add @material-ui/icons
 *      b) 使用方式: 导入对应icon嵌套在IconButton中 
 *      c) 属性:
 *          0. aria-label属性: 注释icon类型
 *          1. size属性: small,medium,large大小控制
 *          2. edge属性: 偏移位置'start','end'
 *  3. 颜色主题:
 *      a) "inherit": 默认为黑色
 */

import { Button, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyle = makeStyles({
    uploadInput: {
        display: "none",
    }
});

const ButtonUiTest = () => {

    const classes = useStyle();

    return(
        <div className="button-mui-test">
            <Button 
                variant = "contained"   // 实体按钮
                color = "primary"       // 颜色主题
                disableElevation        // 禁用阴影
                disabled                // 禁用按钮
                component = "a"         // 转标签类型
                href="#"                // 可以直接使用href属性
                size="large"            // 按钮大小 - small, medium, large
                startIcon={<Delete />}  // 按钮中嵌套icon: 放置开头位置
                endIcon={<Delete />}    // 按钮中嵌套icon: 放置尾部位置
            >
                实心按钮
            </Button>

            <Button 
                color = "primary"
            >
                文字按钮
            </Button>

            <Button
                variant = "outlined"     // 边框按钮
                color = "secondary"
            >
                边框按钮
            </Button>

             <input
                accept="image/*"                        // 仅限图片类型
                id="contained-button-file"              // 对应下方label的id名称( 核心绑定 )
                multiple={true}                         // 是否为多选文件
                type="file"                             // 设定为上传文件类型表单
                className={classes.uploadInput}         // 使用css隐藏表单
            />
            <label 
                htmlFor="contained-button-file"         // 与上方input的id对应( 核心绑定 )
            >     
                <Button 
                    variant="contained" 
                    color="primary" 
                    component="span">
                上传按钮
                </Button>
            </label>

            <p>
                # 下方为icon按钮演示<br/>
                IconButton
            </p>
            <IconButton
                aria-label="delete"
                size="small"
            >
                <Delete 
                    fontSize="large"        // 控制icon大小: small, medium, large 
                    color="error"
                />
            </IconButton>

            <p>
                # ButtonExp: 扩展ButtonExp功能
            </p>
            <ButtonExp 
                variant="contained"
                color="primary"
                visible="false"
            >
                测试visible属性
            </ButtonExp>
            <ButtonHoc
                variant="contained"
                color="primary"
                visible={true}
            >
                测试Hoc版本的visible属性
            </ButtonHoc>


        </div>
    );
}
export default ButtonUiTest;