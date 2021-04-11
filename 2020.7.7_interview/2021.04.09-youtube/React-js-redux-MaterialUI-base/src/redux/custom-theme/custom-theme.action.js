import { customThemeActionTypes } from './custom-theme.types';

export const changeDefaultTheme = () => ({
    type: customThemeActionTypes.CHANG_DEFAULT_THEME,
});
export const changeDarkTheme = () => ({
    type: customThemeActionTypes.CHANG_DARK_THEME,
});

export const changeGreenTheme = () => ({
    type: customThemeActionTypes.CHANG_GREEN_THEME,
});