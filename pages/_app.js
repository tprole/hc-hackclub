import * as React from 'react'
import NextApp from 'next/app'
import { Box, Card, Heading, Text } from 'theme-ui' // Import the components needed for the card


import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ColorSwitcher />

        {/* Add the Card component with the desired content */}
        <Card>
          <Box p={3}>
            <Heading as="h2">Card Title</Heading>
            <Text>This is the content of the card.</Text>
          </Box>
        </Card>

        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
