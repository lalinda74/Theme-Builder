import { useState, useEffect } from 'react';
import { setToLS, getFromLS } from '../utils/storage';
import _ from 'lodash';

export const useTheme = () => {
    const themes = getFromLS('all-themes');
    const defaultTheme = getFromLS('default');
    const [theme, setTheme] = useState(defaultTheme.data.dark);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLS('theme', mode);
        setTheme(mode);
    }

    const getFonts = () => {
        const allFonts = _.values(_.mapValues(themes.data, 'font'));
        return allFonts;
    }

    useEffect(() => {
        const localTheme = getFromLS('theme');
        const defaultTheme = getFromLS('default');
        localTheme ? setTheme(localTheme) : setTheme(defaultTheme.data.dark);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setMode, getFonts };
};