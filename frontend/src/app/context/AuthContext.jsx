"use client";

import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({id:null,name:"",email:"",savedProjects:[],achievements:[]});
  const [saved_projects,set_saved_projects] = useState([]);

  const login = (userData) => {
    setUser({id:userData.id,name:userData.name,email:userData.email,savedProjects:userData.savedProjects,achievements:userData.achievements}); // Set the user state to the provided user data
  };

  const logout = () => {
    setUser(null); // Clear the user state on logout
  };

  const setsavedprojects = (savedProjects) =>{
    set_saved_projects(savedProjects)
  }
  return (
    <AuthContext.Provider value={{ user, login, logout,saved_projects,set_saved_projects }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=()=> useContext(AuthContext)

export default AuthContextProvider;
