import { Flex, Image, Spinner } from "@chakra-ui/react"
import Container from "../components/Container"
import React, { useEffect, useState } from "react"
import Idea from "../components/profile/Idea"
import Comment from "../components/profile/Comment"
import ProfileComponent from "../components/profile/Profile"
import SwitchButton from "../components/SwitchButton"
import { useAuth } from "../context/authentication"
import firebase from "../libs/firebase"
import { User } from "../types/user"

const ProfilePage: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true)
  const { user } = useAuth()
  const [userData, setUserData] = useState<User>()
  const [userLoading, setUserLoading] = useState<boolean>(true)

  useEffect(() => {
    setUserLoading(true)
    const unsub = firebase
      .firestore()
      .collection("user")
      .doc(user?.userId)
      .onSnapshot((res) => {
        const data = res.data()
        setUserData(data)
        setUserLoading(false)
      })

    return () => unsub()
  }, [user?.userId])
  return (
    <Container bgSrc="/wave1.svg">
      {userLoading ? (
        <Spinner size="lg" color="blue" m={8} />
      ) : (
        <ProfileComponent
          name={userData.fullName}
          location={userData.city !== "" ? `${userData.city}/${userData.country}` : ""}
          job={userData.jobTitle}
          bio={userData.bio}
          joinedAt={new Date(userData.joinedAt.seconds * 1000).toLocaleDateString("tr-TR")}
          loading={userLoading}
          photoUrl={userData.photoUrl}
        />
      )}

      <Flex
        w="976px"
        h="726px"
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
            <Idea
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
            />
            <Idea
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
            />
            <Idea
              category="Embed Systems"
              title="C is sucks"
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
            />
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
        <Image src="/profile-down.svg" cursor="pointer"></Image>
        <Image src="/profile-down.svg" cursor="pointer"></Image>
        <Image src="/profile-down.svg" cursor="pointer"></Image>
      </Flex>
    </Container>
  )
}

export default ProfilePage
