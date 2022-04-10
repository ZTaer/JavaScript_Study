import { ReactNode } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

// third party
import Chart, { Props as ChartProps } from 'react-apexcharts';

// project imports
import MainCard from './MainCard';

// =============================|| SEO CHART CARD ||============================= //

interface SeoChartCardProps {
    chartData: ChartProps;
    value?: string | number;
    title?: string;
    icon?: ReactNode | string;
    type?: number;
}

const SeoChartCard = ({ chartData, value, title, icon, type }: SeoChartCardProps) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <MainCard>
            <Grid container justifyContent="space-between" spacing={2}>
                <Grid item xs={12}>
                    <Grid container direction={type === 1 ? 'column-reverse' : 'column'} spacing={type === 1 ? 0 : 1}>
                        {value && (
                            <Grid item>
                                <Typography variant={matchDownMd ? 'h4' : 'h3'}>{value}</Typography>
                            </Grid>
                        )}
                        {(title || icon) && (
                            <Grid item container justifyContent="flex-start" alignContent="center">
                                {title && <Typography variant="body1">{title}</Typography>}
                                {icon && (
                                    <Box
                                        sx={{
                                            ml: 1
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                )}
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                {chartData && (
                    <Grid item xs={12}>
                        <Chart {...chartData} />
                    </Grid>
                )}
            </Grid>
        </MainCard>
    );
};

export default SeoChartCard;
