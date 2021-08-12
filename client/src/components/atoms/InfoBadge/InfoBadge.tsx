import React from 'react'
import { Flex, Text } from 'bumbag'

interface IInfoBadge {
  title: string
  content: string
}

const InfoBadge: React.FC<IInfoBadge> = ({ title, content }) => {
  return (
    <Flex borderRadius="lg" backgroundColor="grey300" padding="12px ">
      <Text fontSize="24px" fontWeight="bold">
        {title}:
      </Text>
      <Text fontFamily="number" fontSize="24px" fontWeight="ExtraBlack">
        {content}
      </Text>
    </Flex>
  )
}

export default InfoBadge
