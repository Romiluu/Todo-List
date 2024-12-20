import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text } from "@chakra-ui/react";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="purple.100">
        <ModalHeader>Confirmación de Eliminación</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="purple.600" fontSize="lg">
            ¿Está seguro de que desea eliminar esta tarea?
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="purple" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="red" onClick={onConfirm}>
            Eliminar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDeleteModal;
