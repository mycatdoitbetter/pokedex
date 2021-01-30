/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable indent */
/* eslint-disable no-multi-assign */
/* eslint-disable no-unexpected-multiline */
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
  .then(async ({ chain }) => {
    let evolutionChain = []
    let evolutionData = chain
    let evolutionId = id

    do {
      const front_default = await getImageArtWork(evolutionId)

      evolutionId += 1

      evolutionChain = [...evolutionChain, { name: evolutionData.species.name, front_default }]

      evolutionData = evolutionData.evolves_to[0]
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

const getDescription = async (id: number) : Promise<any> => fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  .then((res) => res.json())
  .then((data) => data.flavor_text_entries[3].flavor_text)

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

export const getPokemonDetail = async (name: string, id: number) : Promise<SetStateAction<IPokemonDetail>> => {
  console.log(name, id)

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
