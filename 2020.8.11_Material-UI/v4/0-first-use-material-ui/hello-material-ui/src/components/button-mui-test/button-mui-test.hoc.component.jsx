import React from "react";
import Button from "@material-ui/core/Button";

// 目的只是为了扩展visible属性，来决定是否渲染组件
const ButtonHoc = (props) => {
    const { children, visible=true, ...otherProps }  = props;

    return visible ? 
    (
        <Button
            {...otherProps}
        >
            {children}
        </Button>
    ) :
    null;
};

export default ButtonHoc;

