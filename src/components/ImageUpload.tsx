import { Button, Flex, Image } from "@chakra-ui/react"
import { useState } from "react"
import ImageUploading from "react-images-uploading"

const ImageUpload: React.FC = () => {
  const [images, setImages] = useState<Array<File>>([])
  const maxNumber = 5

  const onChange = (imageList): void => {
    setImages(imageList)
    console.log(imageList)
  }

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
        <Flex direction="column" mt={2}>
          <Flex w="662px" h="180px" position="relative">
            {imageList.length === 0 ? (
              <Button
                w="100%"
                h="100%"
                bgColor={isDragging ? "gray.300" : "gray.100"}
                color={isDragging ? "white" : "#065E77"}
                onClick={onImageUpload}
                {...dragProps}
                border="1px solid gray"
              >
                Fotoğraf Eklemek için Tıklayın veya Fotoğrafı Sürükleyip Bırakın
              </Button>
            ) : (
              <Flex w="662px" h="160px" border="1px solid gray" borderRadius="10px"></Flex>
            )}

            <Flex direction="row" position="absolute" mx={2}>
              {imageList.map((image, index) => (
                <Flex key={index} direction="column" maxW="100px" mt={2} ml={6}>
                  <Image
                    src={image["data_url"]}
                    alt=""
                    borderRadius="6px"
                    width="100px"
                    h="100px"
                  />
                  <Flex my={1} justifyContent="space-between">
                    <Button
                      bgColor="#01BAEF"
                      _hover={{ bgColor: "blue.500" }}
                      color="white"
                      fontSize="12px"
                      w="48%"
                      onClick={() => onImageUpdate(index)}
                    >
                      Değiştir
                    </Button>
                    <Button
                      bgColor="#E5212D"
                      _hover={{ bgColor: "red.700" }}
                      color="white"
                      fontSize="12px"
                      w="48%"
                      onClick={() => onImageRemove(index)}
                    >
                      Kaldır
                    </Button>
                  </Flex>
                </Flex>
              ))}
              {imageList.length < 5 && imageList.length !== 0 ? (
                <Button
                  w="100px"
                  h="100px"
                  bgColor={isDragging ? "gray.300" : "gray.50"}
                  color={isDragging ? "white" : "#065E77"}
                  onClick={onImageUpload}
                  _hover={{ bgColor: "gray.100" }}
                  {...dragProps}
                  border="1px solid gray"
                  mt={2}
                  ml={6}
                  fontSize="48px"
                >
                  +
                </Button>
              ) : (
                ""
              )}
            </Flex>
          </Flex>
        </Flex>
      )}
    </ImageUploading>
  )
}

export default ImageUpload
