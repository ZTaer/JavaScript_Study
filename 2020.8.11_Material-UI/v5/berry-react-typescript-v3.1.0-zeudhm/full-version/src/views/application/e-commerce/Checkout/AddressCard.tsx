// material-ui
import { Button, IconButton, Grid, Stack, Typography } from '@mui/material';

// project imports
import { Address } from 'types/e-commerce';
import SubCard from 'ui-component/cards/SubCard';
import Chip from 'ui-component/extended/Chip';

// assets
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

// ==============================|| CHECKOUT BILLING ADDRESS - ADDRESS CARD ||============================== //

interface AddressCardProps {
    address: Address | null;
    single?: boolean;
    change?: boolean;
    onBack?: () => void;
    handleClickOpen?: (billingAddress: Address) => void;
    billingAddressHandler?: (billingAddress: Address) => void;
}

const AddressCard = ({ address, single, change, handleClickOpen, billingAddressHandler, onBack }: AddressCardProps) => (
    <SubCard sx={{ height: single ? 'auto' : '100%' }}>
        {address && (
            <Grid container spacing={2}>
                {single && (
                    <Grid item xs={12}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant={change ? 'h3' : 'h3'}>Shipping Address</Typography>
                            {change && (
                                <Button variant="contained" size="small" color="primary" startIcon={<EditTwoToneIcon />} onClick={onBack}>
                                    Change
                                </Button>
                            )}
                        </Stack>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Typography variant="subtitle1">{address.name}</Typography>
                            <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>
                                ({address.destination})
                            </Typography>
                        </Stack>
                        {address.isDefault && <Chip chipcolor="primary" label="Default" size="small" />}
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={0.5}>
                        <Typography variant="body2">
                            {`${address.building}, ${address.street}, ${address.city}, ${address.state}, ${address.country} - ${address.post}`}
                        </Typography>
                        <Typography variant="caption" color="secondary">
                            {address.phone}
                        </Typography>
                    </Stack>
                </Grid>
                {!single && (
                    <Grid item xs={12}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            {billingAddressHandler && (
                                <Button variant="outlined" onClick={() => billingAddressHandler(address)}>
                                    Deliver to this Address
                                </Button>
                            )}
                            <Stack direction="row" alignItems="center" spacing={0}>
                                {handleClickOpen && (
                                    <IconButton size="small" onClick={() => handleClickOpen(address)}>
                                        <EditTwoToneIcon fontSize="small" />
                                    </IconButton>
                                )}
                                <IconButton size="small">
                                    <DeleteTwoToneIcon fontSize="small" />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Grid>
                )}
            </Grid>
        )}
    </SubCard>
);

export default AddressCard;
