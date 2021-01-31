/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
/* eslint-disable no-prototype-builtins */

import { Dispatch, SetStateAction } from 'react'

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
  mainContent: IPokemon,
  mainArtWork: string,
  evolutionChain: IEvolutions[]
}

// GraphQL Queries
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

// Get the main image by the pokemon ID
const getImageArtWork = async (id: number) : Promise<string> => fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then((res) => res.json())
  .then(({ sprites }) => sprites.other['official-artwork'].front_default)

// Get the evolution chain by the pokemon ID
const getEvolutionChain = async (id: number) : Promise<IEvolutions[]> => {
  const evolutionChainUrl = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    .then((response) => response.json())
    .then(({ evolution_chain }) => evolution_chain.url)

  return fetch(evolutionChainUrl)
    .then((response) => response.json())
    .then(async ({ chain }) => {
      let evolutionChain = []
      let evolutionData = chain

      // The chain data struct requires this algorithm to restruct
      // to the best format for display and work on front
      do {
        const specieId = await fetch(evolutionData.species.url)
          .then((response) => response.json())
          .then((e) => e)

        const front_default = await getImageArtWork(specieId.id)

        evolutionChain = [...evolutionChain, { name: evolutionData.species.name, front_default }]

        evolutionData = evolutionData.evolves_to[0]
      } while (!!evolutionData && evolutionData.hasOwnProperty('evolves_to'))

      return evolutionChain
    })
}

// Get the main content of the pokemon by his name (GraphQL Query)
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

// Get one of the description flavor's on the pokeapi
const getDescription = async (id: number) : Promise<string> => fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  .then((res) => res.json())
  .then((data) => data.flavor_text_entries[52].flavor_text)

// Get all pokemons (The quantity is managed by the GraphQL query) of the first generation
export const getAllPokemons = (setPokemons: Dispatch<[]>) : void => {
  const gqlVariables = {
    limit: 151, // First generation of pokemons
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

// Export the result for the dashboard
export const getPokemonDetail = async (name: string, id: number)
: Promise<SetStateAction<IPokemonDetail>> => {
  const characteristic = await getDescription(id)
  const mainContent = await getMainContentPokemon(name)
  const mainArtWork = await getImageArtWork(id)
  const evolutionChain = await getEvolutionChain(id)

  return {
    characteristic,
    mainContent,
    mainArtWork,
    evolutionChain
  }
}
