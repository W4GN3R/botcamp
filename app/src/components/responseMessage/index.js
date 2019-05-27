import React from "react";

import AvatarBotCamp from "../avatarBotCamp";
import MessageBotCamp from "../messageBotCamp";

import { Wrapper } from "./styles";

const ResponseMessage = ({content}) => (
    <Wrapper>
        <AvatarBotCamp />
        <MessageBotCamp bot>{content}</MessageBotCamp>
    </Wrapper>
)

export default ResponseMessage;