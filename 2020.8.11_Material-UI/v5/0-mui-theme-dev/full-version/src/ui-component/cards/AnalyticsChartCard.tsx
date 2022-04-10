import React, { useState } from 'react';

// material-ui
import { Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';

// third party
import Chart, { Props as ChartProps } from 'react-apexcharts';

// project imports
import MainCard from './MainCard';
import { GenericCardProps } from 'types';

// assets
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// ==========================|| ANALYTICS CHART CARD ||========================== //

interface AnalyticsChartCardProps extends GenericCardProps {
    title: string;
    chartData: ChartProps;
    dropData: { options: { label: string; value: number }[]; title: string };
    listData: { color: string; value: number; icon: React.ReactNode | string; state: number; percentage: number }[];
}

const AnalyticsChartCard = ({ title, chartData, dropData, listData }: AnalyticsChartCardProps) => {
    const [anchorEl, setAnchorEl] = useState<Element | ((element: Element) => Element) | null | undefined>(null);

    let dropHtml;
    if (dropData) {
        const handleClick = (event: React.MouseEvent<HTMLButtonElement> | undefined) => {
            setAnchorEl(event?.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        dropHtml = (
            <>
                <Button variant="text" disableElevation size="small" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    {dropData.title}
                </Button>
                <Menu
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {dropData?.options.map((option, index) => (
                        <MenuItem key={index} onClick={handleClose}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Menu>
            </>
        );
    }

    let listItem;
    if (listData) {
        listItem = listData.map((item, index) => (
            <Grid item key={index} sm={12}>
                <Box
                    sx={{
                        color: item.color
                    }}
                >
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>{item.icon}</Grid>
                        <Grid item>
                            <Typography variant="subtitle1">{item.value}%</Typography>
                        </Grid>
                        <Grid item>
                            {item.state === 1 && <ArrowUpwardIcon fontSize="inherit" color="inherit" />}
                            {item.state === 0 && <ArrowDownwardIcon fontSize="inherit" color="inherit" />}
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                {item.percentage}%
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        ));
    }

    return (
        <MainCard>
            <Grid container justifyContent="space-between" alignItems="center">
                {title && (
                    <Grid item>
                        <Typography variant="subtitle1">{title}</Typography>
                    </Grid>
                )}
                <Grid item>{dropHtml}</Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item container direction="column" spacing={1} xs={12} sm={6}>
                    <Box
                        sx={{
                            mt: 3,
                            display: 'block'
                        }}
                    >
                        {listItem}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Chart {...chartData} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default AnalyticsChartCard;
