// material-ui
import { Button, ButtonGroup, Grid, IconButton, Stack, Tooltip, Typography, GridProps } from '@mui/material';

// third-party
import { format } from 'date-fns';

// assets
import { IconChevronLeft, IconChevronRight, IconLayoutGrid, IconTemplate, IconLayoutList, IconListNumbers } from '@tabler/icons';

// constant
const viewOptions = [
    {
        label: 'Month',
        value: 'dayGridMonth',
        icon: IconLayoutGrid
    },
    {
        label: 'Week',
        value: 'timeGridWeek',
        icon: IconTemplate
    },
    {
        label: 'Day',
        value: 'timeGridDay',
        icon: IconLayoutList
    },
    {
        label: 'Agenda',
        value: 'listWeek',
        icon: IconListNumbers
    }
];

// ==============================|| CALENDAR TOOLBAR ||============================== //

interface ToolbarProps {
    date: number | Date;
    view: string;
    onClickNext: () => void;
    onClickPrev: () => void;
    onClickToday: () => void;
    onChangeView: (s: string) => void;
    sx?: GridProps['sx'];
}

const Toolbar = ({ date, view, onClickNext, onClickPrev, onClickToday, onChangeView, sx, ...others }: ToolbarProps) => (
    <Grid alignItems="center" container justifyContent="space-between" spacing={3} {...others} sx={{ pb: 3 }}>
        <Grid item>
            <Button variant="outlined" onClick={onClickToday}>
                Today
            </Button>
        </Grid>
        <Grid item>
            <Stack direction="row" alignItems="center" spacing={3}>
                <IconButton onClick={onClickPrev} size="large">
                    <IconChevronLeft />
                </IconButton>
                <Typography variant="h3" color="textPrimary">
                    {format(date, 'MMMM yyyy')}
                </Typography>
                <IconButton onClick={onClickNext} size="large">
                    <IconChevronRight />
                </IconButton>
            </Stack>
        </Grid>
        <Grid item>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                {viewOptions.map((viewOption) => {
                    const Icon = viewOption.icon;
                    return (
                        <Tooltip title={viewOption.label} key={viewOption.value}>
                            <Button
                                disableElevation
                                variant={viewOption.value === view ? 'contained' : 'outlined'}
                                onClick={() => onChangeView(viewOption.value)}
                            >
                                <Icon stroke="2" size="1.3rem" />
                            </Button>
                        </Tooltip>
                    );
                })}
            </ButtonGroup>
        </Grid>
    </Grid>
);

export default Toolbar;
