import { ReactNode } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, Grid, Typography } from '@mui/material';

// third party
import Chart, { Props as ChartProps } from 'react-apexcharts';

interface SalesLineChartCardProps {
    bgColor?: string;
    chartData?: ChartProps;
    footerData?: { value: string; label: string }[];
    icon?: ReactNode | string;
    title?: string;
    percentage?: string;
}

// ============================|| SALES LINE CARD ||============================ //

const SalesLineChartCard = ({ bgColor, chartData, footerData, icon, title, percentage }: SalesLineChartCardProps) => {
    const theme = useTheme();

    let footerHtml;
    if (footerData) {
        footerHtml = footerData.map((item, index) => (
            <Grid item key={index}>
                <Box
                    sx={{
                        mt: 3,
                        mb: 3,
                        p: 1
                    }}
                >
                    <Grid container direction="column" spacing={1} alignItems="center">
                        <Typography variant="h3" sx={{ mb: 1 }}>
                            {item.value}
                        </Typography>
                        <Typography variant="body1">{item.label}</Typography>
                    </Grid>
                </Box>
            </Grid>
        ));
    }

    return (
        <Card>
            <Box
                sx={{
                    color: '#fff',
                    bgcolor: bgColor || theme.palette.primary.dark,
                    p: 3
                }}
            >
                <Grid container direction="column" spacing={1}>
                    <Grid item container justifyContent="space-between" alignItems="center">
                        {title && (
                            <Grid item>
                                <Typography variant="subtitle1" color="inherit">
                                    {title}
                                </Typography>
                            </Grid>
                        )}
                        <Grid item>
                            <Grid container alignItems="center">
                                {icon && (
                                    <Box
                                        component="span"
                                        sx={{
                                            mr: 2
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                )}
                                {percentage && (
                                    <Typography variant="subtitle1" color="inherit">
                                        {percentage}
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                    {chartData && (
                        <Grid item>
                            <Chart {...chartData} />
                        </Grid>
                    )}
                </Grid>
            </Box>
            {footerData && (
                <Grid container justifyContent="space-around" alignItems="center">
                    {footerHtml}
                </Grid>
            )}
        </Card>
    );
};

export default SalesLineChartCard;
