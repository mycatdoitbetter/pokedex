import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import { getAllPokemons, getPokemonDetail } from './api'

import SideList from './components/sidelist'

import { Container } from '../styles/pages/Dashboard'

interface IPokemon {
  id: number;
  url: string;
  name: string;
  image: string;
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>()

  useEffect(() => getAllPokemons(setPokemons), [])

  return (
    <Container>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SideList/>
        {/* <h1>Dashboard!</h1> */}
        {/* <button type="button" onClick={() => console.log((pokemons[0]))}> */}
        {/* <button type="button" onClick={() => console.log(pokemons)}>
        Fetch ALL
        </button>
        <button type="button" onClick={() => getPokemonDetail('bulbasaur', 1)}>
        Fetch one
        </button> */}
        {/* <button type="button" onClick={() => getPokemonDetail(1, 'bulbasaur')}> */}
        {/* Fetch detail */}
        {/* </button> */}
      </main>
    </Container>
  )
}

export default Dashboard
