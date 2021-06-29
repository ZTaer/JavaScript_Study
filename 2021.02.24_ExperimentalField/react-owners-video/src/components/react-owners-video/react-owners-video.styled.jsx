import styled from 'styled-components';
import { display_flex, xy_content } from "./common.utils";

export const ReactOwnersVideoContainer = styled.div`
    background-color:#000;
    overflow:hidden;
    ${display_flex()}
    ${xy_content("center", "center")}
`;

export const ReactOwnersVideoControl = styled.div`
    position:absolute;
    width:100%;
`;

export const ReactOwnersVideoControlContainer = styled.div`
    ${display_flex("column")}
    ${xy_content("space-between", "space-between")}
    height:100%;
    width:100%;
`;

export const ReactOwnersVideoControlHeader = styled.div`
    background-color: green;
`;

export const ReactOwnersVideoControlBody = styled.div`
    background-color: red;
`;

export const ReactOwnersVideoControlFotter = styled.div`
    background-color: yellow;
`