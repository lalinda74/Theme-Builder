import styled from "styled-components";

export const StyledColorPalette = styled.section(({theme}) =>`
    width: 100%;
    height: 40px;
    > span {
        display: inline-block;
        width: 33.3%;
        height: inherit;
        background-color: red;
    }
    > span:nth-child(1) {
        background: ${theme.colors.body};
        border-bottom-left-radius: 8px;
    }
    > span:nth-child(2) {
        background: ${theme.colors.text};
    }
    > span:nth-child(3) {
        background: ${theme.colors.link.text};
        border-bottom-right-radius: 8px;
    }
`);