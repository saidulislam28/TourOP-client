import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";




export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);


//  social providers 

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();



  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password );
  };

  const updateProfileInfo = (name, photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name,
     photoURL: photo
    })
  
  }


  const LogIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email , password)
  }

  // google Login with firebase
  const googleLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  // twitter login 
  const twitterLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);

  }
  // github login

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    updateProfileInfo,
    googleLogin,
    twitterLogin,
    githubLogin,
    LogIn,
    logOut,
    setLoading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;