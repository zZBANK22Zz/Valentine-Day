import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

interface BadfeelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BadfeelModal({ isOpen, onClose }: BadfeelModalProps) {
  if(!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">No babe you can't</ModalHeader>
          <ModalBody>
            <p>
              Why....
            </p>
            <p>
              I know a few week of this mount you work so heavy. But babe you did great don't feel bad for the thing that make you unhappy okay? Then if you're understand it go to press Good!
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Okay
            </Button>
            <Button style={{ backgroundColor: "#ec4899", color: "white" }} onPress={onClose}>
            Okay
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}