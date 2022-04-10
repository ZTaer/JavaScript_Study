// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Grid, SvgIconTypeMap, Typography, useMediaQuery } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { GenericCardProps } from 'types';

interface SideIconCardProps extends GenericCardProps {
    iconPrimary: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
    secondarySub?: string;
    bgcolor?: string;
}

// =============================|| SIDE ICON CARD ||============================= //

const SideIconCard = ({ iconPrimary, primary, secondary, secondarySub, color, bgcolor }: SideIconCardProps) => {
    const theme = useTheme();
    const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary !== undefined ? <IconPrimary /> : null;

    return (
        <Card sx={{ bgcolor: bgcolor || '', position: 'relative' }}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item xs={4} sx={{ background: color, py: 3.5, px: 0 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: 'center',
                            color: '#fff',
                            '& > svg': {
                                width: 32,
                                height: 32
                            }
                        }}
                        align="center"
                    >
                        {primaryIcon}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        spacing={1}
                        alignItems={matchDownXs ? 'center' : 'flex-start'}
                    >
                        <Grid item sm={12}>
                            <Typography variant="h3" sx={{ color: bgcolor ? '#fff' : '', ml: 2 }}>
                                {primary}
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="body2" align="left" sx={{ color: bgcolor ? '#fff' : 'grey.700', ml: 2 }}>
                                {secondary} <span style={{ color }}>{secondarySub}</span>{' '}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default SideIconCard;
