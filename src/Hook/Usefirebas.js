import React, { useState, useEffect } from 'react';
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebse.initialize';

initializeAuthentication();


const Usefirebas = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoole = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleuser = result.user;
                console.log(googleuser);
                const { displayName, email } = result.user.providerData[0];
                const loginuser = {
                    name: displayName,
                    email: email,

                };
                setUser(loginuser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, users => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user);
                // ...
            } else {
                // User is signed out
                setUser({})
            }
        });
        return () => unsubscribed;
    }, []);


    // useEffect(() => {
    //     const unsubscribed = onAuthStateChanged(auth, users => {
    //         if (users) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/firebase.User
    //             setUser(user);
    //             // ...
    //         } else {
    //             // User is signed out
    //             setUser({})
    //         }
    //     });
    //     return () => unsubscribed;
    // }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }


    return {
        user,
        signInUsingGoole
    };
};

export default Usefirebas;