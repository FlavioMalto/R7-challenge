import { createContext, useState, useContext } from "react";

const DataContext = createContext();

export default function DataProvider({ children }) {
    
    const [data, setData] = useState({});

    return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;

}

export function useDataContext() {

    const context = useContext(DataContext);

    const { data, setData } = context;

    return { data, setData };
}