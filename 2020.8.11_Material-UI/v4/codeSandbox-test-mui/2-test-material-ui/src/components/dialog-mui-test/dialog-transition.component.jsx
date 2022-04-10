import React,{ useState } from "react";
import { 
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogContentText, 
  DialogActions,
  Button,

  Slide,
} from "@material-ui/core";

/**
 * 修改弹窗动画( 完成笔记 )
 * Slide动画组件: 配合其他组件改变动画过渡效果( 完成笔记 )
 *    0. React.forwardRef作用: 方便传递ref参数，其实并不常用，但在一些通用组件中较为常用。
 *        a) 更多参考: https://zh-hans.reactjs.org/docs/forwarding-refs.html
 *    1. 固定逻辑: 下方为构建动画组件的固定逻辑 
 */
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
        TransitionComponent={ Transition }    // TransitionComponent属性: 使用Slide动画 ( 注意: 仅限于Material-UI特定组件 )
        keepMounted={false}                   // keepMounted属性: true时弹窗即使关闭也会保留在dom中，false则弹窗关闭时，将在dom中消失

        aria-labelledby="alert-dialog-slide-title"        // aria-labelledby属性： 弹窗描述
        aria-describedby="alert-dialog-slide-description" // aria-describedby属性: 弹窗详细描述
      >
        <DialogTitle id="alert-dialog-slide-title" >弹窗标题 - 动画弹窗</DialogTitle>
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