import React, { useState, FormEvent } from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router'

import { Container, HeaderTab, Form, StyledPopup } from '../styles/pages/SignIn'

const pokedexLogo = 'https://cdn.riderize.com/miscellaneous/logo-pokedex.png'
const pokedexSettings = 'https://cdn.riderize.com/miscellaneous/settings.svg'
const pokeball = 'https://cdn.riderize.com/miscellaneous/pokeball.svg'
const pikachuRunning = 'https://media.tenor.com/images/6e190eb7b580983ce09c7ccf0c91519d/tenor.gif'
const pikachuWelcome = 'https://64.media.tumblr.com/09986226d8f379980ed638b5fd94b4cb/tumblr_msu2kr4D8J1scncwdo1_500.gif'

const SignIn : React.FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  // Fake load to simulate a login and show the
  // Pikachu loader
  const fakeLoading = () => {
    setLoading(true)
    setTimeout(() => { router.push('dashboard'); setLoading(false) }, 2000)
  }

  const onSubmit = (e : FormEvent) => {
    e.preventDefault()
    fakeLoading()
  }

  return (
    <Container>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderTab>
          <img src={pokedexLogo} alt="logo-pokedex"/>
          <StyledPopup
            on="hover"
            trigger={<img id="settings-gear" src={pokedexSettings} alt="settings-gear"/>}
            position="bottom right"
            arrow={false}>
            <img src={pikachuWelcome} alt="pikachu-welcome" width={42} />
            <span>Hello! Welcome to Pokedex!</span>
          </StyledPopup>
        </HeaderTab>
        <img src={pokeball} alt="pokeball"/>
        <Form action="submit" onSubmit={onSubmit}>
          <input
            required
            id="email-input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Your best e-mail"
            title="Write you best email"
          />
          <button type="submit">
            {
              loading
                ? <img src={pikachuRunning} alt="pikachu-running" width={32} />
                : 'Access'
            }
          </button>
        </Form>
      </main>

    </Container>
  )
}

export default SignIn
