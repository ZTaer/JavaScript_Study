// material-ui
import { FormControlLabel, Radio } from '@mui/material';

// project imports
import { ColorPaletteProps } from 'types';

// ==============================|| CALENDAR COLOR PALETTE ||============================== //

const ColorPalette = ({ color, label, value }: ColorPaletteProps) => (
    <FormControlLabel
        value={value}
        control={<Radio sx={{ color, '&.Mui-checked': { color } }} />}
        label={label || ''}
        sx={{ pr: label ? 1 : 0 }}
    />
);

export default ColorPalette;
