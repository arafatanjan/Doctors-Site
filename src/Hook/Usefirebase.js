import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebse.initialize';

initializeAuthentication();


const Usefirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoole = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleuser = result.user;
                console.log(googleuser);
                const { displayName, email } = result.user;
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
                console.log(user);
                // ...
            } else {
                // User is signed out
                setUser({})

            }
        });
        return () => unsubscribed;
    }, [auth]);

    const logout = () => {
        signOut(auth)
            .then(() => { });

    }


    return {
        user,
        signInUsingGoole,
        logout
    };
};

export default Usefirebase;