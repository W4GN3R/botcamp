import styled from "styled-components"

import logoBotCamp from "../../img/logo-botcamp.png";

const LogoBotcamp = styled.img.attrs({
    src: logoBotCamp,
    alt: "Logo do Botcamp"
  })`
    width: ${props => (props.small ? "200px" : "248px")};
  `;


export default LogoBotcamp;