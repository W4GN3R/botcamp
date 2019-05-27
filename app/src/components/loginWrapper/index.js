import styled from "styled-components"

import background from "../../img/ecossistema-background.png"

const LoginWrapper = styled.main `
    background-image: url(${background});
    width: 100vw;
    height: 100vh; 
    box-sizing: border-box;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 80px;
    align-items: center;
`; 

export default LoginWrapper;