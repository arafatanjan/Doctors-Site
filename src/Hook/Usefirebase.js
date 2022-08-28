import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import auth from '../Firebase/firebase.config';

import initializeAuthentication from '../Firebase/firebse.initialize';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


initializeAuthentication();


const Usefirebase = () => {

    const [user, setUser] = useState({});
    const [loginuser, setLoginuser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoole = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleuser = result.user;
                console.log(googleuser);
                const { displayName, email } = result.user;
                const user = {
                    name: displayName,
                    email: email,

                };
                setUser(user);
            })
            .finally(() => setIsLoading(false));
        // .catch(error => {
        //     console.log(error.message);
    }

    // observer user state change
    // useEffect(() => {
    //     const unsubscribed = onAuthStateChanged(auth, user => {
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/firebase.User
    //             setUser(user);
    //             // ...
    //         }
    //         else {
    //             // User is signed out
    //             setUser({})
    //         }
    //     });
    //     return () => unsubscribed;
    // }, [auth, user]);


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user);

                // ...
            } else {
                // User is signed out
                setUser({})

            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));

    }


    return {
        user,
        signInUsingGoole,
        logout,
        isLoading
    };
};

export default Usefirebase;