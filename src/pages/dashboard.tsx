import React, { useState, useEffect, useContext } from 'react'
import Head from 'next/head'

import { FiSun } from 'react-icons/fi'
import { HiOutlineMoon } from 'react-icons/hi'

import { getAllPokemons, getPokemonDetail } from './api'

import SideList from './components/sidelist'

import { ThemeContext } from './_app'

import { Container, SwitchCustom, DetailsContainer, DinamicMoonIcon, DinamicSunIcon, Header } from '../styles/pages/Dashboard'

interface IPokemon {
  id: number;
  url: string;
  name: string;
  image: string;
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [switcher, setSwitcher] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>({ name: 'bulbasaur', id: 1, url: '', image: '' })

  const { toogleDarkMode, darkMode } = useContext(ThemeContext)

  const getData = async () => {
    getAllPokemons(setPokemons)
    const data = await getPokemonDetail(selectedPokemon.name, selectedPokemon.id)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [selectedPokemon])

  const toogleTheme = () => {
    toogleDarkMode(!darkMode)
    setSwitcher(!switcher)
  }

  return (
    <Container>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SideList setSelectedPokemon={setSelectedPokemon} pokemons={pokemons} />
        <DetailsContainer>

          <Header>
            <span>{selectedPokemon.id}</span>
            <span>{selectedPokemon.name}</span>
          </Header>

          <div id="switch-container">
            <DinamicSunIcon size={20}/>
            <SwitchCustom onChange={toogleTheme} checked={switcher} />
            <DinamicMoonIcon color="#fff" size={20}/>
          </div>

        </DetailsContainer>

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
