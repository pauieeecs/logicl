import {
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
type Props = {
  text: string
  isOpen: boolean
  onClose(): void
}
const ModalContainer: React.FC<Props> = ({ isOpen, onClose, text }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bgColor="rgba(0,56,72,.5)" />
      <ModalContent maxW="1080px" w="960px" padding={4}>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="18px">{text}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalContainer
