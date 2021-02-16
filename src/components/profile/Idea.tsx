import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import ProgressBar from "./ProgressBar"

const Idea: React.FC = () => {
  return (
    <Flex
      w="913px"
      h="156px"
      backgroundColor="#C3F2FF"
      borderRadius="8px"
      my={6}
      direction="column"
    >
      <Flex direction="row" justifyContent="space-between" mx={4}>
        <Text fontWeight="bold" textColor="#003848">
          Category
        </Text>
        <ProgressBar upVote={100} downVote={1} />
      </Flex>
      <Text textColor="#003848" fontWeight="bold" mx={4}>
        Trendyolda işe girmek istiyorum agalar
      </Text>
      <Text textColor="#003848" fontSize="xs" mx={4} noOfLines={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
        gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor id
        est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec sodales
        ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod convallis. Duis
        blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam pretium euismod
        purus, ut ultrices leo hendrerit scelerisque. Praesent nec imperdiet orci, et pretium enim.
        Nam eu lacinia arcu. Nam aliquam, ipsum at suscipit commodo, mauris eros vestibulum urna,
        sed tempus sapien elit scelerisque enim. Vivamus iaculis quis lacus non pulvinar. Donec
        interdum sem diam, at egestas leo pretium eget. Aliquam posuere, ante in tempus varius,
        lacus nisl lacinia sapien, aliquam ullamcorper tellus ex ut est. Nulla eget elementum dui,
        faucibus faucibus enim. Sed nisi justo, aliquet at tincidunt non, sodales sed lectus. Mauris
        consectetur ante mi. Fusce pretium lorem sem, et accumsan erat congue ac. Quisque pharetra
        ornare scelerisque. Quisque egestas eu velit ultrices tincidunt. Sed auctor massa ac ligula
        ultrices, ac tristique lectus accumsan. Donec gravida scelerisque elementum.
      </Text>
      <Flex direction="column" justify="flex-end" align="flex-end" w="100%" h="32px">
        <Text textColor="#837C7C" fontSize="xs" mr={2}>
          15:47 09.02.2021
        </Text>
      </Flex>
    </Flex>
  )
}

export default Idea
