import { useState, useEffect, useRef } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import auth from '../Firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
import initializeAuthentication from '../Firebase/firebse.initialize';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


initializeAuthentication();


const Usefirebase = () => {

    const [user, setUser] = useState({});
    // const [loginuser, setLoginuser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [islogin, setIslogin] = useState(false);
    const auth = getAuth();
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    // const emailRef = useRef('');
    // const passwordRef = useRef('');
    // const nameRef = useRef('');

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

    // const handleGithubSignIn = () => {
    //     signInWithPopup(auth, githubProvider)
    //         .then(result => {
    //             const gituser = result.user;
    //             console.log(gituser);
    //             const { displayName, email, uid } = result.user.providerData[0];
    //             const loginuser = {
    //                 name: displayName,
    //                 email: email,
    //                 uid: uid
    //             };
    //             // console.log(uid)
    //             setUser(loginuser);
    //         })
    // }




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
        isLoading,
        // handleGithubSignIn
    };
};

export default Usefirebase;