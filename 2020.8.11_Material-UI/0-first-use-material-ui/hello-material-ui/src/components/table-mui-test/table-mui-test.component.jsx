import React,{useState} from 'react';

/**
 * Table组件 - Table组件基础骨架( 等待笔记 )
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
                component={Paper}                           // component属性: 可转换标签,常用Paper
                className={classes.tableContainerMaxWidth}
            >
                <Table
                    size="small"                            // size属性: "medium"默认，"small"紧凑版
                    aria-label="备注"                       // aria-label属性: 写备注
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
                                <TableRow key={item.name} >
                                    <TableCell align="center" component="th" >
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
