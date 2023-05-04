import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { signInWithPopup } from 'firebase/auth';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }
    const githubSignIn = () =>{
        return signInWithPopup(auth,githubProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        });
        return () =>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        logOut,
        signIn,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;