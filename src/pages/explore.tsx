import Container from "../components/Container"
import SwitchButton from "../components/SwitchButton"
import { useState } from "react"
import List from "../components/List-Page-Components/list"
import Shuffle from "../components/Shuffle/shuffle"

const Explore: React.FC = () => {
  const [isActive, setIsActive] = useState(true)

  return (
    <Container bgSrc="/wave1.svg">
      <SwitchButton button1="Liste" button2="Karışık" active={isActive} setActive={setIsActive} />
      {isActive ? <List /> : <Shuffle />}
    </Container>
  )
}

export default Explore
