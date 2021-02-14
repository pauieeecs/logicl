import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react"
import Container from "../components/Container"
import SwitchButton from "../components/SwitchButton"
import SmallPost from "../components/List-Page-Components/SmallPost"
import BigPost from "../components/List-Page-Components/BigPost"

const List: React.FC = () => {
  return (
    <Container bgSrc="/wave1.svg">
      <Flex direction="column" w="100%" align="center">
        <SwitchButton />
        <Flex w="1080px" mt={10} justify="space-between">
          <SmallPost
            title="denme"
            text="lorem ipsum dolor sit amet dagwjd wadyuagwdad dajwdgahwj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj "
            vote={21}
            date="14:25 - 21/11/2021"
          />
          <SmallPost
            title="denme"
            text="lorem ipsum dolor sit amet dagwjd wadyuagwdad dajwdgahwj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj "
            vote={21}
            date="14:25 - 21/11/2021"
          />
          <SmallPost
            title="denme"
            text="lorem ipsum dolor sit amet dagwjd wadyuagwdad dajwdgahwj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj "
            vote={21}
            date="14:25 - 21/11/2021"
          />
          <SmallPost
            title="denme"
            text="lorem ipsum dolor sit amet dagwjd wadyuagwdad dajwdgahwj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj "
            vote={21}
            date="14:25 - 21/11/2021"
          />
        </Flex>
        <Flex mt={6} width="1080px" height="60px" bgColor="#01A7D7" borderRadius="6px"></Flex>
        <Wrap w="1080px" spacing={4}>
          <WrapItem flex="6" mt={12} flexDirection="column">
            <BigPost
              category="lorem"
              title="deneme"
              text="dauwfygwadhj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dbkjwahdgvwajddgawfhvdghadawda uwfygwadhjdb kjwahdgvwajddga wfhvdghadawdau wfygwadhjdbkjwa hdgvwajddgawf hvdghadawdauwfygwadh jdbkjwahdgvwajddgaw fhvdghadawdauwf ygwadhjdbkjw ahdgvwajddgaw fhvdghadawdauwfygwadhj dbkjwahdgvwaj ddgawfhvdghadawdauwfygwad hjdbkjwahdgvwajdd gawfhvdghad awdauwfygwad hjdbkjwahdgvwajd dgawfhvdghadaw"
              date="15:25 - 12/14/2020"
            />
            <BigPost
              category="lorem"
              title="deneme"
              text="dauwfygwadhj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dbkjwahdgvwajddgawfhvdghadawda uwfygwadhjdb kjwahdgvwajddga wfhvdghadawdau wfygwadhjdbkjwa hdgvwajddgawf hvdghadawdauwfygwadh jdbkjwahdgvwajddgaw fhvdghadawdauwf ygwadhjdbkjw ahdgvwajddgaw fhvdghadawdauwfygwadhj dbkjwahdgvwaj ddgawfhvdghadawdauwfygwad hjdbkjwahdgvwajdd gawfhvdghad awdauwfygwad hjdbkjwahdgvwajd dgawfhvdghadaw"
              date="15:25 - 12/14/2020"
            />
            <BigPost
              category="lorem"
              title="deneme"
              text="dauwfygwadhj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dbkjwahdgvwajddgawfhvdghadawda uwfygwadhjdb kjwahdgvwajddga wfhvdghadawdau wfygwadhjdbkjwa hdgvwajddgawf hvdghadawdauwfygwadh jdbkjwahdgvwajddgaw fhvdghadawdauwf ygwadhjdbkjw ahdgvwajddgaw fhvdghadawdauwfygwadhj dbkjwahdgvwaj ddgawfhvdghadawdauwfygwad hjdbkjwahdgvwajdd gawfhvdghad awdauwfygwad hjdbkjwahdgvwajd dgawfhvdghadaw"
              date="15:25 - 12/14/2020"
            />
            <BigPost
              category="lorem"
              title="deneme"
              text="dauwfygwadhj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dbkjwahdgvwajddgawfhvdghadawda uwfygwadhjdb kjwahdgvwajddga wfhvdghadawdau wfygwadhjdbkjwa hdgvwajddgawf hvdghadawdauwfygwadh jdbkjwahdgvwajddgaw fhvdghadawdauwf ygwadhjdbkjw ahdgvwajddgaw fhvdghadawdauwfygwadhj dbkjwahdgvwaj ddgawfhvdghadawdauwfygwad hjdbkjwahdgvwajdd gawfhvdghad awdauwfygwad hjdbkjwahdgvwajd dgawfhvdghadaw"
              date="15:25 - 12/14/2020"
            />
          </WrapItem>
          <WrapItem
            flexDirection="column"
            flex="2"
            borderRadius="6px"
            alignItems="center"
            h="940px"
            mt={12}
            bgColor="#E6F8FD"
          >
            <Flex direction="column" py={4} borderBottom="2px solid black" align="center">
              <Heading my={2} fontSize="20px">
                Most Interected Ideas
              </Heading>
              <SmallPost
                title="denme"
                text="lorem ipsum dolor sit amet dagwjd wadyuagwdad dajwdgahwj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj"
                vote={21}
                date="14:25 - 21/11/2021"
              />
              <SmallPost
                title="denme"
                text="lorem ipsum dolor sit amet dagwjd wadyuagwdad dajwdgahwj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj"
                vote={21}
                date="14:25 - 21/11/2021"
              />
            </Flex>
            <Flex direction="column" my={4} align="center">
              <Heading my={2} fontSize="20px">
                Most Upvoted Feedbacks
              </Heading>
              <SmallPost
                title="denme"
                text="lorem ipsum dolor sit amet dagwjd wadyuagwdad dajwdgahwj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj"
                vote={21}
                date="14:25 - 21/11/2021"
              />
              <SmallPost
                title="denme"
                text="lorem ipsum dolor sit amet dagwjd wadyuagwdad dajwdgahwj dajwgydawj djawgydaj dajwgydawj dajwgydawjdajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj dajwgydawj"
                vote={21}
                date="14:25 - 21/11/2021"
              />
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </Container>
  )
}

export default List
