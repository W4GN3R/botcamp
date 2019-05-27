import styled from "styled-components";
import avatar from "../../img/avatar.svg";

export const Wrapper = styled.figure`
    display: flex;
    background: #26265e;
    height: 40px;
    width: 40px;
    border-radius: 50%; 
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;
export const Avatar = styled.img.attrs({src: avatar})``;