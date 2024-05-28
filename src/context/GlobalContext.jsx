import { useState, useContext, createContext } from "react";

import historiasData from '../bd.json'
// import historiasData from '../../bd.json'

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [ historias, setHistorias] = useState(historiasData.historias)
    const [ dataHistoria, setDataHistoria ] = useState()

    const getHistorias = async () => {
        const response = await fetch('https://json-server-liart-iota.vercel.app/historias', {method: 'GET'});
        const data = await response.json();
        setHistorias(data);
        console.log('historias', data);
    };


    return (
        <GlobalContext.Provider value={{ historias, setHistorias, dataHistoria, setDataHistoria, getHistorias }}>
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}