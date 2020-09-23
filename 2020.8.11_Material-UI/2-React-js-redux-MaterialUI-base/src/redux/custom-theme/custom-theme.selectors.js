import { createSelector } from 'reselect';

const selectCustomTheme = state => state.customTheme;

export const selectCustomThemeOrigin = createSelector(
    [selectCustomTheme],
    props=>props.customTheme
);

