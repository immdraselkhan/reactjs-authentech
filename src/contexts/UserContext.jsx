import React, { createContext, useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init'

// Declare auth from firebase sdk & imporing the app from firebase.init.js
const auth = getAuth(app);

// Creating Context
export const AuthContext = createContext();

const UserContext = ({children}) => {

  // User state
  const [user, setUser] = useState('');

  // Loading state
  const [loading, setLoading] = useState(true);

  // Get the currently signed-in user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      // Set logged in user to the state
      setUser(currentUser);
      // Set loading to false once we got the user
      setLoading(false);
    });
    return () => unSubscribe();
  },[]);

  // Create a password-based account
  const signupWithEmailPassword = (email, password) => {
    // Set loading true to show the loader until we got the user
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in a user with email address and password
  const logInWithEmailPassword = (email, password) => {
    // Set loading true to show the loader until we got the user
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Social media providers
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Authenticate using social media (Popup)
  const logInWithPopup = provider => {
    // Set loading true to show the loader until we got the user
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Send verification email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // Update user details
  const updateUserProfile = info => {
    return updateProfile(auth.currentUser, info);
  };

  // Send a password reset email
  const passwordResetEmail = email => {
    return sendPasswordResetEmail(auth, email);
  };

  // Sign out
  const userLogOut = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{user, googleProvider, twitterProvider, githubProvider, signupWithEmailPassword, logInWithEmailPassword, logInWithPopup, verifyEmail, passwordResetEmail, updateUserProfile, userLogOut, loading}}>
      {children}
    </AuthContext.Provider>
  )
};

export default UserContext;