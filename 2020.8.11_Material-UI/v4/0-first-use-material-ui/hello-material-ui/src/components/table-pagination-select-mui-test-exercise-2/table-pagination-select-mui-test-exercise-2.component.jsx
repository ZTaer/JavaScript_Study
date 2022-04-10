import React,{ useState } from 'react';

/**
 * 0. Table组件: 超级简化版 - 带分页 - 带多选 - 练习2( 完成笔记 )
 */
import SelectTableHead from './select-table-head.child-component';
import EnhancedTableToolbar from './enhanced-table-toolbar.child-component'; // 勾选提示工具栏

import {
  TableContainer,  
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TablePagination,

  Paper,
  Checkbox,
} from '@material-ui/core';

/**
 * 1. 数据
 */

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

/**
 * 主要组件
 */
const TablePaginationSelectMuiTestExercise2 = () => {

  /**
   * 2. 属性:
   *    a) page: 当前页数
   *    b) rowsPerPage: 每页渲染最大行数
   *    c) emptyRows: 每页缺少渲染行数
   *    d) emptyRowsHeight: 行高度( 单位: px )
   */
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const [emptyRowsHeight, setEmptyRowsHeight] = useState(52);
  const [selected, setSelected] = useState([]);

  /**
   * 4. 勾选逻辑类
   */
  // a) 全选/全不选逻辑
  const handleSelectedAll = ( event ) => {
    if( event.target.checked ){
      const newSelected = rows.map( cur => cur.name );
      setSelected( newSelected ); 
    }else{
      setSelected([]);
    }
  };

  // b) 验证指定name是否存在selected中
  const isSelected = (name) => {
    if(selected.indexOf( name ) < 0 ){
      return false;
    }
    return true;
  };

  // c) 决定是否将目标加入/删除selected中
  const handleClickRow = (event,name) => {
    if( isSelected( name ) ){
      const targetPos = selected.indexOf(name);
      const newSelected = [...selected];
      
      // 删除指定数组元素
      targetPos === 0 ?
      newSelected.splice(targetPos,1) :
      newSelected.splice(targetPos,targetPos);

      setSelected( newSelected );
    }else{
      setSelected( [...selected,name] )
    }
  };

  /**
   * 10. 分页逻辑类
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
      <EnhancedTableToolbar numSelected={selected.length} />
      <Table>
        <TableHead>
          <SelectTableHead 
            /**
             * 5. Table头部
             *    a) 主要为全选功能, 暂不考虑排序
             */
            numSelected={selected.length}
            rowCount={rows.length}
            onSelectAllClick={handleSelectedAll}
          />
        </TableHead>
        <TableBody>
          {
            rows
            .slice( (page * rowsPerPage) , (page * rowsPerPage) + rowsPerPage )
            .map( ( item, index ) => {
              
              /**
               * 3. 属性:
               *    a) labelId: 用于Checkbox的inputProps --> aria-labelledby属性, 作为属性值备注
               *    b) selectStatus: 验证name是否存在selected中，存在返回true不存在返回false
               */
              const { name, calories, fat, carbs, protein } = item;
              const labelId = `select-table-checkbox-${index}`;
              const selectStatus = isSelected(name);

              return(
                <TableRow 
                  key={name}
                  onClick={(e)=>handleClickRow(e,name)}
                  hover
                >

                  <TableCell
                    padding="checkbox"
                  >
                    <Checkbox
                      checked={selectStatus}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>

                  <TableCell 
                    component="th" 
                    id={labelId} 
                    padding="none"
                  >
                    {name}
                  </TableCell>

                  <TableCell align="right" >
                    {calories}
                  </TableCell>
                  <TableCell align="right" >
                    {fat}
                  </TableCell>
                  <TableCell align="right" >
                    {carbs}
                  </TableCell>
                  <TableCell align="right" >
                    {protein}
                  </TableCell>
              
                </TableRow>
              );
            } )
          }
          {
            /**
             * 12. 填充Table高度
             */
            emptyRows > 0 &&
            <TableRow style={{ height: emptyRows * emptyRowsHeight +"px" }} >
                <TableCell />
            </TableRow>
          }
        </TableBody>
        <TableFooter>
          <TableRow>
              <TablePagination 
                /**
                 * 11. 构建分页渲染组件
                 */
                count={ rows.length }
                page={page}
                rowsPerPage={rowsPerPage}        
                rowsPerPageOptions = {[5,10,15,{ label: "全部", value: rows.length }]} 
                onChangeRowsPerPage = { handleChangeRowsPerPage }
                labelRowsPerPage="每页显示数量:" 
                SelectProps={{                                                
                    inputProps: { 'aria-label': '下拉框props' },
                    native: true
                }}

                labelDisplayedRows={ ({
                    from,
                    to,
                    count,
                    page
                }) => {
                    return(` 当前页: ${page} - 当前数据: ${from} - ${to} - 总计: ${count} `);
                } }
                onChangePage={handleChangePage}
              /> 
          </TableRow>
        </TableFooter>
      </Table>      
    </TableContainer>
  )
};

export default TablePaginationSelectMuiTestExercise2;
