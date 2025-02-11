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
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            <p>No babe you can't</p>
          </ModalHeader>
          <ModalBody>
            <p>Why....</p>
            <p>
              I know you've been working really hard these past few weeks, but
              honey, you've done a great job. Don't feel bad about things that
              make you unhappy, okay? Then press <p className="font-bold">Good button</p>
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Okay
            </Button>
            <Button
              style={{ backgroundColor: "#ec4899", color: "white" }}
              onPress={onClose}
            >
              Okay
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
