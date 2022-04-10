import React,{ useState } from "react";
import { Snackbar, Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SuccessIcon  from "@material-ui/icons/KingBed";
import MoreSnackbar from "./moreSnackbar.child.component";

import Slide from "@material-ui/core/Slide";

/**
 * @material-ui/lab实验库( 完成笔记 )
 *    a) 作用: 包含一些实验性组件，暂时不能加入core核心库
 */
import { Alert, AlertTitle } from "@material-ui/lab";

const SnackbarMuiTest = () => {

  const [ open, setOpen ] = useState(false);

  /**
   * 逻辑区
   */
  const handleOpenSnackbar = () => {
    setOpen(true);
  };

  const handleCloseSnackbar = () => {
    setOpen( false );
  };

  /**
   * Snackbar组件: 单行提示框( 完成笔记 )
   * SnackbarContent组件: 多行提示框( 属性部分Snackbar组件相同 )
   *    0. 常用:
   *      a) open属性: 决定是否显示提示框
   *      b) onClose函数: 关闭逻辑
   *      c) message属性: 提示信息，可以是字符串，也可以是组件片段
   *      d) autoHideDuration时间: 设定弹窗显示时间( 单位ms - 毫秒 )
   *        0. 注意: 当鼠标悬停在弹窗上时，弹窗不关闭
   *      e) anchorOrigin属性: 操控弹窗位置
   *        0. {
   *          horizontal属性: "left" | "right" | "center" 操控水平方向
   *          vertical属性: "top" | "bottom"              操控垂直方向
   *        }
   *      f) action属性: 提示框尾部放置组件
   *      g) disableWindowBlurListener属性: true时，将严格按照时间周期来关闭提示框，false时,时间周期在不聚焦页面情况下时间是暂停的( 注意: 时间没有过期，弹窗不会消失 )
   *    1. 动画属性:
   *      a) TransitionComponent属性: 放置MUI动画类型
   *    2. 更多api参数请参考: https://material-ui.com/zh/api/snackbar/
   *      
   */

  /**
   * React.Fragment组件容器( 完成笔记 )
   *    a) 作用: 通常用于嵌套一小段React代码，替换传统的<></>, 或者单独的div容器
   */

  return (
    <div>
      <h4> 基本的Snackbar组件: 消息框 </h4>
      <Button variant="contained" color="secondary" onClick={ handleOpenSnackbar } >
        打开
      </Button>
      <Snackbar 
        open={open}
        onClose={ handleCloseSnackbar }
        message="我是消息框"
        autoHideDuration={3000}
        TransitionComponent={ Slide }
        disableWindowBlurListener={true}
        anchorOrigin={{
          horizontal: 'left',     // x方向
          vertical: 'bottom',     // y方向
        }}
        action={ 
          <React.Fragment>
            <IconButton onClick={ handleCloseSnackbar } color="inherit" >
                <CloseIcon />
            </IconButton>            
          </React.Fragment> 
        }
      />

      <h4> 自定义Snackbar组件: 与Aler组件配合的消息框 </h4>
      <Button variant="contained" color="primary" onClick={ handleOpenSnackbar } >
        打开
      </Button>
      <Snackbar
        open={open}
        anchorOrigin={{
          horizontal: 'center',     // x方向
          vertical: 'top',          // y方向
        }}
      > 
        <Alert
          /**
           * Aler组件: 不同种类的警告提示框( 完成笔记 )
           *    0. severity属性: 切换不同颜色主题的提示框
           *       a) 'error'
           *       b) 'info'
           *       c) 'success'
           *       d) 'warning'  
           *    1. color属性: 可覆盖默认颜色主题
           *       a) 'error'
           *       b) 'info'
           *       c) 'success'
           *       d) 'warning'  
           *    2. action属性:在尾部放置组件
           *    3. variant属性:
           *        a) “filled”参数: 实体类型提示框
           *        b) “outlined”参数: 边框类型提示框
           *        c) "standard"参数: 半透明类型提示框
           *    4. icon属性: 可以改变icon
           *    5. iconMapping属性: 可以指定改变不同主题的icon
           *        a) { error?: node, info?: node, success?: node, warning?: node }
           *    6. 注意: AlertTitle组件: 及使不写也是没有问题的
           */
          severity="success"
          variant="filled"
          color="info"
          iconMapping={{
            success: (<SuccessIcon />),
          }}
          action={ 
            <IconButton onClick={ handleCloseSnackbar } size="small" color="inherit" >
                <CloseIcon />
            </IconButton>            
          }
          style={{ textAlign: "left" }}
        >
          <AlertTitle>Success</AlertTitle>
          我就是奥术大师大所多提示信息
        </Alert> 
      </Snackbar>

      <h4 className=""> 展示多个提示框 </h4>
      <MoreSnackbar />

    </div>
  );
};

export default SnackbarMuiTest;