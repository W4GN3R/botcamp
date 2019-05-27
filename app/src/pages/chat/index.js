import React, {useState} from "react";
import { Link } from "react-router-dom";

import HeaderWrapper from "../../components/headerWrapper";
import LogoBotCamp from "../../components/logoBotCamp";
import Logout from "../../components/logoutBotCamp";
import InputMessage from "../../components/inputBotCamp";
import MessageBotCamp from "../../components/messageBotCamp";
// import ResponseMessage from "../../components/responseMessage";
import FormMessage from "../../components/formMessage";

const Chat = () => {
    const [typing, setTyping] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessages((old) => [...old, typing])
        setTyping("");
    }
    const handleChange = (event) => setTyping(event.target.value);
    return (
        <>
            <HeaderWrapper>
                <LogoBotCamp small/>
                <Link to="/">
                    <Logout />
                </Link>
            </HeaderWrapper>
            <div>
                {messages.map((msg, key) => <MessageBotCamp key={key}>{msg}</MessageBotCamp>)}

            </div>
            <FormMessage onSubmit={handleSubmit}>
                <InputMessage value={typing} onChange={handleChange} />
            </FormMessage>
        </>
    )
};

export default Chat;