import styled from 'styled-components';
import { Button } from "@material-ui/core";
import {
    teal
} from "@material-ui/core/colors";

export const StyledComponentsMuiTestContainer = styled.div`
    background-color: ${teal[800]};
`;
/**
 * styled-components库: 使用Material-UI的theme( 完成笔记 )
 */
export const ButtonStyled = styled(Button)`
    ${ ( props ) => {
        const { theme } = props;    // 获取Material-UI的theme
        return `
            padding: ${ theme.spacing(5) }px;
            background-color: ${ teal[500] };
            color: #fff;
        `;
    } }
`;

