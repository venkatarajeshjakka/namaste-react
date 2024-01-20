import { createContext, useState } from "react";

const UserContext = createContext({
    loggedInUser: "userName"
});

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState("dummy");
    return (<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {children}
    </UserContext.Provider>)
}

export default UserContext;