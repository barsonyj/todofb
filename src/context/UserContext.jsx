import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import { auth } from '../firebaseApp';

export const UserContext = createContext();

export const UserProvider = ({children}) => { // children !!!
  const [user, setUser] = useState(null);

  useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => { setUser(currentUser) });
      return () => unSubscribe();
  },[])

  const loginUser = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        //console.log("login:", email, password);
        //console.log("OK");
    } catch (error) {
        console.log(error.message);
    }
  }

  const logoutUser = async () => {
      await signOut(auth);
  }

  // console.log("user:", user);

  return(
    <UserContext.Provider value={{user, loginUser, logoutUser}}>
      {children}
    </UserContext.Provider>
  )
}