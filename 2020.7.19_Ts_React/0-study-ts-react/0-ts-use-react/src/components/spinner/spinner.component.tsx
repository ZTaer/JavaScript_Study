import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner: React.FC = () => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>       
    );
}

export default Spinner;