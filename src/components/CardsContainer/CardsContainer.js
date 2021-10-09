import React, { useState, useEffect } from "react";
import { CardsContainer } from "./CardsContainer.style";
import ThemeCard from "../ThemeCard/ThemeCard";

import _ from 'lodash';
import {useTheme} from '../../theme/useTheme';
import { getFromLS } from '../../utils/storage';

const CardsWrapper = (props) => {
    const themeFromStore = getFromLS('all-themes');
    const [ data, setData ] = useState(themeFromStore.data);
    const { setMode } = useTheme();
    const [ switches, setSwitches ] = useState([]);

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

export default CardsWrapper;