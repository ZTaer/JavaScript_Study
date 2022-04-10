import { ChangeEvent, KeyboardEvent, useState } from 'react';

// material-ui
import { Button, Grid, IconButton, TextField, Stack } from '@mui/material';

// third-party
import { sub } from 'date-fns';
import { Chance } from 'chance';

// project imports
import { openSnackbar } from 'store/slices/snackbar';
import SubCard from 'ui-component/cards/SubCard';
import { useDispatch, useSelector } from 'store';
import { addItem } from 'store/slices/kanban';

// assets
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import CloseIcon from '@mui/icons-material/Close';

// types
import { KanbanItem } from 'types/kanban';

interface Props {
    columnId: string;
}

const chance = new Chance();

// ==============================|| KANBAN BOARD - ADD ITEM ||============================== //

const AddItem = ({ columnId }: Props) => {
    const dispatch = useDispatch();

    const [addTaskBox, setAddTaskBox] = useState(false);
    const { columns, items, userStory } = useSelector((state) => state.kanban);
    const handleAddTaskChange = () => {
        setAddTaskBox((prev) => !prev);
    };

    const [title, setTitle] = useState('');
    const [isTitle, setIsTitle] = useState(false);

    const handleAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            addTask();
        }
    };

    const addTask = () => {
        if (title.length > 0) {
            const newItem: KanbanItem = {
                id: `${chance.integer({ min: 1000, max: 9999 })}`,
                title,
                dueDate: sub(new Date(), { days: 0, hours: 1, minutes: 45 }),
                image: false,
                assign: '',
                description: '',
                priority: 'low',
                attachments: []
            };

            dispatch(addItem(columnId, columns, newItem, items, '0', userStory));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Task Add successfully',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
            handleAddTaskChange();
            setTitle('');
        } else {
            setIsTitle(true);
        }
    };

    const handleTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value;
        setTitle(newTitle);
        if (newTitle.length <= 0) {
            setIsTitle(true);
        } else {
            setIsTitle(false);
        }
    };

    return (
        <Grid container alignItems="center" spacing={1} sx={{ marginTop: 1 }}>
            {addTaskBox && (
                <Grid item xs={12}>
                    <SubCard contentSX={{ p: 2, transition: 'background-color 0.25s ease-out' }}>
                        <Grid container alignItems="center" spacing={0.5}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    placeholder="Add Task"
                                    value={title}
                                    onChange={handleTaskTitle}
                                    sx={{
                                        mb: 2,
                                        '& input': { bgcolor: 'transparent', p: 0, borderRadius: '0px' },
                                        '& fieldset': { display: 'none' },
                                        '& .MuiFormHelperText-root': {
                                            ml: 0
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            bgcolor: 'transparent'
                                        }
                                    }}
                                    onKeyUp={handleAddTask}
                                    helperText={isTitle ? 'Task title is required.' : ''}
                                    error={isTitle}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="text" size="small" color="primary" sx={{ p: 0.5, minWidth: 32 }}>
                                    <PeopleAltTwoToneIcon fontSize="small" />
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="text" size="small" color="primary" sx={{ p: 0.5, minWidth: 32 }}>
                                    <CalendarTodayTwoToneIcon fontSize="small" />
                                </Button>
                            </Grid>
                            <Grid item xs zeroMinWidth />
                            <Grid item>
                                <Stack direction="row" alignItems="center" spacing={0.5}>
                                    <IconButton size="small" color="error" onClick={handleAddTaskChange}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                    <Button variant="contained" color="primary" onClick={addTask} size="small">
                                        Add
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            )}
            {!addTaskBox && (
                <Grid item xs={12}>
                    <Button variant="text" color="primary" sx={{ width: '100%' }} onClick={handleAddTaskChange}>
                        Add Task
                    </Button>
                </Grid>
            )}
        </Grid>
    );
};

export default AddItem;
