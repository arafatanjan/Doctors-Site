import React from 'react';
import './App.css';
import initializeAuthentication from './Firebase/firebse.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import { useState } from 'react';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth()

const Loggedin = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        uid: "",
    });
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const gituser = result.user;
                console.log(gituser);
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

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const gituser = result.user;
                console.log(gituser);
                const { displayName, email, uid } = result.user.providerData[0];
                const loginuser = {
                    name: displayName,
                    email: email,
                    uid: uid
                };
                console.log(uid)
                setUser(loginuser);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    return (
        <div className="App">

            {user.name || user.uid ?
                <button onClick={handleSignOut}>  Sign Out</button>
                :
                <div>
                    <button onClick={handleGoogleSignIn}> Google Sign in</button>
                    <button onClick={handleGithubSignIn}> Github Sign in</button>
                </div>
            }
            <br />
            {user.name ?
                <h2>{user?.name}</h2>
                :
                <h2>{user?.uid}</h2>}
        </div>
    );
};

export default Loggedin;