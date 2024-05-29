import { Button, Input, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react';
import { Calendar, Image, Pencil } from 'lucide-react';
import { useGlobalContext } from '../context/GlobalContext';

export default function FormModal() {
    const { setHistorias, dataHistoria, setDataHistoria, addHistoria } = useGlobalContext();

    function controladorFormHistoria(e) {
        const { name, value } = e.target;
        setDataHistoria(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const getHistorias = async () => {
        try {
            const response = await fetch('https://json-server-liart-iota.vercel.app/historias', { method: 'GET' });
            const data = await response.json();

            if (Array.isArray(data)) {
                console.log('historias', data);
                setHistorias(data);
            } else {
                console.error('Data is not an array:', data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    async function controladorActualizaHistorias(dataHistoria) {
        console.log(`ID: ${dataHistoria.id}`);

        try {
            const response = await fetch(`https://json-server-liart-iota.vercel.app/historias/${dataHistoria.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataHistoria)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Información de la historia actualizada:', data);
                await getHistorias();
            } else {
                console.error('Error al actualizar la historia');
            }
        } catch (error) {
            console.error('Error actualizando la historia:', error);
        }
    }

    async function handleNuevaHistoria() {
        await addHistoria();
        await getHistorias();
    }

    return (
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">{dataHistoria?.id ? `Editar Historia "${dataHistoria.titulo}"` : 'Nueva historia'}</ModalHeader>
                    <ModalBody>
                        <Input
                            className='mb-3'
                            label="Fecha"
                            placeholder="Selecciona una fecha"
                            endContent={<Calendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            name="fecha"
                            value={dataHistoria?.fecha || ''}
                            onChange={controladorFormHistoria}
                        />
                        <Input
                            className='mb-3'
                            label="Título"
                            placeholder="Introduce el título"
                            endContent={<Pencil className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            name="titulo"
                            value={dataHistoria?.titulo || ''}
                            onChange={controladorFormHistoria}
                        />
                        <Textarea
                            className='mb-3'
                            label="Experiencia"
                            placeholder="Introduce la experiencia"
                            minRows={5}
                            name="experiencia"
                            value={dataHistoria?.experiencia || ''}
                            onChange={controladorFormHistoria}
                        />
                        <Textarea
                            className='mb-3'
                            label="Comentario"
                            placeholder="Introduce un comentario"
                            minRows={5}
                            name="comentario"
                            value={dataHistoria?.comentario || ''}
                            onChange={controladorFormHistoria}
                        />
                        <Input
                            className='mb-3'
                            label="Imagen"
                            placeholder="URL imagen"
                            endContent={<Image className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            name="imagen"
                            value={dataHistoria?.imagen || ''}
                            onChange={controladorFormHistoria}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                            Cerrar
                        </Button>
                        {dataHistoria?.id ? (
                            <Button color="success" onPress={() => { controladorActualizaHistorias(dataHistoria); onClose(); }}>
                                Actualizar
                            </Button>
                        ) : (
                            <Button color='primary' onPress={() => { handleNuevaHistoria(); onClose(); }}>
                                Crear historia
                            </Button>
                        )}
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    );
}
