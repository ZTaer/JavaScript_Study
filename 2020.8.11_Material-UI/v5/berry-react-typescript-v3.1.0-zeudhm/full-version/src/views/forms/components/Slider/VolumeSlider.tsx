import React from 'react';

// material-ui
import { Grid, Slider } from '@mui/material';

// assets
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

// ==============================|| VOLUME SLIDER ||============================== //

export default function VolumeSlider() {
    const [value, setValue] = React.useState<number | number[]>(30);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <VolumeDown color="primary" />
            </Grid>
            <Grid item xs>
                <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
            </Grid>
            <Grid item>
                <VolumeUp color="primary" />
            </Grid>
        </Grid>
    );
}
