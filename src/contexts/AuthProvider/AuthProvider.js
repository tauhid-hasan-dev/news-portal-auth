import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
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

    const authInfo = {user, providerLogin, loading, setLoading}
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;