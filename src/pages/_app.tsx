import '../styles/globals.css'

import { Footer } from '@components/footer'
import { useAnalytics } from '@happykit/analytics'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  useAnalytics({ publicKey: 'analytics_pub_d72ac0cf4c' })

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
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
