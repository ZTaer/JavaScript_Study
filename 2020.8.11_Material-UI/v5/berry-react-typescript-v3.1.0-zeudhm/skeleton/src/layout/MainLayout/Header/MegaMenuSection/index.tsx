import { useEffect, useRef, useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
    Avatar,
    ClickAwayListener,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListSubheader,
    ListItemText,
    Paper,
    Popper,
    Typography,
    useMediaQuery
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';

// assets
import Banner from './Banner';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconAccessPoint } from '@tabler/icons';
import { drawerWidth, gridSpacing } from 'store/constant';

const HeaderAvatarStyle = styled(Avatar)(({ theme }) => ({
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
    '&:hover': {
        background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
    }
}));

// ==============================|| SEARCH INPUT - MEGA MENu||============================== //

const MegaMenuSection = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<any>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event: React.MouseEvent<HTMLDivElement> | MouseEvent | TouchEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        matchDownMd && open && setOpen(false);
        // eslint-disable-next-line
    }, [matchDownMd]);

    return (
        <>
            <HeaderAvatarStyle
                variant="rounded"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{ display: { xs: 'none', md: 'flex' } }}
            >
                <IconAccessPoint stroke={1.5} size="1.3rem" />
            </HeaderAvatarStyle>
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [150, 20]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <ClickAwayListener onClickAway={handleClose}>
                        <Transitions in={open} {...TransitionProps}>
                            <Paper
                                sx={{
                                    width: {
                                        md: `calc(100vw - 100px)`,
                                        lg: `calc(100vw - ${drawerWidth + 100}px)`,
                                        xl: `calc(100vw - ${drawerWidth + 140}px)`
                                    },
                                    maxWidth: { xl: 900, md: 764 }
                                }}
                            >
                                {open && (
                                    <MainCard
                                        border={false}
                                        elevation={16}
                                        content={false}
                                        boxShadow
                                        shadow={theme.shadows[16]}
                                        sx={{ overflow: { p: 1, xs: 'visible', md: 'hidden' } }}
                                    >
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item md={4}>
                                                <Banner />
                                            </Grid>
                                            <Grid item md={8}>
                                                <Grid
                                                    container
                                                    spacing={gridSpacing}
                                                    sx={{
                                                        pt: 3,
                                                        '& .MuiListItemButton-root:hover': {
                                                            background: 'transparent',
                                                            '& .MuiTypography-root': {
                                                                color: 'secondary.main'
                                                            }
                                                        },
                                                        '& .MuiListItemIcon-root': {
                                                            minWidth: 16
                                                        }
                                                    }}
                                                >
                                                    <Grid item xs={4}>
                                                        <List
                                                            component="nav"
                                                            aria-labelledby="nested-list-user"
                                                            subheader={
                                                                <ListSubheader id="nested-list-user">
                                                                    <Typography variant="subtitle1"> User Quick</Typography>
                                                                </ListSubheader>
                                                            }
                                                        >
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Social Profile" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Account Profile" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="User Cards" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="User List" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Contact" />
                                                            </ListItemButton>
                                                        </List>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <List
                                                            component="nav"
                                                            aria-labelledby="nested-list-application"
                                                            subheader={
                                                                <ListSubheader id="nested-list-application">
                                                                    <Typography variant="subtitle1"> Applications </Typography>
                                                                </ListSubheader>
                                                            }
                                                        >
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Chat" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Kanban" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Mail" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Calendar" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="E-Commerce" />
                                                            </ListItemButton>
                                                        </List>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <List
                                                            component="nav"
                                                            aria-labelledby="nested-list-primitives"
                                                            subheader={
                                                                <ListSubheader component="div" id="nested-list-primitives">
                                                                    <Typography variant="subtitle1"> Primitives</Typography>
                                                                </ListSubheader>
                                                            }
                                                        >
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Colors" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Typography" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Shadows" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Icons" />
                                                            </ListItemButton>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Elements" />
                                                            </ListItemButton>
                                                        </List>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </MainCard>
                                )}
                            </Paper>
                        </Transitions>
                    </ClickAwayListener>
                )}
            </Popper>
        </>
    );
};

export default MegaMenuSection;
