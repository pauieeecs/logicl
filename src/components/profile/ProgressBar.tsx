import { Flex, Image, Progress, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

type Props = {
  upVote: number
  downVote: number
}
const ProgressBar: React.FC<Props> = ({ upVote, downVote }) => {
  const [val, setVal] = useState(0)
  const [color, setColor] = useState("")

  useEffect(() => {
    setVal((upVote / (upVote + downVote)) * 100)
    if (val >= 0 && val <= 33.3) {
      setColor("red")
    } else if (val > 33.3 && val <= 66.6) {
      setColor("yellow")
    } else if (val > 66.6 && val <= 99.9) {
      setColor("green")
    } else if (val === 100) {
      setColor("blue")
    }
  }, [val])
  return (
    <Flex direction="column">
      <Flex direction="row" align="center" justify="center">
        <Image boxSize={2} src="/profile-down.svg"></Image>
        <Text fontWeight="600" fontSize="xs" mr={12}>
          {downVote}
        </Text>
        <Image boxSize={2} src="/profile-up.svg"></Image>
        <Text fontWeight="600" fontSize="xs">
          {upVote}
        </Text>
      </Flex>
      <Progress
        colorScheme={color}
        height="6px"
        value={val}
        backgroundColor="#DADADA"
        width="100px"
        borderRadius="120px"
      />
    </Flex>
  )
}

export default ProgressBar
