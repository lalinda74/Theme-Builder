import React, { useEffect } from "react";
import { StyledColorPalette } from "./ColorPalette.style";


const ColorPalette = (props) => {

    return (
        <StyledColorPalette theme={props.theme}>
            <span></span>
            <span></span>
            <span></span>
        </StyledColorPalette>
    )
}

export default ColorPalette;