import React, { useState, useEffect } from "react";
import { StyledCardContainer } from "./CardsContainer.style";
import ThemeCard from "../ThemeCard/ThemeCard";

import _ from 'lodash';
import { getFromLS } from '../../utils/storage';

const CardsWrapper = (props) => {
    const themeFromStore = getFromLS('all-themes');
    const defaultThemeFromStore = getFromLS('default');
    const [ data, setData ] = useState(themeFromStore.data);
    const [ themes, setThemes ] = useState([]);

    useEffect(() => {
        const themesArray = _.keys(data);
        let ThemesObject = [];
        themesArray.forEach((i) => {
            ThemesObject.push({ theme: data[i], selected: false });
        });
        setThemes(ThemesObject);
    }, [data]);

    useEffect(() => {
        const IsAllActive = themes.some((theme) => {
            if (theme.selected === false) {
                return false;
            }
            else {
                return true;
            }
        });
        if (!IsAllActive) {
            props.setter(defaultThemeFromStore.data.dark);
        }
    }, [themes]);

    return (
        <div>
            <StyledCardContainer>
            {
                themes.length > 0 && 
                themes.map(theme =>(
                        <ThemeCard
                            setter = { props.setter }
                            themes = { themes }
                            setThemes = { setThemes }
                            theme = { theme }
                            key = { theme.theme.id }
                        />
                    ))
            }
            </StyledCardContainer>
        </div>
    )
}

export default CardsWrapper;