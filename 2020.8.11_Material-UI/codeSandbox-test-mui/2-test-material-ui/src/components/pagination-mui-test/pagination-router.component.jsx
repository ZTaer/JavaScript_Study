import React,{ useState } from "react";
import {
    Pagination,
    PaginationItem,
} from "@material-ui/lab";
import { withRouter } from "react-router-dom";

const PaginationRouter = ( props ) => {

    /**
     * Pagination组件: 翻页组件配合路由( 完成笔记 ) 
     *      0. 注意: 组件来源于, "@material-ui/lab"
     *      1. renderItem属性: 渲染单个按钮组件，可自定义化
     * PaginationItem组件: 渲染单个按钮组件，可自定义化( 完成笔记 )
     */
    const { history } = props;
    const [ page, setPage ] = useState(50);

    // a) 改变page
    const handleChangePage = ( event, page ) => {
        setPage( page );
        history.push(`/test?page=${page}`);
    };

    return (
        <div>
            <Pagination 
               color="secondary"                // color属性: 颜色主题
               variant="text"                   // variant属性: "text"文本类型 | "outlined"边框类型
               size="large"                     // size属性: "small"小尺寸 | "large"大尺寸 | "medium" 默认大小
               count={100}                      // count属性: 总页数
               page={ page }
               onChange={ handleChangePage }

               renderItem={ ( item ) => {       // renderItem属性: 渲染单个按钮组件，可自定义化
                   return(
                       <PaginationItem 
                          {...item}
                       />
                   );
               } }
            />
            <h5>当前页: {page}</h5>
        </div>
    );
};

export default withRouter(PaginationRouter);