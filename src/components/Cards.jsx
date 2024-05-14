import { historias } from '../bd.js'
import SingleCard from './Card.jsx'

export default function Cards() {
  
    return (
        <div className="mx-auto max-w-[1100px] gap-5 grid grid-cols-12">
            {historias.map((historia, index) => (
                <SingleCard 
                    key={index}
                    id={historia.id}
                    titulo={historia.titulo}
                    fecha={historia.fecha}
                    experiencia={historia.experiencia}
                    imagen={historia.imagen}    
                />
            ))}
        </div>
    )
}