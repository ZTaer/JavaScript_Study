import React from 'react';
import Spinner from '../spinner/spinner.component';

// hoc加载器
const WithSpinner = PropsComponent => ({ isLoadding, ...otherProps }) => {

    return isLoadding ?
    <Spinner /> :
    <PropsComponent { ...otherProps } />
}

export default WithSpinner;