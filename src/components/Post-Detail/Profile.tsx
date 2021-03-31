import { Avatar, Flex, Heading, Spinner, Text } from "@chakra-ui/react"
import Link from "next/link"
type Props = {
  name: string
  about: string
  city: string
  image: string
  authorUserName: string
  loading: boolean
}
const Profile: React.FC<Props> = ({ name, about, city, image, authorUserName, loading }) => {
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
      {loading ? (
        <Spinner size="lg" color="blue" m="auto" />
      ) : (
        <>
          <Avatar name={name} src={image} boxSize="70px" borderRadius="35px" />
          <Heading py={2} size="sm" color="#003848">
            {name}
          </Heading>
          <Text textAlign="center" fontSize="sm" color="#015D78" noOfLines={3}>
            {about}
          </Text>
          <Text textAlign="center" fontSize="sm" color="#015D78">
            {city}
          </Text>
          <Text position="absolute" right="5%" bottom="3%" fontSize="sm">
            <Link href={`/profile/${authorUserName}`}>profiline git →</Link>
          </Text>
        </>
      )}
    </Flex>
  )
}

export default Profile
