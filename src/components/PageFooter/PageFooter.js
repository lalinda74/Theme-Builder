import React from "react";
import { StyledFooter } from "./PageFooter.style";


const PageFooter = (props) => {

    return (
        <StyledFooter theme={props.theme}>
            <a href="https://github.com/lalinda74/Theme-Builder" target="_blank" rel="noreferrer">Open Source Code</a> by Lalinda Dias
            <p>This project was done to illustrate how theming can be done with Styled components.</p>
        </StyledFooter>
    )
}

export default PageFooter;