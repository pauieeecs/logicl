import { Flex, Image, Progress, Text } from "@chakra-ui/react"
import React, { useMemo } from "react"

type Props = {
  upVote: number
  totalVote: number
}

const chooseColorForProgressBar = (val: number): string => {
  if (val === 0) {
    return "#d5f4fc"
  } else if (val > 0 && val <= 33.3) {
    return "red"
  } else if (val > 33.3 && val <= 66.6) {
    return "yellow"
  } else if (val > 66.6 && val <= 99.9) {
    return "green"
  } else if (val === 100) {
    return "blue"
  }
}

const ProgressBar: React.FC<Props> = ({ upVote, totalVote }) => {
  const color = useMemo(
    () => chooseColorForProgressBar(totalVote === 0 ? 0 : (upVote / totalVote) * 100),
    [totalVote, upVote]
  )

  return (
    <Flex direction="column">
      <Flex justify="space-between" px={1}>
        <Flex align="center">
          <Image boxSize={2} src="/profile-down.svg" mr="2px" />
          <Text fontWeight="600" fontSize="xs">
            {totalVote - upVote}
          </Text>
        </Flex>
        <Flex align="center">
          <Image boxSize={2} src="/profile-up.svg" mr="2px" />
          <Text fontWeight="600" fontSize="xs">
            {upVote}
          </Text>
        </Flex>
      </Flex>
      <Progress
        color={color}
        height="6px"
        value={totalVote === 0 ? 100 : (upVote / totalVote) * 100}
        backgroundColor={upVote === 0 ? "red" : "#DADADA"}
        width="100px"
        borderRadius="120px"
      />
    </Flex>
  )
}

export default ProgressBar
