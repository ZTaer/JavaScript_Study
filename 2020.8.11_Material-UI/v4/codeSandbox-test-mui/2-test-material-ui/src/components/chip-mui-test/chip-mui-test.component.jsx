import React from "react";
import { Chip, Avatar } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const ChipMuiTest = () => {

    /**
     * Chip纸片组件: 纸片组件是用来表示表单、属性或操作的紧凑元素( 完成笔记 )
     *      a) 属性:
     *          0. color属性: 纸片主题色
     *          1. label属性: 纸片文本内容
     *          2. variant属性: “default” 默认类型纸片 | "outlined" 为边框类型纸片
     *          3. icon属性: 头部ICON替换
     *          4. avatar属性: 头部ICON替换，比icon属性权重更高头部ICON替换，但是二者只能选其一
     *              a) 注意: icon属性与avatar属性: 二者只能使用其一, 否则将报错
     *          5. onDelete函数: 纸片尾部交互逻辑，当没有deleteIcon配合时，也会渲染默认ICON
     *          6. deleteIcon属性: 尾部ICON替换
     *          7. size属性: "small" 小尺寸 | "medium" 默认尺寸
     *          8. disabled属性: 禁用属性
     */

    const handleDelete = () => {
        console.log("info");
    };

    return(
        <div>
            <h4> 基本的Chip组件 </h4>
            <Chip 
                color="primary"
                label="我是纸片组件"
                icon={ <FaceIcon /> }
                disabled={true}
            />
            <Chip 
                color="primary"
                label="我是纸片组件"

                icon={ <FaceIcon /> }
                onDelete={  handleDelete } 
            />
            <h4> 功能齐全的Chip组件 </h4>
            <Chip 
                color="secondary"               // color属性: 纸片主题色
                label="我是纸片组件"             // label属性: 纸片文本内容
                variant="outlined"              // variant属性: “default” 默认类型纸片 | "outlined" 为边框类型纸片

               // icon={ <FaceIcon /> }        // icon属性: 头部ICON替换
                avatar={<Avatar>ZT</Avatar>}    // avatar属性: 头部ICON替换，比icon属性权重更高, 但是二者只能选其一

                onDelete={  handleDelete }      // onDelete函数: 纸片尾部交互逻辑，当没有deleteIcon配合时，也会渲染默认ICON
                deleteIcon={ <DoneIcon/> }      // deleteIcon属性: 尾部ICON替换
                size="small"                    // size属性: "small" 小尺寸 | "medium" 默认尺寸
            />
            <h4>Other</h4>
        </div>
    );
};

export default ChipMuiTest;