import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import Link from "next/link"
type Props = {
  name: string
  about: string
  age: number
  city: string
  image: string
}
const Profile: React.FC<Props> = ({ name, about, age, city, image }) => {
  return (
    <Flex
      w="100%"
      h="250px"
      bgColor="#E6F8FD"
      borderRadius={15}
      direction="column"
      align="center"
      p={5}
      position="relative"
    >
      <Image src={image} boxSize="70px" borderRadius="35px" />
      <Heading py={2} size="sm" color="#003848">
        {name}
      </Heading>
      <Text textAlign="center" fontSize="sm" color="#015D78" noOfLines={3}>
        {about}
      </Text>
      <Text textAlign="center" fontSize="sm" color="#015D78">
        {age} {city}
      </Text>
      <Text position="absolute" right="2" bottom="2" fontSize="sm">
        <Link href="#">go to profile</Link>
      </Text>
    </Flex>
  )
}

export default Profile
