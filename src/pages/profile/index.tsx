import { Flex, Image, Spinner } from "@chakra-ui/react"
import Container from "../../components/Container"
import React, { useEffect, useState } from "react"
import Idea from "../../components/profile/Idea"
import Comment from "../../components/profile/Comment"
import ProfileComponent from "../../components/profile/Profile"
import SwitchButton from "../../components/SwitchButton"
import { useAuth } from "../../context/authentication"
import firebase from "../../libs/firebase"
import { User } from "../../types/user"
import { IdeaShort } from "../../types/idea"

const ProfilePage: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true)
  const { user } = useAuth()
  const [userData, setUserData] = useState<User>()
  const [ideas, setIdeas] = useState<IdeaShort[]>()
  const [userLoading, setUserLoading] = useState<boolean>(true)
  const [ideaLoading, setIdeaLoading] = useState<boolean>(true)

  useEffect(() => {
    setUserLoading(true)
    const unsub = firebase
      .firestore()
      .collection("user")
      .doc(user?.userId)
      .onSnapshot((res) => {
        const data = res.data()
        const tempUser: User = {
          fullName: data.fullName,
          userId: data.userId,
          userName: data.userName,
          birthDate: data.birthDate,
          country: data.country,
          city: data.city,
          email: data.email,
          logiclCoin: data.logiclCoin,
          bio: data.bio,
          photoUrl: data.photoUrl,
          joinedAt: data.joinedAt,
          experience: data.experience,
          level: data.level,
          role: data.role,
          jobTitle: data.jobTitle,
          authProvider: data.authProvider,
          gitHubLink: data.gitHubLink,
          twitterLink: data.twitterLink,
          teamName: data.teamName,
          teamSlug: data.teamSlug,
        }
        setUserData(tempUser)
        setUserLoading(false)
      })

    return () => unsub()
  }, [user?.userId])

  useEffect(() => {
    setIdeaLoading(true)
    const fetchPost = async (): Promise<void> => {
      if (!userLoading) {
        const res = await firebase
          .firestore()
          .collection("idea-short")
          .where("authorUserId", "==", user.userId)
          .get()

        const tempIdeas: IdeaShort[] = []
        res.docs.forEach((doc) => {
          const data = doc.data()
          tempIdeas.push({
            documentId: doc.id,
            authorName: data.authorName,
            authorUserId: data.authorUserId,
            authorUserName: data.authorUserName,
            category: data.category,
            createdAt: data.createdAt,
            interactors: data.interactors,
            mediaUrl: data.mediaUrl,
            shortDesc: data.shortDesc,
            slug: data.slug,
            teamName: data.teamName,
            teamSlug: data.teamSlug,
            title: data.title,
            totalVote: data.totalVote,
            upVote: data.upVote,
          })
        })
        setIdeas(tempIdeas)
        setIdeaLoading(false)
      }
    }

    fetchPost()
  }, [userLoading])
  return (
    <Container bgSrc="/wave1.svg">
      <Flex
        boxShadow="md"
        w="976px"
        borderRadius="8px"
        h="539px"
        backgroundColor="#E6F8FD"
        my={6}
        direction="column"
        p={4}
      >
        {userLoading ? (
          <Spinner size="lg" color="blue" m="auto" />
        ) : (
          <ProfileComponent user={userData} />
        )}
      </Flex>
      <Flex
        w="976px"
        p={4}
        borderRadius="8px"
        bgColor="#E6F8FD"
        direction="column"
        align="center"
        boxShadow="md"
      >
        <SwitchButton
          button1="Ideas"
          button2="Comments"
          active={isActive}
          setActive={setIsActive}
        />
        {isActive ? (
          <>
            {ideaLoading ? (
              <Spinner size="lg" color="blue" m={8} />
            ) : (
              <>
                {ideas.map((idea) => (
                  <Idea key={idea.documentId} idea={idea} />
                ))}
              </>
            )}
          </>
        ) : (
          <>
            <Comment
              category="Web"
              title="Trendyolda işe girmek istiyorum agalar"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
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
      ultrices, ac tristique lectus accumsan. Donec gravida scelerisque elementum."
              date="19.48 15.02.2021"
              commentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
              gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor id
              est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec sodales
              ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod convallis. Duis
              blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam pretium euismod
              purus, ut ultrices leo hendrerit scelerisque. Praesent nec imperdiet orci, et pretium enim."
              commentAuthorFullName="@keremesen"
              commentCreatedAt="06.15 17.02.2021"
            />
            <Comment
              category="Mobil"
              title="React native or Flutter ?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
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
      ultrices, ac tristique lectus accumsan. Donec gravida scelerisque elementum."
              date="19.48 15.02.2021"
              commentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
              gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor id
              est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec sodales
              ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod convallis. Duis
              blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam pretium euismod
              purus, ut ultrices leo hendrerit scelerisque. Praesent nec imperdiet orci, et pretium enim."
              commentAuthorFullName="@keremesen"
              commentCreatedAt="06.15 17.02.2021"
            />
          </>
        )}
        <Flex flexDir="column" mt={4}>
          <Image src="/profile-down.svg" cursor="pointer" />
          <Image src="/profile-down.svg" cursor="pointer" />
          <Image src="/profile-down.svg" cursor="pointer" />
        </Flex>
      </Flex>
    </Container>
  )
}

export default ProfilePage
