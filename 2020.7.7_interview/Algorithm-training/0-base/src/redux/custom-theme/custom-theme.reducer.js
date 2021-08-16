import { customThemeActionTypes } from './custom-theme.types';
import { ThemeIndexType } from '../../theme/theme-hoc-provider.component.jsx';

const INITIAL_STATE = {
    customTheme: ThemeIndexType.DEFAULT_THEME,
};

const customThemeReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case customThemeActionTypes.CHANG_DEFAULT_THEME:
            return {
                ...state,
                customTheme: ThemeIndexType.DEFAULT_THEME,
            }
        case customThemeActionTypes.CHANG_DARK_THEME:
            return {
                ...state,
                customTheme: ThemeIndexType.DARK_THEME,
            }
        case customThemeActionTypes.CHANG_GREEN_THEME:
            return {
                ...state,
                customTheme: ThemeIndexType.GREEN_THEME,
            }
        default:
            return state;
    }
}

export default customThemeReducer;