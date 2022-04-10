import { ChangeEvent, KeyboardEvent, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, TextField } from '@mui/material';

// third-party
import { Chance } from 'chance';

// project imports
import useConfig from 'hooks/useConfig';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { addItemComment } from 'store/slices/kanban';

// assets
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import AddToDriveTwoToneIcon from '@mui/icons-material/AddToDriveTwoTone';

// types
import { KanbanComment } from 'types/kanban';
import { DefaultRootStateProps } from 'types';

interface Props {
    itemId: string | false;
}

const chance = new Chance();

// ==============================|| KANBAN BOARD - ADD ITEM COMMENT ||============================== //

const AddItemComment = ({ itemId }: Props) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { borderRadius } = useConfig();
    const { comments, items } = useSelector((state: DefaultRootStateProps) => state.kanban);

    const [comment, setComment] = useState('');
    const [isComment, setIsComment] = useState(false);

    const handleAddTaskComment = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            addTaskComment();
        }
    };

    const addTaskComment = () => {
        if (comment.length > 0) {
            const newComment: KanbanComment = {
                id: `${chance.integer({ min: 1000, max: 9999 })}`,
                comment,
                profileId: 'profile-1'
            };

            dispatch(addItemComment(itemId, newComment, items, comments));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Comment Add successfully',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );

            setComment('');
        } else {
            setIsComment(true);
        }
    };

    const handleTaskComment = (event: ChangeEvent<HTMLInputElement>) => {
        const newComment = event.target.value;
        setComment(newComment);
        if (newComment.length <= 0) {
            setIsComment(true);
        } else {
            setIsComment(false);
        }
    };

    return (
        <Box
            sx={{
                p: 2.5,
                border: '1px solid',
                borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary[200] + 75,
                borderRadius: `${borderRadius}px`
            }}
        >
            <Grid container alignItems="center" spacing={0.5}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        placeholder="Add Comment"
                        value={comment}
                        onChange={handleTaskComment}
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
                        onKeyUp={handleAddTaskComment}
                        helperText={isComment ? 'Comment is required.' : ''}
                        error={isComment}
                    />
                </Grid>
                <Grid item>
                    <Button variant="text" color="primary" sx={{ p: 0.5, minWidth: 32 }}>
                        <AddPhotoAlternateTwoToneIcon />
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="text" color="primary" sx={{ p: 0.5, minWidth: 32 }}>
                        <AttachFileTwoToneIcon />
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="text" color="primary" sx={{ p: 0.5, minWidth: 32 }}>
                        <AddToDriveTwoToneIcon />
                    </Button>
                </Grid>
                <Grid item xs zeroMinWidth />
                <Grid item>
                    <Button variant="contained" color="primary" onClick={addTaskComment}>
                        Comment
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AddItemComment;
