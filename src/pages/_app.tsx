import '../styles/globals.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Webstack.Pro - the index page for web developers</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta
          name='description'
          content='Discover the best fittest web tech stacks for your project'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
