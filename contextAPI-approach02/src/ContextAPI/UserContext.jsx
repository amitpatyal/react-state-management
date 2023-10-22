import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const getUserDetails = () => {
        return (
            <div>{userFirstName} {userLastName} User Details.</div>
        )
    };
    return (
        <UserContext.Provider value={{ userFirstName, setUserFirstName, userLastName, setUserLastName, getUserDetails }}>
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = () => {
    return useContext(UserContext);
};
export default useUserContext;