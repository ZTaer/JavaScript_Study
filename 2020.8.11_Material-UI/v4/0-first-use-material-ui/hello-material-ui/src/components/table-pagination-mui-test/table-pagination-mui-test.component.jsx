import React from 'react';
import PropTypes from 'prop-types';

/**
 * Table组件: 有分页( 完成笔记 )
 */
import { makeStyles } from '@material-ui/core/styles';

import { 
  TableContainer,
  Table,
  TableBody,
  TableFooter,
  TableCell,
  TableRow,
  TablePagination,          // TablePagination组件: Table的分页组件

  Paper,
  Button,
} from '@material-ui/core';

/**
 * 配合TablePagination组件: ActionsComponent属性( 完成笔记 )
 *    a) 作用: 渲染翻页按钮
 */
import TablePaginationActions from "./table-pagination-actions.child-component";

/**
 * 构建方便Table渲染的数据结构
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

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

const CustomPaginationActionsTable = () => {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(`
    数据追踪:
    page: ${page}, 
    rowsPerPage: ${rowsPerPage}, 
    page * rowsPerPage = ${ page * rowsPerPage },
    page * rowsPerPage + rowsPerPage = ${page * rowsPerPage + rowsPerPage}
    emptyRows: ${emptyRows},
  `);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)  // 构建Table翻页核心算法( 核心 )
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (                               // 填充高度, 使Table在缺少数据时, 也能保证Table高度
            <TableRow style={{ height: 51.82 * emptyRows }}>
              <TableCell 
               // colSpan={6} 
              />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              // rowsPerPageOptions属性: 
              //   a) 作用: 操控展示数量选项, 
              //   b) 显示全部选项: {label: "显示全部",value: -1}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]} 
              onChangeRowsPerPage={handleChangeRowsPerPage}                 // onChangeRowsPerPage属性: 函数功能为改变展示数量,配合rowsPerPageOptions属性

              // colSpan={3}
              count={rows.length}                                           // count: 总数量
              rowsPerPage={rowsPerPage}                                     // rowsPerPage: 每页最大展示数
              page={page}                                                   // page: 当前页数 

              // SelectProps属性: 每页展示数下拉菜单组件props 
              //   a) 给Select组件传属性
              //   b) native为true时，标签"选项下拉框"从div标签变为select标签类型
              SelectProps={{                                                
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              
              // ActionsComponent属性: 渲染换页按钮组件, 
              //   a) 自定义化: 保证换页按钮的自定义化
              //   b) 注意: 自定义换页组件要完善逻辑
              //   c) 自动获取的props数据
              //      0. onChangePage: PropTypes.func.isRequired,
              //      1. count: PropTypes.number.isRequired,
              //      2. page: PropTypes.number.isRequired,
              //      3. rowsPerPage: PropTypes.number.isRequired,
              ActionsComponent={TablePaginationActions}                      
              onChangePage={handleChangePage}                             // onChangePage属性: 配合ActionsComponent属性，功能为改变页数

              /**
               * 文案操控属性( 完成笔记 )
               *    0. labelRowsPerPage属性: Select下拉菜单的开头文案
               *    1. labelDisplayedRows属性: 换页细节文案
               *        a) 注意: 默认值就为函数, 并且参数固定
               *        b) 显示内容: 在函数返回的字符串处，加工渲染的字符串内容
               */
              labelRowsPerPage="每页显示数量:"           
              labelDisplayedRows={ ({
                  from, 
                  to, 
                  count, 
                  page
                })=>`显示项: ${from} - ${to} · 总项数: ${count} · 第 ${page+1} 页 · 共 ${Math.ceil( count / rowsPerPage )} 页`
              }                         
              className={"table-pagination-container"}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <Button variant="text" onClick={ ()=>{ setPage(2) } } >
            自定义切换页数 - 测试
      </Button>
      <Button variant="text" onClick={ ()=>{ setPage(1) } } >
            自定义切换页数 - 测试
      </Button>
    </TableContainer>
  );
};

export default CustomPaginationActionsTable;