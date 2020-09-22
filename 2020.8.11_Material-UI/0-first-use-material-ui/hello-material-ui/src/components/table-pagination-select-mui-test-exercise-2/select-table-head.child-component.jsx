import React from 'react';

/**
 * 6. 构建: SelectTableHead
 *    a) 目的: 渲染具有全选逻辑以及标题的Table头部
 */
import {  
  TableRow,
  TableCell,
  TableSortLabel,

  Checkbox,
} from '@material-ui/core';

import CallSplitIcon from '@material-ui/icons/CallSplit';

/**
 * 7. 数据
 */
const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

const SelectTableHead = (props) => {

  /**
   * 8. 属性
   *    a) numSelected: 当前选中数量
   *    b) rowCount: rows总数量
   *    c) onSelectAllClick: 全选/全不选逻辑
   */
  const { numSelected, rowCount, onSelectAllClick } = props;

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          /**
           * 9. CheckBox组件: 选中组件( 等待研究 )
           *    a) indeterminate属性: true非全选状态
           *    b) checked属性: true为选中状态
           *    c) inputProps属性: 给input传属性
           */
          indeterminate={numSelected > 0 && numSelected < rowCount} 
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}                   // 全选逻辑
          inputProps={{ 'aria-label': '全选操控' }}      // 给input传属性，顺便aria-label为备注属性
        />
      </TableCell>
      {
        headCells
        .map( item => {
          return(
            <TableCell
              key={item.id}
              align={item.numeric ? 'right' : 'left'}
              padding={item.disablePadding ? 'none' : 'default'}
            >
              <TableSortLabel
                /**
                 * TableSortLabel组件: 配合Table的排序组件( 等待笔记 )
                 *    a) active属性: true时显示排序按钮
                 *    b) direction属性: "asc" 默认方向渲染Icon | "desc" 倒置方向渲染Icon
                 *    c) hideSortIcon属性: true时隐藏Icon按钮，但没有active属性权重高
                 *    d) IconComponent属性: 自定义渲染的Icon组件
                 */
                active={true}
                direction="desc"  
                hideSortIcon={true}
                IconComponent={ CallSplitIcon }
              >
                {item.label}
              </TableSortLabel>
            </TableCell>
          );
        } )
      }
    </TableRow>
  )
};

export default SelectTableHead;

