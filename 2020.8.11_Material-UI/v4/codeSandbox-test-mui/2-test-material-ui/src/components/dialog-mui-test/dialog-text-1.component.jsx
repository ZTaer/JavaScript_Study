import React,{ useState } from "react";
import { 
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogContentText, 
  DialogActions,
  Button,
} from "@material-ui/core";

const DialogText1 = () => {

  /**
   * 逻辑区
   */
  const [ open, setOpen ] = useState(false);
  const [ scroll, setScroll ] = useState("paper");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    console.log("open-触发");
  };

  const handleChangeText = ( text ) => {
    setScroll(text);
    console.log("scroll-触发");
  };

  /**
   * Dialog弹窗：文本模式( 完成笔记 )
   *    a) 属性:
   *      0. scroll属性: “paper”仅限弹窗阅读模式 | "body"全屏阅读模式
   */

  return (
    <div className="">
      <Dialog 
        open={ open } 
        onClose={ handleClose }
        fullScreen={false}
        maxWidth="sm"
        scroll={scroll}                                  // scroll属性: “paper” || "body" 二种浏览模式

        aria-labelledby="alert-dialog-base-title"        // aria-labelledby属性： 弹窗描述
        aria-describedby="alert-dialog-base-description" // aria-describedby属性: 弹窗详细描述
      >
        <DialogTitle id="alert-dialog-base-title" >弹窗标题</DialogTitle>
        <DialogContent 
          dividers={true}                                // dividers属性: 开启分割线
        >
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
              { // 生成文本
                [...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')
              }
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

      <Button variant="contained" onClick={ () => { handleOpen(); handleChangeText("paper"); } } >
        打开弹窗 - paper
      </Button>
      <Button variant="contained" onClick={ () => { handleOpen(); handleChangeText("body"); } } >
        打开弹窗 - body
      </Button>
    </div>
  );
};

export default DialogText1;