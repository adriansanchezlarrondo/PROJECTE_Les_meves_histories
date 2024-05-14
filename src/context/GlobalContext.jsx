import { useState, useContext, createContext } from "react";

import historiasData from '../bd.json'

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState(historiasData.historias)

    return (
        <GlobalContext.Provider value={{ historias, setHistorias }}>
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}