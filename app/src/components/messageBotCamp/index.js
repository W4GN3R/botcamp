import styled from "styled-components";

const MessageBotCamp = styled.p`
    width: 68%;
    background-color: ${({bot}) => bot ? "#fff" : "rgba(238, 62, 37, 0.83)"};
    border-radius: ${({bot}) => bot ? "0px 0px 10px 10px" : "10px 0px 10px 10px"};
    display: flex;
    color: ${({bot}) => bot ? "#333" : "#fff"};
    padding: 15px 15px;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 2px;
    margin: ${({bot}) => bot ? "0px auto 10px 5px" : "10px 5px 10px auto"};
    ${({bot}) => bot && "border: 1px solid #d7d7ea"};
    :first-child {
        margin-top: 40px;
    }
`;

export default MessageBotCamp;