import { Spinner } from "@heroui/spinner";
import {
    Modal,
    ModalContent,
    useDisclosure,
} from "@heroui/react";

export default function Loader() {
    const { onOpenChange } = useDisclosure();
    return (
        <>
            <Modal hideCloseButton={true} isOpen={true} onOpenChange={onOpenChange}>
                <ModalContent className="bg-black w-fit overflow-hidden rounded-full">
                    <Spinner />
                </ModalContent>
            </Modal>
        </>
    );
}
