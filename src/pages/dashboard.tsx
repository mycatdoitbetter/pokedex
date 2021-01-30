/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useState, useEffect, useContext, SetStateAction } from 'react'
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
    console.log(data)
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
        {/* <div> <strong>Height:</strong>  2'04" / 0.7 m </div> */}
        <div> <strong>Weight:</strong>{weightInLbs.toString().substring(0, 4)}lbs. / {weightInKg}kg</div>
        {/* <div> <strong>Weight:</strong>  15.2lbs / 06.9kg  </div> */}
      </div>
    )
  }

  const Atributes = () => {
    const [
      hp,
      atk,
      def,
      spAtk,
      spDef,
      speed
    ] = pokemonDetails?.mainContent.stats

    return (
      <div id="atributes">
        <strong>Atributes</strong>
        <div className="grid grid-template-columns">
          {/* {
            pokemonDetails?.mainContent.status.map(
              stats => (
                <div key={stats.stat.name}className={`stat ${stats.stat.name}`}>{stats.base_stat} HP</div>
              )
            )
          } */}
          <div className="stat hp">{hp.base_stat} HP</div>
          <div className="stat speed">{speed.base_stat} SPEED</div>
          <div className="stat attack">{atk.base_stat} ATK</div>
          <div className="stat defense">{def.base_stat} DEF</div>
          <div className="stat special-attack">{spAtk.base_stat} SP. ATK.</div>
          <div className="stat special-defense">{spDef.base_stat} SP. DEF.</div>
          {/* <div className="stat hp">50 HP</div>
          <div className="stat speed">45 SPEED</div>
          <div className="stat attack">50 ATK</div>
          <div className="stat defense">40 DEF</div>
          <div className="stat special-attack">SP. ATK.</div>
          <div className="stat special-defense">SP. DEF.</div> */}
        </div>
      </div>
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

              {/* <Atributes /> */}

              <Atributes />

              {/* <div id="atributes">
                <strong>Atributes</strong>
                <div className="grid grid-template-columns">
                  <div className="stat hp">50 HP</div>
                  <div className="stat speed">45 SPEED</div>
                  <div className="stat attack">50 ATK</div>
                  <div className="stat defense">40 DEF</div>
                  <div className="stat special-attack">SP. ATK.</div>
                  <div className="stat special-defense">SP. DEF.</div>
                </div>
              </div> */}

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
                  {pokemonDetails?.characteristic}
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
