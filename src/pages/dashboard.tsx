import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Dashboard'

const Dashboard: React.FC = () => (
  <Container>
    <Head>
      <title>Pokedex</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Dashboard!</h1>
    </main>
  </Container>
)

export default Dashboard
