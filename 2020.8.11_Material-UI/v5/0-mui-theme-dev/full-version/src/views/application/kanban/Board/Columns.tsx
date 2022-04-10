import { CSSProperties, useState } from 'react';

// material-ui
import { useTheme, Theme } from '@mui/material/styles';
import { Grid, IconButton } from '@mui/material';

// third-party
import { Droppable, Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';

// project imports
import useConfig from 'hooks/useConfig';
import EditColumn from './EditColumn';
import Items from './Items';
import AddItem from './AddItem';
import AlertColumnDelete from './AlertColumnDelete';
import { gridSpacing } from 'store/constant';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { deleteColumn } from 'store/slices/kanban';

// assets
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

// types
import { DefaultRootStateProps } from 'types';
import { KanbanColumn } from 'types/kanban';

interface Props {
    column: KanbanColumn;
    index: number;
}

// column drag wrapper
const getDragWrapper = (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
    theme: Theme,
    radius: string
): CSSProperties | undefined => {
    const bgcolor = theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light;
    return {
        minWidth: 250,
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary[200] + 75,
        backgroundColor: isDragging ? theme.palette.grey[50] : bgcolor,
        borderRadius: radius,
        userSelect: 'none',
        margin: `0 ${16}px 0 0`,
        height: '100%',
        ...draggableStyle
    };
};

// column drop wrapper
const getDropWrapper = (isDraggingOver: boolean, theme: Theme, radius: string) => {
    const bgcolor = theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light;
    const bgcolorDrop = theme.palette.mode === 'dark' ? theme.palette.text.disabled : theme.palette.primary[200];

    return {
        background: isDraggingOver ? bgcolorDrop : bgcolor,
        padding: '8px 16px 14px',
        width: 'auto',
        borderRadius: radius
    };
};

// ==============================|| KANBAN BOARD - COLUMN ||============================== //

const Columns = ({ column, index }: Props) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const { borderRadius } = useConfig();
    const { items, columns, columnsOrder } = useSelector((state: DefaultRootStateProps) => state.kanban);
    const columnItems = column.itemIds.map((itemId) => items.filter((item) => item.id === itemId)[0]);

    const handleColumnDelete = () => {
        setOpen(true);
    };

    const [open, setOpen] = useState(false);
    const handleClose = (status: boolean) => {
        setOpen(false);
        if (status) {
            dispatch(deleteColumn(column.id, columnsOrder, columns));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Column deleted successfully',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
        }
    };

    return (
        <Draggable draggableId={column.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getDragWrapper(snapshot.isDragging, provided.draggableProps.style, theme, `${borderRadius}px`)}
                >
                    <Droppable droppableId={column.id} type="item">
                        {(providedDrop, snapshotDrop) => (
                            <div
                                ref={providedDrop.innerRef}
                                {...providedDrop.droppableProps}
                                style={getDropWrapper(snapshotDrop.isDraggingOver, theme, `${borderRadius}px`)}
                            >
                                <Grid container alignItems="center" spacing={gridSpacing}>
                                    <Grid item xs zeroMinWidth>
                                        <EditColumn column={column} />
                                    </Grid>
                                    <Grid item sx={{ mb: 1.5 }}>
                                        <IconButton onClick={handleColumnDelete} size="large">
                                            <DeleteTwoToneIcon fontSize="small" aria-controls="menu-simple-card" aria-haspopup="true" />
                                        </IconButton>
                                        {open && <AlertColumnDelete title={column.title} open={open} handleClose={handleClose} />}
                                    </Grid>
                                </Grid>
                                {columnItems.map((item, i) => (
                                    <Items key={i} item={item} index={i} />
                                ))}
                                {providedDrop.placeholder}
                                <AddItem columnId={column.id} />
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
};

export default Columns;
