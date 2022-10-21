import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)

  const providerLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (presentUser) => {
      console.log('current user is here', presentUser);
      setUser(presentUser)
      setLoading(false)
    });

    return () => {
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    providerLogin,
    loading,
    setLoading,
    logOut,
    createUser,
    signIn,
    updateUserProfile,
    verifyEmail
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider >
  );
};

export default AuthProvider;