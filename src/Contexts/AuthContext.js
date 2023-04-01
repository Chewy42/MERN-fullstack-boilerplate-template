//create react auth context

import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setLoading(false);
        });
    }, []);
    
    if (loading) {
        return <></>;
    }
    
    return (
        <AuthContext.Provider value={{ currentUser }}>
        {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;