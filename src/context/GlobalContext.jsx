import { useState, useContext, createContext } from "react";

// import historiasData from '../bd.json'
// import historiasData from '../../bd.json'

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [ historias, setHistorias] = useState([])
    const [ dataHistoria, setDataHistoria ] = useState()

    return (
        <GlobalContext.Provider value={{ historias, setHistorias, dataHistoria, setDataHistoria }}>
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}