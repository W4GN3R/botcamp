import React from "react";
import { Link } from "react-router-dom"

import LoginWrapper from "../../components/loginWrapper";
import LogoBotcamp from "../../components/logoBotCamp";
import BtnBotCamp from "../../components/btnBotCamp";

const login = () => (
    <LoginWrapper>
        <LogoBotcamp />
        <Link to="/chat">
            <BtnBotCamp content="Entrar"/>
        </Link>
    </LoginWrapper>
);

export default login;