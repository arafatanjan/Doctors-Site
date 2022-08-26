import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import auth from '../Firebase/firebase.config';

import initializeAuthentication from '../Firebase/firebse.initialize';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


initializeAuthentication();


const Usefirebase = () => {

    const [user, setUser] = useState({});
    const [loginuser, setLoginuser] = useState({});

    // const auth = getAuth();
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // const googleProvider = new GoogleAuthProvider();

    // const signInUsingGoole = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const googleuser = result.user;
    //             console.log(googleuser);
    //             const { displayName, email } = result.user;
    //             const loginuser = {
    //                 name: displayName,
    //                 email: email,

    //             };
    //             setLoginuser(loginuser);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }
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


    // useEffect(() => {
    //     const unsubscribed = onAuthStateChanged(auth, user => {
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/firebase.User
    //             setUser(user);
    //             console.log('ddddd');
    //             // ...
    //         } else {
    //             // User is signed out
    //             setUser({})

    //         }
    //     });
    //     return () => unsubscribed;
    // }, []);

    const logout = () => {
        signOut(auth)
            .then(() => { });

    }


    return {
        user,
        // signInUsingGoole,
        logout
    };
};

export default Usefirebase;