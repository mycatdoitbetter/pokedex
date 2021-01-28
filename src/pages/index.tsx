import React from 'react'
import Head from 'next/head'

import { Todos } from './api'

const SignIn: React.FC = () => {
  Todos()
  return (
  <div>
    <Head>
      <title>Pokedex</title>
      <link rel="icon" href="/public/favicon.ico" />
    </Head>

    <main>
      <h1>Hello My Friends New!!</h1>
    </main>
  </div>
  )
}

export default SignIn
