import React from 'react';

import initializeAuthentication from '../../Firebase/firebse.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import { useState } from 'react';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth()

const Loggedin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleRegitrtion = e => {
        console.log(email, password);
        e.preventDefault();
    }
    return (

        <div className="">
            <h3 className='text-primary'>Please Register</h3>
            <form onSubmit={handleRegitrtion}>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">
                                Example checkbox
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
            <br />
            <br />
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
            <p>Programming is fun! </p>

        </div>

    );
};

export default Loggedin;