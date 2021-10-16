import styled, { css } from "styled-components";

export const StyledCardBody = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 24px;
`;

export const StyledCardTitle = styled.h5(({theme}) =>`
    font-size: 18px;
    font-weight: 600;
    margin: 5px 0 0;
    color: ${theme.colors.cardText};
`);

export const StyledWrapper = styled.li(({theme}) =>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    border-radius: 8px;
    list-style: none;
    min-height: 150px;
    height: 22vh;
    -webkit-box-shadow: 4px 2px 40px rgb(0 0 0 / 10%);
    box-shadow: 4px 2px 40px rgb(0 0 0 / 10%);
    background-image: radial-gradient( circle 321px at 8.3% 75.7%,  rgba(209,247,241,1) 0%, rgba(249,213,213,1) 81% );
    color: ${theme.colors.text};
    font-family: ${theme.font};
    border: 2px solid #FFF;
`);

export const StyledToggle = styled.section(({active}) => `
    position: relative;
    width: 8vmin;
    height: 4vmin;
    background: ${active ? "var(--color-toggle-active)" : "var(--color-toggle)"};
    border-radius: 50vmin;
    cursor: pointer;
    transition: 0.8s;
`);

export const StyledSwitch = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 3.45vmin;
    height: 3.45vmin;
    border: 0.3vmin solid var(--color-border);
    border-radius: 50%;
    transform: scale(0.9);
    background: var(--color-switch);
    transition: .8s;
    ${ props => props.active && css`
        left: 4vmin;
        transform: scale(0.9) rotate(180deg);
        transition: .8s;
    `};
    &:before {
        bottom: -0.1vmin;
        left: -0.2vmin;
        width: 3.3vmin;
        height: 1.5vmin;
        border-bottom-left-radius: 30vmin;
        border-bottom-right-radius: 30vmin;
        box-shadow: inset 0.15vmin -0.15vmin 0.15vmin var(--color-shadow);
        content: "";
        position: absolute;
        border: 0.3vmin solid var(--color-border);
        background: var(--color-pokeball);
    }

    &:after {
        top: 1vmin;
        left: 1.1vmin;
        width: 0.8vmin;
        height: 0.8vmin;
        border-radius: 50%;
        box-shadow: -4vmin -4vmin 0 -1.3vmin var(--color-pokeball);
        content: "";
        position: absolute;
        border: 0.2vmin solid var(--color-border);
        background: var(--color-pokeball);
    }
`;