/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Head from 'next/head'

import Link from 'next/link'
import { Container, HeaderTab } from '../styles/pages/SignIn'

const SignIn: React.FC = () => (
  <Container>
    <Head>
      <title>Pokedex</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <HeaderTab>
        <img src="https://cdn.riderize.com/miscellaneous/logo-pokedex.png" />
      </HeaderTab>
      <h1>Hello My Friends New!!</h1>
      <Link href="/dashboard">
        <a>Go to dash</a>
      </Link>
    </main>
  </Container>
)

export default SignIn
