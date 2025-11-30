import { Spinner } from "@heroui/spinner";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";

export default function Loader() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Modal isOpen={true} onOpenChange={onOpenChange}>
                <ModalContent className="bg-black w-50">
                    <Spinner />
                </ModalContent>
            </Modal>
        </>
    );
}
