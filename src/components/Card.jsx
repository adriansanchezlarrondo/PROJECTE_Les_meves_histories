import { Button, Card, CardFooter, CardHeader, Image, Modal, useDisclosure } from "@nextui-org/react";
import { Pencil, Trash2 } from "lucide-react";
import FormModal from "./Modal";
import { useGlobalContext } from "../context/GlobalContext";

export default function SingleCard({ id, titulo, fecha, experiencia, comentario, imagen }) {
    const { dataHistoria, setDataHistoria } = useGlobalContext()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    function controladorEditarHistoria() {
        const historia = {
            "id": id,
            "titulo": titulo,
            "fecha": fecha,
            "experiencia": experiencia,
            "comentario": comentario,
            "imagen": imagen
        }

        setDataHistoria(historia)
        onOpen()
    }

    function controladorBorrarHistoria(id) {
        console.log("ID de la historia a borrar:", id);
    }

    return (
    <>
        <Card id={id} isFooterBlurred className="w-full h-[300px] col-span-12 md:col-span-6">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Viaje a {titulo}</p>
                <h4 className="text-black font-medium text-2xl">{fecha}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={imagen}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div className="w-2/3">
                    <p className="text-black text-tiny">{experiencia}</p>
                </div>
                <div className="space-x-2 ">
                    <Button color="warning" variant="ghost" radius="lg" size="sm" onClick={controladorEditarHistoria}>
                        <Pencil />
                    </Button>
                    <Button color="danger" variant="ghost" radius="lg" size="sm" onClick={() => controladorBorrarHistoria(id)}>
                        <Trash2 />
                    </Button>
                </div>
            </CardFooter>
        </Card>

        <Modal
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement="top-center"
        >
            <FormModal />
        </Modal>
    </>

    )
}