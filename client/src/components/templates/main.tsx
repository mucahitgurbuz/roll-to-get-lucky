import { Box, Flex } from 'bumbag'
import React, { PropsWithChildren } from 'react'
import 'regenerator-runtime/runtime'
import Footer from '../organisms/Footer/Footer'
import Header from '../organisms/Header/Header'

export function Main(props: PropsWithChildren<any>) {
  return (
    <Flex height="100%" width="full" flexDirection="column">
      <Header />
      <Box flexGrow="1">{props.children}</Box>
      <Footer />
    </Flex>
  )
}
