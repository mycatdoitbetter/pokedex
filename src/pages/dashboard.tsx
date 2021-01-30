/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react'
import Head from 'next/head'

import { getAllPokemons, getPokemonDetail } from './api'

import SideList, { capitalizeFirstLetter, zerosPrefix } from './components/sidelist'

import { ThemeContext } from './_app'

import {
  LoadPageContainer,
  Container,
  SwitchCustom,
  DetailsContainer,
  DinamicMoonIcon,
  DinamicSunIcon,
  Header,
  DetailsTabs,
  DetailSection
} from '../styles/pages/dashboard'

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
  stats: IStatus[]
  description: string
}

interface IEvolutions {
  front_default: string, name: string
}

interface IPokemonDetail {
  characteristic: string,
  evolutionChain: IEvolutions[]
  mainArtWork: string,
  mainContent: IPokemon,
}

const Dashboard: React.FC = () => {
  const { toogleDarkMode, darkMode } = useContext(ThemeContext)

  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetail>()
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [switcher, setSwitcher] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState({
    name: 'bulbasaur', id: 1, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  })

  const getData = async () => {
    getAllPokemons(setPokemons)
    const data = await getPokemonDetail(selectedPokemon.name, selectedPokemon.id)
    setPokemonDetails(data)
  }

  useEffect(() => {
    getData()
  }, [selectedPokemon])

  const toogleTheme = () => {
    toogleDarkMode(!darkMode)
    setSwitcher(!switcher)
  }

  const Types = () => (
    <div id="types">
      Type
      {
        pokemonDetails?.mainContent?.types.map(({ type }) => (
          <div key={type.name} className={`type ${type.name}`}>{type.name}</div>
        ))
      }
    </div>
  )

  const FisicalAtributes = () => {
    const heightInMeters = pokemonDetails?.mainContent.height / 10

    const heightToInch = heightInMeters * 39.37

    const feet = Math.round(heightToInch / 12)
    const leftover = Math.round(heightToInch % 12)

    const weightInLbs = pokemonDetails?.mainContent.weight / 4.536
    const weightInKg = pokemonDetails?.mainContent.weight / 10

    return (
      <div id="fisical-details">
        <div> <strong>Height:</strong>{feet}'{zerosPrefix(leftover, 2)}" / {heightInMeters} m</div>
        <div> <strong>Weight:</strong>{weightInLbs.toString().substring(0, 4)}lbs. / {weightInKg}kg</div>
      </div>
    )
  }

  const Atributes = () => {
    const renderStatusTab = ({ base_stat, stat }) => {
      let statusNameDisplayed = ''

      switch (stat.name) {
        case 'hp':
          statusNameDisplayed = 'HP'
          break

        case 'speed':
          statusNameDisplayed = 'SPEED'
          break

        case 'special-attack':
          statusNameDisplayed = 'SP. ATK.'
          break

        case 'defense':
          statusNameDisplayed = 'DEF'
          break

        case 'special-defense':
          statusNameDisplayed = 'SP. DEF.'
          break

        case 'attack':
          statusNameDisplayed = 'ATK'
          break

        default: break
      }
      return <div key={stat.name} className={`stat ${stat.name}`}>{base_stat} {statusNameDisplayed}</div>
    }

    return (
      <div id="atributes">
        <strong>Atributes</strong>
        <div className="grid grid-template-columns">
          {
            pokemonDetails?.mainContent.stats.map(renderStatusTab)
          }
        </div>
      </div>
    )
  }

  const Evolutions = () => (
    <div id="evolutions">
      <strong>Evolution</strong>
      {
        pokemonDetails?.evolutionChain.map(
          (evolution) => (
            <div key={evolution.name} className="evolution">
              <img src={evolution.front_default} alt="evolutions-artwork"/>
              <span>{capitalizeFirstLetter(evolution.name)}</span>
            </div>
          )
        )
      }
    </div>
  )

  const MewIsLoading = () => (
    <LoadPageContainer id="loading-page-container">
      <img src="https://i.pinimg.com/originals/0f/58/60/0f5860ab2d063aaa92d55a994d9b47e4.gif" alt="mew-is-loading"/>
    </LoadPageContainer>
  )

  if (!pokemonDetails) {
    return (
      <MewIsLoading />
    )
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
                <img src={pokemonDetails ? pokemonDetails.mainArtWork : ''} alt={`${selectedPokemon.name}-artwork`}/>
              </div>
              <Types />
              <FisicalAtributes />
              <Atributes />
            </DetailSection>
            <DetailSection style={{ paddingLeft: 0 }}>
              <Evolutions />
              <div id="characteristics">
                <span>
                  {pokemonDetails?.characteristic.replace(/[^a-zA-Z0-9 ]/g, '\n ')}
                </span>
              </div>
            </DetailSection>
          </DetailsTabs>
        </DetailsContainer>
      </main>
    </Container>
  )
}

export default Dashboard
