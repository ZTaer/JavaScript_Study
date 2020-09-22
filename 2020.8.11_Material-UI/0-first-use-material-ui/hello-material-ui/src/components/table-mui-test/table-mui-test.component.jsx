import React,{useState} from 'react';

/**
 * Table组件 - Table组件基础骨架( 完成笔记 )
 *      a) TableContainer组件: Table容器 && 通常放置工具栏(Toolbar组件) || 
 *      b) Table组件: Table基本框架
 *      c) TableHead组件: Table头，标题类组件
 *      d) TableBody组件: Table身体, 通常放置TableRow行与TableCell列
 *      e) TableFooter组件: Table尾部, 通常放置TablePagination分页渲染组件
 *      f) TableRow组件: Table行, 通常嵌套多个TableCell
 *      g) TableCell组件: Table列, 通常放置内容
 *      h) TablePagination组件: Table分页组件渲染 - 后续笔记有详情 
 */

import { 
    // Table基础骨架
    TableContainer,     // Table容器
    Table,              // Table核心
    TableHead,          // Table头部
    TableBody,          // Table身体

    // Table内容组件
    TableRow,           // Table行
    TableCell,          // Table列

    Paper,
} from '@material-ui/core';

/**
 * makeStyle
 */
import { 
    makeStyles
} from '@material-ui/core/styles';

const useStyle = makeStyles({
    tableMuiTestContainer: {
        padding:"1rem",
    },
    tableContainerMaxWidth: {
        maxWidth: "500px",
    }
});


/**
 * 表格要求的数据结构
 */
const createData = (name, calories, fat, carbs, protein) => {
    return {
        name, 
        calories, 
        fat, 
        carbs, 
        protein
    };
};

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TableMuiTest = () => {

    const classes = useStyle();

    return (
        <div className={classes.tableMuiTestContainer} >
            <TableContainer
                /**
                 * TableContainer组件: 属性解析
                 *      a) component属性: 可转换标签,常用Paper
                 */
                component={Paper}                            
                className={classes.tableContainerMaxWidth}
            >
                <Table
                    /**
                     * Table组件: 属性解析
                     *      a) size属性: "medium"默认，"small"紧凑版
                     *      b) aria-label属性: 写备注
                     *      c) paddin属性: "default" 默认内边距 | "checkbox" 边距进一步缩小 | "none" 无内边距
                     *      d) stickyHeader属性: 粘性标题( 等待研究 )
                     */
                    size="small"                            
                    aria-label="备注"                        
                    padding="default"                       
                    // stickyHeader                          
                >
                    <TableHead>

                        <TableRow>
                            <TableCell
                                align="center"
                            >
                                标题
                            </TableCell>
                            <TableCell
                                align="center"
                            >
                                标题
                            </TableCell>
                            <TableCell
                                align="center"
                            >
                                标题
                            </TableCell>
                            <TableCell
                                align="center"
                            >
                                标题
                            </TableCell>
                            <TableCell
                                align="center"
                            >
                                标题
                            </TableCell>
                        </TableRow>
                    
                    </TableHead>
                    <TableBody>
                        {
                            rows.map( item => (
                                <TableRow 
                                    /**
                                     * TableRow组件: 属性解析
                                     *      a) hover属性: 当hover属性为true时，鼠标悬停有样式
                                     *      b) selected属性: 当selected属性为true时，为选中样式
                                     */
                                    hover={true}          
                                    selected={false}      
                                    key={item.name} 
                                >
                                    <TableCell 
                                        /**
                                         * TableCell组件: 属性解析
                                         *      a) align属性: "center" | "left" | "right" | "justify" 文字向两侧对齐，对最后一行无效 | "inherit" 继承
                                         *      b) padding属性: "checkbox" 通常与Checkbox组件配合时使用 | "none" 无内边距 | "default" 默认
                                         *      c) sortDirection属性: 通常与TableSortLabel组件配合使用 , "asc" 升序 | "desc" 降序 | false 无
                                         *      d) variant属性: 告诉TableCell当前所使用的位置, body | footer | head
                                         *      e) scope属性: 等待研究
                                         */
                                        align="justify"        
                                        padding="default" 
                                        component="th" 
                                        size="small"
                                        sortDirection="asc"
                                        variant="body"         
                                    >
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.calories}
                                    </TableCell>
                                    <TableCell align="center" >
                                        {item.fat}
                                    </TableCell>
                                    <TableCell align="center" >
                                        {item.carbs}
                                    </TableCell>
                                    <TableCell align="center" >
                                        {item.protein}
                                    </TableCell>
                                </TableRow>
                            ) )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default TableMuiTest;
