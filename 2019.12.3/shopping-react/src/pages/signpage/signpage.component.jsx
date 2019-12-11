import React from 'react';
import "./signpage.styles.scss";

import SignIn from '../../components/sign-in/sign-in.component';

const SignPage = () => {
    return (
        <div className="sign-content">
            <SignIn className="signIn" />
        </div>
    );
}

export default SignPage;