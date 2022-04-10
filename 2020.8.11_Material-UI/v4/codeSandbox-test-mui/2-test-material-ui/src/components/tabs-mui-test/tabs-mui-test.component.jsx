import React,{ useState } from "react";
import { AppBar, Tabs, Tab, Typography  } from "@material-ui/core";
import { moreChoose_utils } from "./tabs-mui-test.utils";
import TabPanel from "./tab-panel.child.component";
import PhoneIcon from "@material-ui/icons/Phone";

const TabsMuiTest = () => {

  /**
   * Tabs组件: 标签组件解析( 完成笔记 )
   *    a) 基本属性
   *        0. value属性: 当前 Tabs 属性值 
   *        1. onChange函数: 固定逻辑，用于改变 value值 ( 注意: 函数逻辑对应value属性 )
   *        2. component属性: 改变标签类型
   *        3. variant属性: tabs渲染类型, 
   *            a) "fullWidth"宽度100%渲染，
   *            b) "scrollable"可滚动渲染, 
   *            c) "standard"默认渲染
   *    b) 备注属性
   *        0. aria-label属性: 普通的备注
   *        1. aria-labelledby属性: 归属tab备注
   *    c) 功能属性
   *        0. selectionFollowsFocus属性: 跟随方向键，挪动切换标签
   *        1. orientation属性: tabs选项排序方向操控，
   *            a) "horizontal"水平排序方向，
   *            b) "vertical"垂直排序方向
   *        2. scrollButtons属性: 滚动方式
   *            a) "on"参数: 一直显示滚动按钮
   *            b) "off"参数: 不显示滚动按钮
   *            c) "auto"参数: 自动显示滚动按钮
   *    d) 样式修改属性
   *        0. centered属性: 是否居中排序
   *        1. classes属性: 定制化所需
   *        2. indicatorColor属性: tabs选项标识下划线颜色设定
   *        3. textColor属性: tabs字体颜色
   */

  /**
   * Tab组件: 配合Tabs组件( 完成笔记 )
   *    0. label属性: label名称
   *    1. value值: "默认值自动枚举0~x", 当然也可以手动设定
   *    2. wrapped属性: true时允许换行文本，默认是不允许换行的
   *    3. icon属性: 渲染标签ICON
   *    4. aria-label属性: 用作备注
   *    5. disabled属性: 禁用标签
   *    6. disableFocusRipple属性: 禁用键盘聚焦动画
   *    7. disableRipple属性: 禁用波纹效果
   */

  // 0. 设定Tabs默认值
  //    a) 当Tab无value时: 默认值无0,1,2枚举
  //    b) 当Tab手动设定value时: 则Tabs的value将以手动设定为准
  const [ tabsValue, setTabsValue ] = useState("ccc");  
  const [ moreValue, setMoreValue ] = useState([]);

  /**
   * 逻辑区
   */
  // 1. 固定逻辑: 操控Tabs的value值
  const handleChangeTabs = ( event, newValue ) => {
    setTabsValue( newValue );
    setMoreValue( moreChoose_utils( newValue, moreValue ) );  // 额外: 多选项参数( 并非必备逻辑，请无视 )
  };

  // 2. Tab属性备注
  //    a) 作用: 主要用于备注,  id声明
  const allProps = ( index ) => {
    return {
      id: `scroll-auto-tab-${index}`,
      "aria-controls": `scroll-auto-xxxx-${index}`
    }
  };
  
  return(
    <div>
      <h4> 基本的Tabs </h4>
      <AppBar position="static" >
        <Tabs 
          value={ tabsValue } 
          onChange={ handleChangeTabs }
          variant="fullWidth" 
          centered
        >
          <Tab 
            label="选项一" 
            value="abc"
            disabled={true}

          />
          <Tab label="选项二" value="ccc" />
          <Tab label="选项三" value="xxx" />
        </Tabs>
      </AppBar>

      <div style={{ margin:"1rem" }} > 根据Tabs做渲染逻辑 ↓ </div>

      <TabPanel value={ tabsValue } index="abc" >
          ABC
      </TabPanel>
      <TabPanel value={ tabsValue } index="ccc" >
          CCC
      </TabPanel>
      <TabPanel value={ tabsValue } index="xxx" >
          XXX
      </TabPanel>

      <h4 className=""> 可滚动的标签 </h4>
      <AppBar position="static">
        <Tabs 
          value={0} 

         // 核心: 滚动属性 
         //   0. scrollButtons属性: 滚动方式
         //     a) "on"参数: 一直显示滚动按钮
         //     b) "off"参数: 不显示滚动按钮
         //     c) "auto"参数: 自动显示滚动按钮
          scrollButtons="on"
          aria-label="可滚动标签" 
          
          selectionFollowsFocus={true}   // selectionFollowsFocus属性: 跟随方向键，挪动切换标签
          orientation="horizontal"       // orientation属性: tabs选项排序方向操控，"horizontal"水平排序方向，"vertical"垂直排序方向
          indicatorColor="secondary"     // indicatorColor属性: tabs选项标识下划线颜色设定
          textColor="secondary"          // textColor属性: tabs字体颜色
          variant="scrollable"           // variant属性: tabs渲染类型, "fullWidth"宽度100%渲染，"scrollable"可滚动渲染, "standard"默认渲染
        >
          <Tab 
            label="TelPhone"        // label属性: 标签名称
            icon={ <PhoneIcon /> }  // icon属性: 渲染标签ICON
            aria-label="phone"      // aria-label属性: 用作按钮备注
            {...allProps( 0 )}      // allProps函数作用: 输出添加都个备注属性
          />
          <Tab label="选项2" />
          <Tab label="选项3" />
          <Tab label="选项4" />
          <Tab label="选项5" />
          <Tab label="选项6" />
          <Tab label="选项7" />
          <Tab label="选项8" />
        </Tabs>
      </AppBar>

    </div>
  );  
};

export default TabsMuiTest;