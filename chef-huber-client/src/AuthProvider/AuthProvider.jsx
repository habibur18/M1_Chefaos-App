import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);
// create user with email and password
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // create user with email and password
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user profile info
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };
  // login user
  const loginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   observer for user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          console.log(user);
          setUser(user);
        } else {
          console.log("no user");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error in onAuthStateChanged:", error);
        setIsLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setUser]);

  const provider = "google.com";
  const userInfo = {
    user,
    provider,
    signupUserWithEmailAndPassword,
    updateUserProfile,
    loginUserWithEmailAndPassword,
  };
  if (isLoading) {
    return (
      <div className="flex justify-center min-h-screen items-center text-5xl">
        Loading... Wait Please
      </div>
    );
  }
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
