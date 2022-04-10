import { experimentalStyled as styled } from '@mui/material/styles';
import { InputLabel as MuiInputLabel, InputLabelProps } from '@mui/material';

const BInputLabel = styled((props: MUIInputLabelProps) => <MuiInputLabel {...props} />, {
    shouldForwardProp: (prop) => prop !== 'horizontal'
})(({ theme, horizontal }) => ({
    color: theme.palette.text.primary,
    fontWeight: 500,
    marginBottom: horizontal ? 0 : 8
}));

interface MUIInputLabelProps extends InputLabelProps {
    horizontal?: boolean;
}

const InputLabel = ({ children, horizontal, ...others }: MUIInputLabelProps) => (
    <BInputLabel horizontal={horizontal} {...others}>
        {children}
    </BInputLabel>
);

InputLabel.defaultProps = {
    horizontal: false
};

export default InputLabel;
