import { Button, Input, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react'
import { Calendar, Image, Pencil } from 'lucide-react';
import { useGlobalContext } from '../context/GlobalContext';

export default function FormModal(){
    const { dataHistòria, setDataHistòria } = useGlobalContext()

    function controladorFormHistòria(e) {
        const { name, value } = e.target;
        setDataHistòria(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    function controladorActualizaHistòrias() {
        console.log(`ID: ${dataHistòria.id}`);
        console.log('Información de la historia:', dataHistòria);
    }


    return (
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">{dataHistòria ? `Editar Historia "${dataHistòria.titulo}"` : 'Nueva historia ejemplo'}</ModalHeader>
                    <ModalBody>
                        <Input
                            className='mb-3'
                            label="Fecha"
                            placeholder="Selecciona una fecha"
                            endContent={<Calendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            name="fecha"
                            value={dataHistòria ? dataHistòria.fecha : ''}
                            onChange={controladorFormHistòria}
                        />
                        <Input
                            className='mb-3'
                            label="Título"
                            placeholder="Introduce el título"
                            endContent={<Pencil className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            name="titulo"
                            value={dataHistòria ? dataHistòria.titulo : ''}
                            onChange={controladorFormHistòria}
                        />
                        <Textarea
                            className='mb-3'
                            label="Experiencia"
                            placeholder="Introduce la experiencia"
                            minRows={5}
                            name="experiencia"
                            value={dataHistòria ? dataHistòria.experiencia : ''}
                            onChange={controladorFormHistòria}
                        />
                        <Textarea
                            className='mb-3'
                            label="Comentario"
                            placeholder="Introduce un comentario"
                            minRows={5}
                            name="comentario"
                            value={dataHistòria ? dataHistòria.comentario : ''}
                            onChange={controladorFormHistòria}
                        />
                        <Input
                            className='mb-3'
                            label="Imagen"
                            placeholder="URL imagen"
                            endContent={<Image className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            name="imagen"
                            value={dataHistòria ? dataHistòria.imagen : ''}
                            onChange={controladorFormHistòria}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                            Cerrar
                        </Button>
                        <Button color={dataHistòria ? "success" : 'primary'} onPress={() => {controladorActualizaHistòrias(); onClose();}}>
                            {dataHistòria ? 'Actualizar' : 'Crear historia'}
                        </Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    )
}
