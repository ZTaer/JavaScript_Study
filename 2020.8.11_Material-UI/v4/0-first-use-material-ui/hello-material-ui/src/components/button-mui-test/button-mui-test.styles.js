import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ButtonExp  = styled(Button)`

    /**
     * ButtonExp: 增加visible属性来控制是否渲染 
     */
    ${
        cur => cur.visible === "false" ? `display: none` : ""
    }
`;
