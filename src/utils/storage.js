export const setToLS = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const setDefaultToLS = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLS = key => {
    const value = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}

export const getDefaultFromLS = key => {
    const value = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}