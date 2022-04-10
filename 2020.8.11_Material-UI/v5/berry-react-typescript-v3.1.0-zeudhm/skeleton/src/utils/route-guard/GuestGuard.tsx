import { useNavigate } from 'react-router-dom';

// project imports
import useAuth from 'hooks/useAuth';
import { DASHBOARD_PATH } from 'config';
import { GuardProps } from 'types';
import { useEffect } from 'react';

// ==============================|| GUEST GUARD ||============================== //

/**
 * Guest guard for routes having no auth required
 * @param {PropTypes.node} children children element/node
 */

const GuestGuard = ({ children }: GuardProps) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    console.log('demo');

    useEffect(() => {
        if (isLoggedIn) {
            console.log('demo 1');
            navigate(DASHBOARD_PATH, { replace: true });
        }
    }, [isLoggedIn, navigate]);

    return children;
};

export default GuestGuard;
