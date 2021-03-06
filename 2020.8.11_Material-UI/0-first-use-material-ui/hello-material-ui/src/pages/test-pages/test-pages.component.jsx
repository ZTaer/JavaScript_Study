import React from "react";
import "./test-pages.styles.scss";
/**
 * 组件
 */
import ButtonUiTest from "../../components/button-mui-test/button-mui-test.component";
import TypographyMuiTest from "../../components/typography-mui-test/typography-mui-test.component";
import GridMuiTest  from "../../components/grid-mui-test/grid-mui-test.component";
import AppBarMuiTest from "../../components/app-bar-mui-test/app-bar-mui-test.component";
import MakeStylesMuiTest from "../../components/makeStyles-mui-test/makeStyles-mui-test.component";
import StyledComponentsMuiTest from "../../components/styledComponents-mui-test/styledComponents-mui-test.component";
import ButtonGroupMuiTest from '../../components/buttonGroup-mui-test/buttonGroup-mui-test.component'
import PaperMuiTest from '../../components/paper-mui-test/paper-mui-test.component'
import DividerMuiTest from "../../components/divider-mui-test/divider-mui-test.component";
import TableMuiTest from "../../components/table-mui-test/table-mui-test.component";
import TablePagintionMuiTest from '../../components/table-pagination-mui-test/table-pagination-mui-test.component';
import TablePagintionMuiTestExercise1 from '../../components/table-pagination-mui-test-exercise-1/table-pagination-mui-test-exercise-1.component';
import TablePagintionSelectMuiTest from '../../components/table-pagination-select-mui-test/table-pagination-select-mui-test.component';
import TablePagintionSelectMuiTestExercise2 from '../../components/table-pagination-select-mui-test-exercise-2/table-pagination-select-mui-test-exercise-2.component';
import CheckboxMuiTest from '../../components/checkbox-mui-test/checkbox-mui-test.component';
import TooltipMuiTest from '../../components/tooltips-mui-test/tooltips-mui-test.component';
import SwitchMuiTest from '../../components/switch-mui-test/switch-mui-test.component';
import CircularProgressMuiTest from '../../components/circular-progress-mui-test/circular-progress-mui-test.component';
import LinearProgressMuiTest from '../../components/linear-progress-mui-test/linear-progress-mui-test.component';
import DrawerMuiTest from '../../components/drawer-mui-test/drawer-mui-test.component';

const TestPages = () => {
    return(
        <div className="test-pages">
            <h1>
                试验场
            </h1>
            
            <h2>
                Button组件 - 按钮组件
            </h2>
            <ButtonUiTest />

            <h2>
                Typography组件 - 文案组件
            </h2>
            <TypographyMuiTest />

            <h2>
                Grid组件 - 布局组件
            </h2>
            <GridMuiTest />

            <h2>
                AppBar组件 - 导航栏组件
            </h2>
            <AppBarMuiTest show />

            <h2>
                makeStyles函数 - 动态CSS
            </h2>
            <MakeStylesMuiTest isGoogleButton={true} />

            <h2>
                styledComponents库 - 动态CSS,并可以使用theme
            </h2>
            <StyledComponentsMuiTest />

            <h2>
                ButtonGroup组件
            </h2>
            <ButtonGroupMuiTest />

            <h2>
                Paper组件
            </h2>
            <PaperMuiTest />

            <h2>
                Divider组件
            </h2>
            <DividerMuiTest />

            <h2
                className="marginTop"                
            >
                Table组件
            </h2>
            <TableMuiTest />
            <h2>
                Table组件 - 带分页
            </h2>
            <TablePagintionMuiTest />

            <h2>
                Table组件 - 带分页 - 练习1
            </h2>
            <TablePagintionMuiTestExercise1 />

            <h2>
                Table组件 - 带分页 - 带多选
            </h2>
            <TablePagintionSelectMuiTest />

            <h2>
                Table组件 - 带分页 - 带多选 - 练习2
            </h2>
            <TablePagintionSelectMuiTestExercise2 />

            <h2>
                Checkbox组件
            </h2>
            <CheckboxMuiTest />

            <h2>
                Tooltip组件
            </h2>
            <TooltipMuiTest />

            <h2>
                Switch组件
            </h2>
            <SwitchMuiTest />

            <h2>
                CircularProgress组件
            </h2>
            <CircularProgressMuiTest />

            <h2>
                LinearProgress组件
            </h2>
            <LinearProgressMuiTest />

            <h2>
                Drawer组件
            </h2>
            <DrawerMuiTest />

        </div>
    );
};

export default TestPages;