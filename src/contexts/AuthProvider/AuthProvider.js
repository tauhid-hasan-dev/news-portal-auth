import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const logOut = () =>{
         return signOut(auth);
    }

    const createUser = (email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=> {
      const unsubscribe = onAuthStateChanged(auth, (presentUser)=>{
        console.log('current user is here', presentUser);
        setUser(presentUser)
        setLoading(false)
      });

      return ()=> {
        unsubscribe()
      }
    },[])

    const authInfo = {user, providerLogin, loading, setLoading , logOut, createUser, signIn}
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;