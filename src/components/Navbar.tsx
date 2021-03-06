import React from "react"
import Link from "next/link"
import {
  Avatar,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react"
import { useAuth } from "../context/authentication"

const Navbar: React.FC = () => {
  const { user, signout } = useAuth()

  return (
    <Flex width="100%" height="64px" justifyContent="center" flexDirection="row">
      <Flex
        width="1080px"
        height="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="40px" color="#003848" fontWeight="500">
          <Link href="/">logicl</Link>
        </Text>

        <Flex flexDirection="row">
          <Link href={user ? "/addidea" : "/auth"}>
            <Image cursor="pointer" mx={2} boxSize={6} src="/plus.svg" />
          </Link>
          <Menu>
            <MenuButton>
              <Avatar
                bgColor={user ? "#D5F4FC" : "#fff"}
                name={user && user.photoUrl === "" ? user.fullName : ""}
                textAlign="center"
                size="sm"
                src={user ? (user.photoUrl !== "" ? user.photoUrl : "") : "/profile.svg"}
                //pp yokken ismin baş harfleri çıkıyor. ikisi arasında size farkı var gibi hissettim. böyle daha iyi oldu sonradan değiştirebiliriz
                boxSize={6}
              />
            </MenuButton>
            <MenuList>
              {user ? (
                <>
                  <MenuGroup title={user.fullName}>
                    <Link href="/profile">
                      <MenuItem>Profilim</MenuItem>
                    </Link>
                    <MenuItem onClick={() => signout("/")}>Çıkış yap</MenuItem>
                  </MenuGroup>
                </>
              ) : (
                <>
                  <MenuGroup>
                    <Link href="/auth">
                      <MenuItem>Giriş yap</MenuItem>
                    </Link>
                    <Link href="/auth">
                      <MenuItem>Kayıt ol</MenuItem>
                    </Link>
                  </MenuGroup>
                </>
              )}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
