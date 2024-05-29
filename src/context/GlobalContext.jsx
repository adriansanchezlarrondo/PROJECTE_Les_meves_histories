import { useState, useContext, createContext } from "react";

// import historiasData from '../bd.json'
// import historiasData from '../../bd.json'

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [ historias, setHistorias ] = useState([]);
    const [ dataHistoria, setDataHistoria ] = useState({});

    async function addHistoria() {
        try {
            const response = await fetch(`https://json-server-liart-iota.vercel.app/historias`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataHistoria)
            });
            
            if (response.ok) {
                const data = await response.json();
                setHistorias(prevHistorias => [...prevHistorias, data]);
                console.log('Historia añadida:', data);
            } else {
                console.error('Error al borrar la historia');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <GlobalContext.Provider value={{ historias, setHistorias, dataHistoria, setDataHistoria, addHistoria }}>
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}