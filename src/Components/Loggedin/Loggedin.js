import React, { useEffect } from 'react';

import initializeAuthentication from '../../Firebase/firebse.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { useNavigate } from 'react-router-dom';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();


const Loggedin = () => {
    const { signInUsingGoole } = useAuth();
    const [email, setEmail] = useState('');
    // const [users, setUsers] = useState({});
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [islogin, setIslogin] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        uid: "",
    });
    // const handleGoogleSignIn = () => {

    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const gituser = result.user;
    //             console.log(gituser);
    //             const { displayName, email } = result.user.providerData[0];
    //             const loginuser = {
    //                 name: displayName,
    //                 email: email,

    //             };
    //             setUser(loginuser);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }
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

    const toggleLogin = e => {
        setIslogin(e.target.checked);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const navigate = useNavigate;

    const navigateLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home');
    }
    const handleRegitrtion = e => {
        // console.log(email, password);
        e.preventDefault();
        if (password.length < 6) {
            setError('Pasword must be 6')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 uppercase')
            return;
        }
        islogin ? processlogin(email, password) : createNewUser(email, password);

        function processlogin(email, password) {
            signInWithEmailAndPassword(auth, email, password)
                .then(result => {
                    // Signed in 
                    const user = result.user;
                    console.log(user);
                    setError('');
                    // ...
                })
                .catch((error) => {

                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        };

        function createNewUser(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    // Signed in 
                    const user = result.user;
                    console.log(user);
                    setError('');
                    // ...
                    verifyEmail();
                })
                .catch((error) => {

                    const errorMessage = error.message;
                    setError(errorMessage);
                    // ..
                });
        }


    }
    function verifyEmail() {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                // Email verification sent!
                // ...
                console.log(result);
            });
    }
    return (

        <div className="">
            <h3 className='text-primary'>Please {islogin ? 'Login' : 'Register'}</h3>
            <form onSubmit={handleRegitrtion}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div>
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">{islogin ? 'Login' : 'Register'}</button>
            </form>
            <br />
            <br />
            {user.name || user.uid ?
                <button onClick={handleSignOut}>  Sign Out</button>
                :
                <div>
                    <button onClick={signInUsingGoole}> Google Sign in</button>
                    <button onClick={handleGithubSignIn}> Github Sign in</button>
                </div>
            }
            <br />
            {user.name ?
                <h2>{user?.name}</h2>
                :
                <h2></h2>}
            <br />
            <br />
            <br />
            {/* <h2>{user?.uid}</h2>
            <p>Programming is fun! </p> */}

        </div>


    );
};

export default Loggedin;