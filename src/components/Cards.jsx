import { useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext.jsx'
import SingleCard from './Card.jsx'

export default function Cards() {
    const { historias, setHistorias } = useGlobalContext()

    useEffect(() => {
        const getHistorias = async () => {
            try {
                const response = await fetch('https://json-server-liart-iota.vercel.app/historias', { method: 'GET' });
                const data = await response.json();

                if (Array.isArray(data)) {
                    console.log('historias', data);
                    setHistorias(data);
                } else {
                    console.error('Data is not an array:', data)
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        getHistorias()
    }, []);


    return (
        <div className="mx-auto max-w-[1100px] gap-5 grid grid-cols-12">
            {historias.map((historia, index) => (
                <SingleCard 
                    key={index}
                    id={historia.id}
                    titulo={historia.titulo}
                    fecha={historia.fecha}
                    experiencia={historia.experiencia}
                    comentario={historia.comentario}
                    imagen={historia.imagen}    
                />
            ))}
        </div>
    )
}