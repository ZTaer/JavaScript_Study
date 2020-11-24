import React from "react";

/**
 * TabsPanel组件: 配合Tabs组件，进行对应的组件展示( 完成笔记 )
 *    a) 核心属性: 
 *        0. hidden属性: true时代表组件隐藏，不渲染，false则相反 ( 核心属性 )
 *    b) 备注属性:
 *        0. id属性: id名称
 *        1. aria-labelledby属性: 用做备注
 */
const TabPanel = ( props ) => {

  const { 
    index, 
    value, 
    children,
    ...otherProps  
  } = props;

  return (
    <div
      // a) 核心属性: 
      //    hidden属性: true时代表组件隐藏，不渲染，false则相反 ( 核心属性 )
      hidden={ (value === index) ? false : true }

      // b) 备注属性:
      //    id属性: id名称
      //    aria-labelledby属性: 用做备注
      id={`simple-tabPanel-test-${index}`}
      aria-labelledby={`simple-tab-${index}`}

      // c) 其它属性:
      { ...otherProps }
    >
      { children }
    </div> 
  );
};

export default TabPanel;