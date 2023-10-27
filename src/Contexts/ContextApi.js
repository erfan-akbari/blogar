import { createContext, useCallback, useEffect, useState } from "react";
import { getFetch } from "../utils/apiFetch";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userID, setUserID] = useState(null)
    const [userInfos, setUserInfos] = useState([])

    const login = useCallback((ID) => {
        setUserID(ID)
        setIsLoggedIn(true)
        localStorage.setItem('userID', ID)
    }, [])

    const logout = useCallback(() => {
        setUserID(null)
        setIsLoggedIn(false)
        localStorage.removeItem('userID')
    }, [])

    useEffect(() => {
        const USER_ID = localStorage.getItem('userID')
        if (USER_ID) {
            getFetch(`users/${USER_ID}`, setUserInfos)
            setUserID(USER_ID)
            setIsLoggedIn(true)
        }
    }, [login])
    
    return (
        <AppContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            userID,
            setUserID,
            login,
            logout,
            userInfos,
            setUserInfos
        }}>
            {children}
        </AppContext.Provider>
    )
}