/* eslint-disable camelcase */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unmodified-loop-condition */
import { Dispatch } from 'react'

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
  height: number,
  weight: number,
  types: ITypes[],
  status: IStatus[]
  description: string
}

interface IEvolutions {
  name: string,
  front_default: string
}

interface IPokemonDetail {
  characteristic: { description: string },
  mainContent: IPokemon,
  mainArtWork: string,
  evolutionChain: IEvolutions[]
}

const gqlQueryAllPokemons = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      id
      url
      name
      image
    }
  }
}`

const gqlQueryPokemonByName = `query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    weight
    height
    stats {
      base_stat
      stat {
        name
        url
      }
    }
    types {
      type {
        name
      }
    }
  }
}`

const getImageArtWork = async (id: number) : Promise<string> => fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then((res) => res.json())
  .then(({ sprites }) => sprites.other['official-artwork'].front_default)

const getEvolutionChain = async (id: number) : Promise<IEvolutions[]> => fetch('https://pokeapi.co/api/v2/evolution-chain/1')
  .then((response) => response.json())
  .then(({ chain }) => {
    const evolutionChain = []
    const evolutionData = chain
    let evolutionId = id

    // Algorithm to get the chain struct
    do {
      const front_default = getImageArtWork(evolutionId) // Promised value

      evolutionId += 1

      evolutionChain.push({ name: evolutionData.species.name, front_default })

        [evolutionData] = evolutionData.evolves_to
    } while (!!evolutionData && evolutionData.hasOwnProperty('evolves_to'))

    return evolutionChain
  })

const getMainContentPokemon = async (name: string) : Promise<IPokemon> => {
  const gqlVariables = {
    name
  }
  const body = JSON.stringify({
    query: gqlQueryPokemonByName,
    variables: gqlVariables
  })

  // Get the data from pokevercel
  return fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body,
    method: 'POST'
  })
    .then((response) => response.json())
    .then(({ data }) => ({ ...data.pokemon, description: 'Description' }))
}

const getDescription = async (id: number) : Promise<{description: string}> => fetch(`https://pokeapi.co/api/v2/characteristic/${id}/`)
  .then((res) => res.json())
  .then((data) => data.descriptions[2].description)

export const getAllPokemons = (setPokemons: Dispatch<[]>) : void => {
  const gqlVariables = {
    limit: 151,
    offset: 0
  }
  const body = JSON.stringify({
    query: gqlQueryAllPokemons,
    variables: gqlVariables
  })

  fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body,
    method: 'POST'
  })
    .then((response) => response.json())
    .then(({ data }) => setPokemons(data.pokemons.results))
}

export const getPokemonDetail = async (name: string, id: number) : Promise<IPokemonDetail> => {
  const characteristic = await getDescription(id)
  const mainContent = await getMainContentPokemon(name)
  const mainArtWork = await getImageArtWork(id)
  const evolutionChain = await getEvolutionChain(id)

  // console.log("characteristic", characteristic)
  // console.log("mainContent", mainContent)
  // console.log("mainArtWork", mainArtWork)
  // console.log("evolutionChain", evolutionChain)

  return {
    characteristic,
    mainContent,
    mainArtWork,
    evolutionChain
  }
}
