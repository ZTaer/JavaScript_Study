import { createSelector } from 'reselect';

const selectTheme = state => state.theme;

export const selectThemeOrigin = createSelector(
    [selectTheme],
    theme=>theme.theme
);

