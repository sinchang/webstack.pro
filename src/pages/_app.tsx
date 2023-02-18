import '../styles/globals.css'

import { Footer } from '@components/footer'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>
          Webstack.Pro -Discover the brilliant open-source web tech stacks
        </title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta
          name='description'
          content='Discover the brilliant open-source web tech stacks'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script
        data-website-id='78f25f72-0ce1-4af8-8803-54fa847b2b51'
        src='https://umami-production-af5b.up.railway.app/umami.js'
        strategy='afterInteractive'
      />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
