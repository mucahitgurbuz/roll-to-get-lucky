import { Flex, Link, Text } from 'bumbag'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Flex height="80px" justifyContent="center" alignItems="center" fontSize="13px" color="primary">
      <Text>©2021 Roll to Get Lucky</Text>
      <Text marginX="16px">&#8226;</Text>
      <Link href="#">Privacy Policy</Link>
    </Flex>
  )
}

export default Footer
