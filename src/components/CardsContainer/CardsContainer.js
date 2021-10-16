import React, { useState, useEffect } from "react";
import { StyledCardContainer } from "./CardsContainer.style";
import ThemeCard from "../ThemeCard/ThemeCard";

import _ from 'lodash';
import { getFromLS } from '../../utils/storage';

const CardsWrapper = (props) => {
    const themeFromStore = getFromLS('all-themes');
    const defaultThemeFromStore = getFromLS('default');
    const [ data, setData ] = useState(themeFromStore.data);
    const [ switches, setSwitches ] = useState([]);

    useEffect(() => {
        const themesArray = _.keys(data);
        let ThemesObject = [];
        themesArray.forEach((i) => {
            ThemesObject.push({ theme: data[i], selected: false });
        });
        setSwitches(ThemesObject);
    }, [data]);

    useEffect(() => {
        const IsAllActive = switches.some((theme) => {
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
    }, [switches]);

    return (
        <div>
            <StyledCardContainer>
            {
                switches.length > 0 && 
                    switches.map(theme =>(
                        <ThemeCard
                            setter = { props.setter }
                            switches = { switches }
                            setSwitches = { setSwitches }
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