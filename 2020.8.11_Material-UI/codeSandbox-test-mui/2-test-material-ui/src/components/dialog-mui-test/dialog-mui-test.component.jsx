import React,{ useState } from "react";
import { 
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogContentText, 
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import DialogTransition from "./dialog-transition.component";
import DialogDraggable from "./dialog-draggable.component";
import DialogText1 from "./dialog-text-1.component";

const DialogMuiTest = () => {

  /**
   * Dialog组件: 弹窗组件( 完成笔记 )
   *    a) 基本弹窗结构: 请依照python逻辑嵌套
   *        Dialog                       弹窗主容器                      
   *          --> DialogTitle            弹窗标题容器
   *          --> DialogContent          弹窗主要内容容器 - 放置弹窗主要内容
    *            ---> DialogContentText  弹窗主要内容文本容器
   *          --> DialogActions          弹窗交互容器 - 主要用于放置交互按钮等
   *    b) 解析:
   *        0. Dialog组件:
   *          a) 作用：弹窗容器
   *          b) 属性:
   *            0. open属性: 是否打开弹窗
   *            1. onClose属性: 关闭弹窗逻辑
   *            2. TransitionComponent属性: 使用Mui动画组件 ( 注意: 仅限于Material-UI特定组件 )
   *              a) 具体详情：请查看搜索"修改弹窗动画"
   *            3. keepMounted属性: true时弹窗即使关闭也会保留在dom中，false则弹窗关闭时，将在dom中消失
   *            4. aria-labelledby属性：弹窗描述, 通常与DialogTitle组件的id值同步
   *            5. aria-describedby属性: 弹窗详细描述
   *            6. fullScreen属性: 弹窗是否为全屏
   *            7. maxWidth属性: 操控弹窗大小, "xs", "sm", "md", "lg", "xl"
   *            8. PaperComponent属性: 用于呈现对话框主体的组件，配合拖动函数( 拖动： 核心之一 )
   *            9. scroll属性: “paper”仅限弹窗阅读模式 | "body"全屏阅读模式
   *          c) 注意：Dialog组件依赖于Modal函数库，故Model里的属性，Dialog也能使用一部分 
   *            0. hideBackDrop属性: 隐藏背景
   *            1. disableBackdropClick属性: 禁用单击背景不促发onClose
   *        1. DialogTitle组件: 弹窗标题
   *          a) 属性:
   *            0. id属性: 在配合拖动弹窗组件时，非常有用
   *        2. DialogContent组件: 弹窗主要内容容器
   *          a) 属性:
                0. dividers属性: 开启分割线
   *        3. DialogContentText组件: 弹窗主要内容文本容器
   *          a) 属性:
   *        4. DialogActions组件: 弹窗交互容器
   *          a) 属性:
   */

  /**
   * 逻辑区
   */
  const [ open, setOpen ] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="">
      <h4> 基本弹窗 </h4>
      <Dialog 
        open={ open } 
        onClose={ handleClose }
        fullScreen={false}
        maxWidth="md"

        aria-labelledby="alert-dialog-base-title"        // aria-labelledby属性： 弹窗描述
        aria-describedby="alert-dialog-base-description" // aria-describedby属性: 弹窗详细描述
      >
        <DialogTitle id="alert-dialog-base-title" >弹窗标题</DialogTitle>
        <DialogContent>
          <DialogContentText>
            弹窗内容, Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="邮箱"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={ handleClose }  >
            确定
          </Button>
          <Button onClick={ handleClose } >
            取消
          </Button>
        </DialogActions>
      </Dialog>

      <Button variant="contained" onClick={ handleOpen }  >
        打开弹窗
      </Button>

      <h4> 修改动画效果的弹窗 </h4>
      <DialogTransition />

      <h4>可拖动弹窗</h4>
      <DialogDraggable />

      <h4>大量文本弹窗</h4>
      <DialogText1 />
    </div>
  );
};

export default DialogMuiTest;