import React,{ useState } from "react";
import {
    Pagination,
} from "@material-ui/lab";
import PaginationRouter from "./pagination-router.component";

const PaginationTest = () => {

    /**
     * Pagination组件: 翻页组件( 完成笔记 ) 
     *      0. 注意: 组件来源于, "@material-ui/lab"
     *      1. count属性: 总页数
     *      2. color属性: 颜色主题
     *      3. disabled属性: 是否禁用按钮组件
     *      4. variant属性: "text"文本类型 | "outlined"边框类型
     *      5. shape属性: "round"圆形 | "rounded"方形
     *      6. size属性: "small"小尺寸 | "large"大尺寸 | "medium" 默认大小
     *      7. showFirstButton属性: 是否渲染”上一页“按钮
     *      8. showLastButton属性: 是否渲染"下一页"按钮
     *      9. hidePrevButton属性: 是否渲染"跳转首页"按钮
     *      10. hideNextButton属性: 是否渲染"跳转尾页"按钮
     *      11. defaultPage属性: 默认page数
     *      12. page属性：当前页数
     *      13. siblingCount属性: 中间保留渲染页数 * 2 ( 需截图提醒 )
     *      14. boundaryCount属性: 二侧保留渲染页数 * 2 ( 需截图提醒 )
     *      15. onChange属性: 改变页数, 固定逻辑
     */

    const [ page, setPage ] = useState(50);

    // a) 改变page
    const handleChangePage = ( event, value ) => {
        setPage( value );
    };

    return (
        <div>
            <h4>基本的Pagination组件: 翻页组件</h4>
            <Pagination 
               count={100}              // count属性: 总页数
               color="primary"          // color属性: 颜色主题
               disabled={false}         // disabled属性: 是否禁用按钮组件
               variant="text"           // variant属性: "text"文本类型 | "outlined"边框类型
               shape="rounded"          // shape属性: "round"圆形 | "rounded"方形
               size="large"             // size属性: "small"小尺寸 | "large"大尺寸 | "medium" 默认大小
               showFirstButton={true}   // showFirstButton属性: 是否渲染”上一页“按钮
               showLastButton={true}    // showLastButton属性: 是否渲染"下一页"按钮
               hidePrevButton={false}   // hidePrevButton属性: 是否渲染"跳转首页"按钮
               hideNextButton={false}   // hideNextButton属性: 是否渲染"跳转尾页"按钮

               defaultPage={1}                  // defaultPage属性: 默认page数
               page={ page }                    // page属性：当前页数
               siblingCount={2}                 // siblingCount属性: 中间保留渲染页数 * 2 ( 需截图提醒 )
               boundaryCount={4}                // boundaryCount属性: 二侧保留渲染页数 * 2 ( 需截图提醒 )
               onChange={ handleChangePage }    // onChange属性: 改变页数, 固定逻辑
            />
            <h5> 当前页: { page } </h5>

            <h4>Pagination组件配合路由</h4>
            <PaginationRouter />
        </div>
    );
};

export default   PaginationTest;