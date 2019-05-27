import styled from "styled-components";

const InputMessage = styled.input.attrs({
    type: "text",
    placeholder: props => props.placeholder || "Diz aí...",
})`
    background: #fbfbff;
    width: 100%;
    height: 50px;
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: rgba(0, 0, 0, 0.33);
    padding-left: 16px;
    border: 0; 
    box-sizing: border-box;
    outline: 0;
    position: absolute;
    bottom: 0;
    ::placeholder {
        color: rgba(0, 0, 0, 0.33);
      }
`;

export default InputMessage;