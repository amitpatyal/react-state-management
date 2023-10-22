import { createContext, useContext } from "react";

export const UserContext = createContext({
    userFirstName: "",
    setUserFirstName: "",
    userLastName: "",
    setUserLastName: "",
    getUserDetails: () => { },
});
export const UserContextProvider = UserContext.Provider;

const useUserContext = () => {
    return useContext(UserContext);
};

export default useUserContext;
