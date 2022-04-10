import { themeActionTypes } from './theme.types';

export const changeDefaultTheme = () => ({
    type: themeActionTypes.CHANG_DEFAULT_THEME,
});
export const changeDarkTheme = () => ({
    type: themeActionTypes.CHANG_DARK_THEME,
});

export const changeGreenTheme = () => ({
    type: themeActionTypes.CHANG_GREEN_THEME,
});