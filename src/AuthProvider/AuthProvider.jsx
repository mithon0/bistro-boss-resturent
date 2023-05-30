import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

 export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // signup
    const registerd=(email,password)=>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
     }
    //  login

     const loginUser=(email,password)=>{
        setLoading(false);
       return signInWithEmailAndPassword(auth,email,password);
     }

     const updateUser =(name,photo)=>{
      return updateProfile(auth.currentUser ,{
            displayName: name, photoURL: photo
        })
     }
     

     useEffect(()=>{
     const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })
     return ()=>{
        return unsubscribe()
     }
     },[]);

     const logOutH=()=>{
      return  signOut(auth)
     }

     

    const authInfo = {
        user,
        loading,
        registerd,
        loginUser,
        updateUser,
        logOutH

    }

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;