import styled from 'styled-components';

export const HeaderContainerStyled = styled.div`
    width:100%;
    height:50px;
    background-color:#000;
    color:#fff;
`;
HeaderContainerStyled.displayName = "HeaderContainerStyled" // 存在原因：帮助jest的wrapper.find抓取组件进行测试