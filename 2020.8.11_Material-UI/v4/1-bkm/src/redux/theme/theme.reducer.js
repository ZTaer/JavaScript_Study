import { themeActionTypes } from './theme.types';

// 获取Material-UI皮肤类型
import {  
    ThemeIndexType,
} from '../../theme/theme-hoc-provider.component.jsx';

const INITIAL_STATE = {
    theme: ThemeIndexType.DEFAULT_THEME,
};

const themeReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case themeActionTypes.CHANG_DEFAULT_THEME:
            return {
                ...state,
                theme: ThemeIndexType.DEFAULT_THEME,
            }
        case themeActionTypes.CHANG_DARK_THEME:
            return {
                ...state,
                theme: ThemeIndexType.DARK_THEME,
            }
        case themeActionTypes.CHANG_GREEN_THEME:
            return {
                ...state,
                theme: ThemeIndexType.GREEN_THEME,
            }
        default:
            return state;
    }
}

export default themeReducer;