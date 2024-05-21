import { Button, Input, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react'
import { Calendar, Image, Pencil } from 'lucide-react';
import { useGlobalContext } from '../context/GlobalContext';

export default function FormModal(){
    const { dataHistòria, setDataHistòria } = useGlobalContext()


    return (
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">Editar Historia</ModalHeader>
                    <ModalBody>
                        <Input
                            className='mb-3'
                            label="Fecha"
                            placeholder="Selecciona una fecha"
                            endContent={<Calendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            value={dataHistòria ? dataHistòria.fecha : ''}
                        />
                        <Input
                            className='mb-3'
                            label="Título"
                            placeholder="Introduce el título"
                            endContent={<Pencil className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            value={dataHistòria ? dataHistòria.titulo : ''}
                        />
                        <Textarea
                            className='mb-3'
                            label="Experiencia"
                            placeholder="Introduce la experiencia"
                            minRows={5}
                            value={dataHistòria ? dataHistòria.experiencia : ''}
                        />
                        <Textarea
                            className='mb-3'
                            label="Comentario"
                            placeholder="Introduce un comentario"
                            minRows={5}
                            value={dataHistòria ? dataHistòria.comentario : ''}
                        />
                        <Input
                            className='mb-3'
                            label="Imagen"
                            placeholder="URL imagen"
                            endContent={<Image className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            value={dataHistòria ? dataHistòria.imagen : ''}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="success" onPress={onClose}>
                            Añadir
                        </Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    )
}