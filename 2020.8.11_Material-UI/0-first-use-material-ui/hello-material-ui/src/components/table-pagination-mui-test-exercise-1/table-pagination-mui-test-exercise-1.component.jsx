import React,{ useState, useRef, useEffect } from 'react';

/**
 * Table组件 - Table换页练习( 等待笔记 )
 */
import { 
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableFooter,
    TableCell,
    TableRow,
    TablePagination,
    
    Button,
    Paper,
} from '@material-ui/core';
import TablePaginationActionsExercise1 from './table-pagination-actions-exercise-1.child-component';


/**
 * 0. 构建: Table渲染数据
 */
function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
]

const TablePaginationMuiTestExercise1 = () => {

    /**
     * 1. 初始化变量
     *      a) page: 当前页
     *      b) rowsPerPage: 每页显示行数
     *      c) emptyRows: 每页显示空行数高度
     *          0. Math.min( 1,2 ): 比较并返回最小值, 此时返回结果为1( 等待笔记 )
     *          1. 核心算法: 
     *             a) 目的: 获取指定页面的行数
     *             b) 需补充行数 = 要求每页最大行数 - Math.min( 要求每页最大行数, 对应页数据数量 ) 
     *      d) emptyRowsHeight: 单个table行高,辅助填充计算
     *      
     */
    const [ page, setPage ] = useState(0); 
    const [ rowsPerPage, setRowsPerPage ] = useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const [ emptyRowsHeight, setEmptyRowsHeight ] = useState(51.8);
    /**
     * 逻辑类
     */
    // a) 改变rowsPerPage大小, 以及初始化page
    const handleChangeRowsPerPage = ( event ) => {
        setRowsPerPage( event.target.value );
        setPage(0);
    };
    
    // b) 改变page, 要配合ActionsComponent时使用
    //    0. 注意: 参数event为强制要求, 配合ActionsComponet要求
    const handleChangePage = ( event, newPage ) => {
        setPage(newPage);
    };

    return (
        <TableContainer component={Paper} >
            <Table>
                <TableHead>

                </TableHead>
                <TableBody>
                    {
                        /**
                         * 2. Array.slice分页核心算法( 等待笔记 )
                         *      a) 解析: Array.slice( 当前页数组元素开头数, 当前页数组元素结尾数 ) = 当前页数据
                         */
                        rows
                        .slice( (page * rowsPerPage) , (page * rowsPerPage) + rowsPerPage )
                        .map( item => {
                            const { name, calories, fat } = item;
                            return(
                                <TableRow key={name} >
                                    <TableCell align="left" >
                                        {name}
                                    </TableCell>
                                    <TableCell style={{width: "160px" }} align="right" >
                                        {calories}
                                    </TableCell>
                                    <TableCell style={{width: "160px" }} align="right" >
                                        {fat}
                                    </TableCell>
                                </TableRow>
                            );
                        } ) 
                    }
                    {
                        /**
                         * 3. 填充Table高度
                         *      a) 作用: 当Table缺少元素时，用于填充缺少元素的高度，使Table高度保持不变
                         */
                        emptyRows > 0 &&
                        <TableRow style={{ height: emptyRows * emptyRowsHeight +"px" }} >
                            <TableCell />
                        </TableRow>
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        {
                            /**
                             * 4. TablePagination组件: Table分页渲染组件
                             */
                        }
                        <TablePagination 
                            /**
                             * 5. 必备参数
                             */
                            // a) 数据类: 页面数据与分页组件对应变量
                            count={ rows.length }
                            page={page}
                            rowsPerPage={rowsPerPage}

                            // b) 下拉框: 每页最大显示数设定
                            labelRowsPerPage="每页显示数量:"           
                            rowsPerPageOptions = {[5,10,15,{ label: "全部", value: rows.length }]} 
                            onChangeRowsPerPage = { handleChangeRowsPerPage }
                            SelectProps={{                                                
                                inputProps: { 'aria-label': '下拉框props' },
                                native: true
                            }}

                            // c) 信息类: 当前数据信息，以及当前页面信息
                            labelDisplayedRows={ ({
                                from,
                                to,
                                count,
                                page
                            }) => {
                                return(` 当前页: ${page} - 当前数据: ${from} - ${to} - 总计: ${count} `);
                            } }

                            // d) 操控类: 渲染操控页面组件
                            ActionsComponent={TablePaginationActionsExercise1}
                            onChangePage={handleChangePage}
                        /> 
                    </TableRow>
                </TableFooter>
            </Table>

            <Button variant="text" color="default" onClick={()=>setPage(1)} >
              测试换页-2
            </Button>
            <Button variant="text" color="default" onClick={()=>setPage(2)} >
              测试换页-3
            </Button>
        </TableContainer>
    )
};

export default TablePaginationMuiTestExercise1;
