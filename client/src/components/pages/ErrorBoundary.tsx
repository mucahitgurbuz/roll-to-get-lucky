import { Box, Provider as BumbagProvider } from 'bumbag'
import React, { Component } from 'react'
import theme from '../../theme'

class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError() {
    return { error: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error: true })
  }

  render() {
    if (this.state.error) {
      return (
        <BumbagProvider theme={theme}>
          <Box alignX="center" alignY="center" minHeight="100vh" backgroundColor="black">
            Unexpected Error
          </Box>
        </BumbagProvider>
      )
      // tslint:disable-next-line: no-else-after-return
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
