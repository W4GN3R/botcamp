import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: #26265e;
    display: flex;
    justify-content: space-between;
    padding: 16px 11px 16px 16px;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    ::after {
        content: "";
        position: absolute;
        bottom: 1px;
        left: 0;
        border: 0px solid transparent;
        border-top: 20px solid #26265e;
        border-left-width: 100vw;
        transform: translateY(100%);
      }
`;

export default HeaderWrapper;