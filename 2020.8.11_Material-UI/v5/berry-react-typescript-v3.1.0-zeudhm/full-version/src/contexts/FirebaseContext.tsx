import React, { createContext, useEffect, useReducer } from 'react';

// third-party
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// action - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import { FIREBASE_API } from 'config';
import { FirebaseContextType, InitialLoginContextProps } from 'types/auth';

// firebase initialize
if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_API);
}

// const
const initialState: InitialLoginContextProps = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

// ==============================|| FIREBASE CONTEXT & PROVIDER ||============================== //

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const FirebaseProvider = ({ children }: { children: React.ReactElement }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(
        () =>
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user: {
                                id: user.uid,
                                email: user.email!,
                                name: user.displayName || 'John Doe'
                            }
                        }
                    });
                } else {
                    dispatch({
                        type: LOGOUT
                    });
                }
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dispatch]
    );

    const firebaseEmailPasswordSignIn = (email: string, password: string) => firebase.auth().signInWithEmailAndPassword(email, password);

    const firebaseGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        return firebase.auth().signInWithPopup(provider);
    };

    const firebaseRegister = async (email: string, password: string) => firebase.auth().createUserWithEmailAndPassword(email, password);

    const logout = () => firebase.auth().signOut();

    const resetPassword = async (email: string) => {
        await firebase.auth().sendPasswordResetEmail(email);
    };

    const updateProfile = () => {};
    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return (
        <FirebaseContext.Provider
            value={{
                ...state,
                firebaseRegister,
                firebaseEmailPasswordSignIn,
                login: () => {},
                firebaseGoogleSignIn,
                logout,
                resetPassword,
                updateProfile
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseContext;
