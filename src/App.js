import logo from './logo.svg';
import './App.css';
import initializeAuthentication from './Firebase/firebse.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useState } from 'react';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth()

function App() {
  const [user, setUser] = useState({})
  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user
        const loginuser = {
          name: displayName,
          email: email,
          photo: photoURL,
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
        const user = result.user
        console.log(user);
      })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}> Google Sign in</button>
      <button onClick={handleGithubSignIn}> Github Sign in</button>
      <br />
      {user.email && <div>
        <h2>{user.name}</h2>
      </div>}
    </div>
  );
}

export default App;
