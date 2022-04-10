import * as React from 'react';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogProps,
    DialogTitle,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Switch
} from '@mui/material';

export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value
        );
    };

    const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullWidth(event.target.checked);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open max-width dialog
            </Button>
            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
                {open && (
                    <>
                        <DialogTitle>Optional sizes</DialogTitle>
                        <DialogContent>
                            <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
                            <Box
                                noValidate
                                component="form"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    m: 'auto',
                                    width: 'fit-content'
                                }}
                            >
                                <FormControl sx={{ mt: 2, minWidth: 120 }}>
                                    <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                                    <Select
                                        autoFocus
                                        value={maxWidth}
                                        onChange={handleMaxWidthChange}
                                        label="maxWidth"
                                        inputProps={{
                                            name: 'max-width',
                                            id: 'max-width'
                                        }}
                                    >
                                        <MenuItem value={false as any}>false</MenuItem>
                                        <MenuItem value="xs">xs</MenuItem>
                                        <MenuItem value="sm">sm</MenuItem>
                                        <MenuItem value="md">md</MenuItem>
                                        <MenuItem value="lg">lg</MenuItem>
                                        <MenuItem value="xl">xl</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControlLabel
                                    sx={{ mt: 1 }}
                                    control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
                                    label="Full width"
                                />
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </>
    );
}
