import React, { useState, useEffect } from "react";
import { ThemedButton, Wrapper, Toggle, Switch } from "./ThemeCard.style";
import { CardsContainer } from "../CardsContainer/CardsContainer.style";
import _ from 'lodash';
import {useTheme} from '../../theme/useTheme';
import { getFromLS } from '../../utils/storage';

const ThemeCard = (props) => {
    const themeFromStore = getFromLS('all-themes');
    const [ data, setData ] = useState(themeFromStore.data);
    const { setMode } = useTheme();
    const [ switches, setSwitches ] = useState([]);

    // theme card
    const themeSwitcher= (selectedTheme) => {
        setMode(selectedTheme);
        props.setter(selectedTheme);
        switches.some((theme) => 
            (theme?.theme?.name.toUpperCase() === selectedTheme.name.toUpperCase()) ? switchTheme(switches.indexOf(theme)) : ''
        );
    };

    // theme card
    const switchTheme = (themeIndex) => {
        setSwitches(switches.map((theme) => 
            (switches.indexOf(theme) === themeIndex) ? {...theme, selected: true} : {...theme, selected: false} 
        ));
    };

    // theme card
    useEffect(() => {
        const themesArray = _.keys(data);
        let ThemesObject = []; 
        themesArray.forEach((i) => {
            const Obj = { theme: data[i], selected: false };
            ThemesObject.push(Obj);
        });
        setSwitches(ThemesObject);
    }, [data]);

    // card container
    useEffect(() => {
        props.newTheme && updateThemeCard(props.newTheme);
    }, [props.newTheme]);

    // card container
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
                <Toggle onClick={ () => themeSwitcher(props.theme.theme) } active = {props.theme.selected} className={props.theme.selected === true ? "active" : ""}>
                    <Switch active = {props.theme.selected}></Switch>
                </Toggle>
            </Wrapper>
        )
    }

    return (
        <div>
            <CardsContainer>
            {
                switches.length > 0 && 
                    switches.map(theme =>(
                        <ThemeCard theme={theme} key={theme.theme.id} />
                    ))
            }
            </CardsContainer>
        </div>
    )
}

export default ThemeCard;