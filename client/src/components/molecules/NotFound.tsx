import { Flex, Text } from 'bumbag'
import React, { PropsWithChildren } from 'react'

export interface INotFound {
  text: string
}

function NotFound(props: PropsWithChildren<INotFound>) {
  return (
    <Flex flexDirection="column" alignItems="center" paddingY="sm">
      Not Found
    </Flex>
  )
}

export default NotFound
