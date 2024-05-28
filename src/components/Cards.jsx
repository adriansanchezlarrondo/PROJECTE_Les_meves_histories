import { useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext.jsx'
import SingleCard from './Card.jsx'

export default function Cards() {
    const { historias } = useGlobalContext()

    useEffect(() => {
        const cargarDatos = async () => {
            const response = await fetch('https://json-server-rouge-three.vercel.app/historias', {
                method: 'GET'});
            const data = await response.json();
            console.log('get', data);
        };

        cargarDatos()
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