import React, { useRef } from 'react';

import initializeAuthentication from '../../Firebase/firebse.initialize';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { useNavigate } from 'react-router-dom';
import './Loggedin.css';



initializeAuthentication();


const auth = getAuth();

const githubProvider = new GithubAuthProvider();

const Loggedin = () => {
    const { signInUsingGoole, handleGithubSignIn } = useAuth();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    // const { signInUsingGoole } = useAuth();
    // const [email, setEmail] = useState('');
    // // const [users, setUsers] = useState({});
    // const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [islogin, setIslogin] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        uid: "",
    });
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    const toggleLogin = e => {
        setIslogin(e.target.checked);
    }
    // const handleEmailChange = e => {
    //     setEmail(e.target.value);
    // }

    // const handlePasswordChange = e => {
    //     setPassword(e.target.value)
    //  }
    const navigate = useNavigate();

    // const navigateLogin = () => {
    //     navigate('/loggedin');
    // }

    const handleRegitrtion = event => {

        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        console.log(name, email, password);
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
                    const password = result.password;
                    // console.log(user);
                    setError('');
                    // ...

                    // if (!user.email) {
                    //     setError('Wrong Mail')
                    //     return;
                    // }
                    if (user.email) {
                        navigate('/home');
                    }
                })
                .catch((error) => {

                    const errorMessage = error.message;
                    // console.log(errorMessage);
                    setError(errorMessage)
                    return
                });

        };


        function createNewUser(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    // Signed in 
                    const user = result.user;
                    // console.log(user);
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
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                // Email verification sent!
                // ...
                console.log(result);
            });

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
                    // console.log(uid)
                    setUser(loginuser);
                })
        }
    };
    return (

        <div className="container mx-auto w-50">
            <h3 className='text-primary my-2'>Please {islogin ? 'Login' : 'Register'}</h3>
            <form onSubmit={handleRegitrtion}>

                <div className="row mb-3" style={{ 'textAlign': 'left' }}>
                    <label htmlFor="" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="" ref={nameRef} placeholder='Enter Name' className="form-control" id="" required />
                    </div>
                </div>
                <div className="row mb-3" style={{ 'textAlign': 'left' }}>
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" ref={emailRef} placeholder='Enter Email' className="form-control" id="inputEmail3" required />
                    </div>
                    {/* <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" ref={emailRef} placeholder='Enter Email' className="form-control" id="inputEmail3" required />
                    </div> */}
                </div>
                <div className="row mb-3" style={{ 'textAlign': 'left' }}>
                    <label htmlFor="inputPassword3" className="col-sm-2  col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" placeholder='Enter Password' ref={passwordRef} className="form-control" id="inputPassword3" required />
                    </div>
                    {/* <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" placeholder='Enter Password' ref={passwordRef} className="form-control" id="inputPassword3" required />
                    </div> */}
                </div>
                <div>
                    <div className="col-sm-10 offset-sm-2 ">
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
                <button onClick={handleSignOut} className=''>  Sign Out</button>
                :
                <div>
                    <button onClick={signInUsingGoole} className='btn btn-primary m-2'> Google Sign in</button>
                    <button onClick={handleGithubSignIn} className='btn btn-primary m-2'> Github Sign in</button>
                </div>
            }
            <br />
            {/* {user.name ?
                <h2>{user?.name}</h2>
                :
                <h2></h2>} */}
            <br />
            <br />
            <br />
            {/* <h2>{user?.uid}</h2>
            <p>Programming is fun! </p> */}

        </div>


    );
};

export default Loggedin;