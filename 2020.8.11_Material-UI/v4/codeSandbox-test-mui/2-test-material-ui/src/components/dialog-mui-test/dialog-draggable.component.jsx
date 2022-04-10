import React,{ useState } from "react";
import { 
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogContentText, 
  DialogActions,
  Button,
  Paper,
} from "@material-ui/core";
import Draggable from "react-draggable";

/**
 * Draggable组件: 可拖动函数库，使Dialog可拖动弹窗 ( 完成笔记 )
 *    a) 安装: yarn add react-draggable
 *    b) Draggable具体使用细节：( 等待研究 )
 *    c) 配合: Dialog的PaperComponent属性+固定逻辑+id对应即可进行拖动
 *    d) 固定逻辑: 如下
 */

function PaperComponent(props) {
  return (
    <Draggable 
      handle="#draggable-dialog-title"              // handle属性: 与弹窗id对应
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const DialogTransition = () => {

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
      <Dialog 
        open={ open } 
        onClose={ handleClose }
        keepMounted={false}

        disableBackdropClick={true}                     // disableBackdropClick属性: 禁用单击背景不促发onClose
        hideBackdrop={true}                             // hideBackDrop属性: 隐藏背景
      
        PaperComponent={PaperComponent}                 // PaperComponent属性: 用于呈现对话框主体的组件，配合拖动函数( 拖动： 核心之一 )
        aria-labelledby="draggable-dialog-title"        // aria-labelledby属性： 弹窗描述( 与ID同步 )

      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title" >弹窗标题 - 可拖动弹窗</DialogTitle>
        <DialogContent>
          <DialogContentText>
            弹窗内容, Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
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
    </div>
  );
};

export default DialogTransition;