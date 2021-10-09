import styled, { css } from "styled-components";

export const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
`;

export const Wrapper = styled.li`
    padding: 48px;
    text-align: center;
    border-radius: 12px;
    list-style: none;
    -webkit-box-shadow: 4px 2px 40px rgb(0 0 0 / 10%);
    box-shadow: 4px 2px 40px rgb(0 0 0 / 10%);
`;

export const Toggle = styled.section(({active}) => `
    position: relative;
    width: 8vmin;
    height: 4vmin;
    background: ${active ? "var(--color-toggle-active)" : "var(--color-toggle)"};
    border-radius: 50vmin;
    cursor: pointer;
    transition: 0.8s;
`);

export const Switch = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 3.45vmin;
    height: 3.45vmin;
    border: 0.3vmin solid var(--color-border);
    border-radius: 50%;
    transform: scale(0.9);
    background: var(--color-switch);
    transition: transform 2s ease-out;
    ${ props => props.active && css`
        left: 4vmin;
        transform: scale(0.9) rotate(180deg);
        transition: transform 2s ease-out;
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