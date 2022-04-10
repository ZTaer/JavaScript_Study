import React from "react";
import { LinearProgress } from "@material-ui/core";
import TooltipMuiTest from "../../components/tooltip-mui-test/tooltip-mui-test.component";
import TabsMuiTest from "../../components/tabs-mui-test/tabs-mui-test.component";
import BreadcrumbsMui from "../../components/breadcrumbs-mui-test/breadcrumbs-mui.component";
import HiddenMuiTest from "../../components/hidden-mui-test/hidden-mui-test.component";
import SnackbarMuiTest from "../../components/snackbar-mui-test/snackbar-mui-test.component";
import AccorditonMui from "../../components/accordion/accordion-mui.component";
import AppbarMuiTest from "../../components/appbar-mui-test/appbar-mui-test.component";
import DialogMuiTest from "../../components/dialog-mui-test/dialog-mui-test.component";
import TextFieldMuiTest from "../../components/textField-mui-test/textField-mui-test.component";
import ListMUiTest from "../../components/list-mui-test/list-mui-test.component";
import MenuMuiTest from "../../components/menu-mui-test/menu-mui-test.component";
import SelectMuiTest from "../../components/select-mui-test/select-mui-test.component";
import ChipMuiTest from "../../components/chip-mui-test/chip-mui-test.component";
import BackdropMuiTest from "../../components/backdrop-mui-test/backdrop-mui-test.component";
import BadgeMuiTest from "../../components/badge-mui-test/badge-mui-test.component";
import SliderMuiTest from "../../components/slider-mui-test/slider-mui-test.component";
import StepperMuiTest from "../../components/stepper-mui-test/stepper-mui-test.component";
import RadioMuiTest from "../../components/radio-mui-test/radio-mui-test.component";
import DrawerMuiTest from "../../components/drawer-mui-test/drawer-mui-test.component";
import PaginationTest from "../../components/pagination-mui-test/pagination-test.component";
import RatingMuiTest from "../../components/rating-mui-test/rating-mui-test.component";
import AutocompleteTest from "../../components/autocomplete-test/autocomplete-test.component";

const TestPages = () => {
  return (
    <div>
      <h2>进度条</h2>
      <LinearProgress />

      <h2>Tooltip组件: 提示框( 完成笔记 )</h2>
      <TooltipMuiTest />

      <h2> Tabs组件: 标签( 完成笔记 ) </h2>
      <TabsMuiTest />      

      <h2> Breadcrumbs组件: 面包屑导航( 完成笔记 ) </h2>
      <BreadcrumbsMui />

      <h2> Hidden组件: 隐藏辅助组件( 完成笔记 ) </h2>
      <HiddenMuiTest />

      <h2> Snackbar组件: 消息条( 完成笔记 ) </h2>
      <SnackbarMuiTest />

      <h2> Accorditon组件: 手风琴( 完成笔记 ) </h2>
      <AccorditonMui />

      <h2 className=""> Appbar组件: 导航栏组件( 等待研究 ) </h2>
      <AppbarMuiTest />

      <h2 className=""> Dialog组件: 弹窗( 完成笔记 ) </h2>
      <DialogMuiTest />

     <h2 className=""> TextField组件: 表单输入框( 完成笔记 ) </h2> 
     <TextFieldMuiTest />

     <h2 className=""> List组件: 多个选项排序方式( 完成笔记 ) </h2> 
     <ListMUiTest />

     <h2 className=""> Menu组件: 折叠菜单组件( 完成笔记 ) </h2> 
     <MenuMuiTest />

     <h2 className=""> Select组件: 下拉选项组件( 完成笔记 ) </h2> 
     <SelectMuiTest />

     <h2> Chip纸片组件: 纸片组件是用来表示表单、属性或操作的紧凑元素( 完成笔记 ) </h2>
     <ChipMuiTest />

     <h2> Backdrop组件：背景暗化( 完成笔记 ) </h2>
     <BackdropMuiTest />

     <h2> badge组件：徽章( 完成笔记 ) </h2>
     <BadgeMuiTest />

     <h2> Slider组件: 滑杆组件( 如: 声音调控所需 | 完成笔记 ) </h2>
     <SliderMuiTest />

     <h2> Stepper组件: 步骤组件( 完成笔记 ) </h2>
     <StepperMuiTest />

     <h2> Radio组件: 单选框组件( 完成笔记 ) </h2>
     <RadioMuiTest />

     <h2> Drawer组件: 抽屉组件( 暂停笔记 ) </h2>
     <DrawerMuiTest />

     <h2> Pagination组件: 翻页组件( 完成笔记 ) </h2>
     <PaginationTest />

     <h2> Rating组件: 评分组件( 完成笔记 ) </h2>
     <RatingMuiTest />

     <h2> Autocomplete组件: 自动完成文本输入组件( 完成笔记 ) </h2>
     <AutocompleteTest />

     <h2>1</h2>
    </div>
  );
};

export default TestPages;
