import { useState } from "react";
import UserContext from "./UserContext"

const UserContextProvider = ({ children }) => {
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');

    return (
        <UserContext.Provider value={{ userFirstName, setUserFirstName, userLastName, setUserLastName }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;