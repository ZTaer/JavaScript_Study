import React from "react";

/**
 * 第三方库
 */

/**
 * 本地组件
 */

/**
 * styled-components
 */
import {
   StyledComponentsMuiTestContainer, 
   ButtonStyled,
} from "./styledComponents-mui-test.styles";

const StyledComponentsMuiTest = () => {
    return (
        <StyledComponentsMuiTestContainer>
            <ButtonStyled>
                我靠
            </ButtonStyled>
        </StyledComponentsMuiTestContainer>
    );
};

export default StyledComponentsMuiTest;