import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
    
    const [user, setUser] = useState({});

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;

}

export function useUserContext() {

    const context = useContext(UserContext);

    const { user, setUser } = context;

    return { user, setUser };
}