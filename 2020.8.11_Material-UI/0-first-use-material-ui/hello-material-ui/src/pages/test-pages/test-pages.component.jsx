import React from "react";

/**
 * 组件
 */
import ButtonUiTest from "../../components/button-mui-test/button-mui-test.component";
import TypographyMuiTest from "../../components/typography-mui-test/typography-mui-test.component";
import GridMuiTest  from "../../components/grid-mui-test/grid-mui-test.component";
import AppBarMuiTest from "../../components/app-bar-mui-test/app-bar-mui-test.component";

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
        </div>
    );
};

export default TestPages;