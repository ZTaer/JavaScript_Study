import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { ButtonBase, Grid, Skeleton, Tooltip } from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';
import ColorOptions from '../ColorOptions';

// assets
import CheckIcon from '@mui/icons-material/Check';
import { ColorsOptionsProps } from 'types/e-commerce';

// ==============================|| PRODUCT - COLOR OPTIONS ||============================== //

interface ColorProps {
    bg: string;
    id: string;
    colors: string[];
    label: string;
    handelFilter: (type: string, params: string) => void;
}

const Color = ({ bg, id, colors, label, handelFilter }: ColorProps) => {
    const theme = useTheme();

    return (
        <Grid item>
            <Tooltip title={label}>
                <ButtonBase sx={{ borderRadius: '50%' }} onClick={() => handelFilter('colors', id)}>
                    <Avatar
                        color="inherit"
                        size="badge"
                        sx={{
                            bgcolor: bg,
                            color: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[800],
                            opacity: colors.some((item: string) => item === id) ? 0.6 : 1
                        }}
                    >
                        {colors.some((item: string) => item === id) && (
                            <CheckIcon sx={{ color: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.50' }} fontSize="inherit" />
                        )}
                    </Avatar>
                </ButtonBase>
            </Tooltip>
        </Grid>
    );
};

// ==============================|| PRODUCT - COLOR ||============================== //

const Colors = ({ colors, handelFilter }: { colors: string[]; handelFilter: (type: string, params: string) => void }) => {
    const [isColorsLoading, setColorLoading] = useState(true);
    useEffect(() => {
        setColorLoading(false);
    }, []);

    return (
        <>
            {isColorsLoading ? (
                <Grid item xs={12}>
                    <Skeleton variant="rectangular" width="100%" height={158} />
                </Grid>
            ) : (
                <Grid container spacing={1} alignItems="center">
                    {ColorOptions.map((color: ColorsOptionsProps, index) => (
                        <Color key={index} id={color.value} bg={color.bg} label={color.label} colors={colors} handelFilter={handelFilter} />
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Colors;
