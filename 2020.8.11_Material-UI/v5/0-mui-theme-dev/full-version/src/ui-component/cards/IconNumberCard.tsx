// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from './MainCard';
import { GenericCardProps } from 'types';

// =============================|| ICON NUMBER CARD ||============================= //

interface IconNumberCardProps extends GenericCardProps {}

const IconNumberCard = ({ title, primary, color, iconPrimary }: IconNumberCardProps) => {
    const IconPrimary = iconPrimary!;
    const primaryIcon = iconPrimary ? <IconPrimary /> : null;

    return (
        <MainCard>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Typography variant="subtitle2" sx={{ color }}>
                                {primaryIcon}
                            </Typography>
                            <Typography variant="h5" color="inherit">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3">{primary}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default IconNumberCard;
