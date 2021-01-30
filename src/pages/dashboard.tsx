/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react'
import Head from 'next/head'

import { getAllPokemons, getPokemonDetail } from './api'

import SideList, { capitalizeFirstLetter, zerosPrefix } from './components/sidelist'

import { ThemeContext } from './_app'

import { Container, SwitchCustom, DetailsContainer, DinamicMoonIcon, DinamicSunIcon, Header, DetailsTabs, DetailSection } from '../styles/pages/Dashboard'

interface IStatus {
  base_stat: number,
  stat: { name: string }
}

interface ITypes {
  type: { name: string }
}

interface IPokemon {
  id: number,
  name: string,
  url: string,
  height: number,
  image: string,
  weight: number,
  types: ITypes[],
  status: IStatus[]
  description: string
}
interface IEvolutions {
  species: { evolution_details: [], evolves_to: [] },
  detail: {name: string }
}

interface IPokemonDetail {
  characteristic: string,
  evolutionChain: IEvolutions
  mainArtWork: string,
  mainContent: IPokemon,
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [switcher, setSwitcher] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState({
    name: 'bulbasaur', id: 1, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  })
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetail>()

  const { toogleDarkMode, darkMode } = useContext(ThemeContext)

  const getData = async () => {
    getAllPokemons(setPokemons)
    const data = await getPokemonDetail(selectedPokemon.name, selectedPokemon.id)
    setPokemonDetails(data)
    console.log(pokemonDetails)
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
            <span>
              {`#${zerosPrefix(selectedPokemon.id, 3)} - ${capitalizeFirstLetter(selectedPokemon.name)}`}
              <img src={selectedPokemon.image} alt=""/>
            </span>
            <div id="switch-container">
              <DinamicSunIcon />
              <SwitchCustom onChange={toogleTheme} checked={switcher} />
              <DinamicMoonIcon />
            </div>
          </Header>

          <DetailsTabs>
            <DetailSection>
              <div id="artwork">
                <img src={pokemonDetails ? pokemonDetails.mainArtWork : ''} alt=""/>
              </div>
              <div id="types">
                Type
                <div className="type grass">Grass</div>
                <div className="type poison">Poison</div>
              </div>
              <div id="fisical-details">
                <div> <strong>Height:</strong>  2'04" / 0.7 m </div>
                <div> <strong>Weight:</strong>  15.2lbs / 06.9kg  </div>
              </div>
              <div id="atributes">
                <strong>Atributes</strong>
                <div className="grid grid-template-columns">
                  <div className="stat hp">50 HP</div>
                  <div className="stat speed">45 SPEED</div>
                  <div className="stat attack">50 ATK</div>
                  <div className="stat defense">40 DEF</div>
                  <div className="stat special-attack">SP. ATK.</div>
                  <div className="stat special-defense">SP. DEF.</div>
                </div>
              </div>
            </DetailSection>
            <DetailSection style={{ paddingLeft: 0 }}>
              <div id="evolutions">
                <strong>Evolution</strong>
                <div className="evolution">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt=""/>
                  <span>Evysaur</span>
                </div>
                <div className="evolution">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt=""/>
                  <span>Evysaur</span>
                </div>
              </div>
              <div id="characteristics">
                <span>
                Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.

                As mentioned in the anime, starter Pokémon are raised by Breeders to be distributed to new Trainers. Having been domesticated from birth, Bulbasaur is regarded as both a rare and well-behaved Pokémon. It is known to be extremely loyal, even after long-term abandonment. Bulbasaur in the anime have demonstrated a nurturing instinct towards younger, weaker Pokémon, one individual even using its vines to pick up a crying Pokémon, gently rocking it back and forth through the air while singing a "Bulba-by."
                </span>
              </div>
            </DetailSection>
          </DetailsTabs>

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
