import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import {useTheme} from '../theme/useTheme';
import { getFromLS } from '../utils/storage';

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
`;

const Wrapper = styled.li`
    padding: 48px;
    text-align: center;
    border-radius: 12px;
    list-style: none;
    -webkit-box-shadow: 4px 2px 40px rgb(0 0 0 / 10%);
    box-shadow: 4px 2px 40px rgb(0 0 0 / 10%);
`;

const Container = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin: 1rem 8rem;
    padding: 10px;
`;

const Toggle = styled.section(({active}) => `
    position: relative;
    width: 8vmin;
    height: 4vmin;
    background: ${active ? "var(--color-toggle-active)" : "var(--color-toggle)"};
    border-radius: 50vmin;
    cursor: pointer;
    transition: 0.8s;
    &.active {
        background: var(--color-toggle-active);
        ${Switch} {
            left: 4vmin;
            transform: scale(0.9) rotate(180deg);
            background: var(--color-switch);
            transition: 0.8s;
        }
    }
`);

const Switch = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 3.45vmin;
    height: 3.45vmin;
    border: 0.3vmin solid var(--color-border);
    border-radius: 50%;
    transform: scale(0.9);
    background: var(--color-switch);
    transition: 0.8s;
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

const ThemeCard = (props) => {
    const themeFromStore = getFromLS('all-themes');
    const [ data, setData ] = useState(themeFromStore.data);
    const { setMode } = useTheme();
    const [ switches, setSwitches ] = useState([]);

    const themeSwitcher= (selectedTheme) => {
        setMode(selectedTheme);
        props.setter(selectedTheme);
        switches.some((theme) => 
            (theme?.theme?.name.toUpperCase() === selectedTheme.name.toUpperCase()) ? switchTheme(switches.indexOf(theme)) : ''
        );
    };

    const switchTheme = (themeIndex) => {
        setSwitches(switches.map((theme) => 
            (switches.indexOf(theme) === themeIndex) ? {...theme, selected: true} : {...theme, selected: false} 
        ));
    };

    useEffect(() => {
        const themesArray = _.keys(data);
        let ThemesObject = []; 
        themesArray.forEach((i) => {
            const Obj = { theme: data[i], selected: false };
            ThemesObject.push(Obj);
        });
        setSwitches(ThemesObject);
        console.log('switches', switches);
    }, [data]);

    useEffect(() => {
        props.newTheme && updateThemeCard(props.newTheme);
    }, [props.newTheme]);

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = { ...data, [key]: theme[key] };
        setData(updated);
    }

    const ThemeCard = props => {
        return(
            <Wrapper style={{backgroundColor: `${data[_.camelCase(props.theme.theme.name)].colors.body}`, 
                    color: `${data[_.camelCase(props.theme.theme.name)].colors.text}`, 
                    fontFamily: `${data[_.camelCase(props.theme.theme.name)].font}`}}>
                <ThemedButton onClick={ () => themeSwitcher(props.theme.theme) }
                    style={{backgroundColor: `${data[_.camelCase(props.theme.theme.name)].colors.button.background}`, 
                    color: `${data[_.camelCase(props.theme.theme.name)].colors.button.text}`,
                    fontFamily: `${data[_.camelCase(props.theme.theme.name)].font}`}}>
                    {props.theme.theme.name}
                </ThemedButton>
                <Toggle onClick={ () => themeSwitcher(props.theme.theme) } className={props.theme.selected === true ? "active" : ""}>
                    <Switch></Switch>
                </Toggle>
            </Wrapper>
        )
    }

    return (
        <div>
            <Container>
            {
                switches.length > 0 && 
                    switches.map(theme =>(
                        <ThemeCard theme={theme} key={theme.theme.id} />
                    ))
            }
            </Container>
        </div>
    )
}

export default ThemeCard;