/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'

import { Container, InputSearchContainer, ListContainer, MagnifyIcon } from '../../styles/components/sidelist'

// import { capitalizeFirstLetter, zerosPrefix } from '../utils/functions'

export const capitalizeFirstLetter = (string: string) : string => string.charAt(0).toUpperCase() + string.slice(1)

export const zerosPrefix = (integer: number, quantityOfNumbers: number) : string => String(integer).padStart(quantityOfNumbers, '0')

interface IPokemon {
    id: number;
    name: string;
    image: string;
}

type ManagePokemons = {
  pokemons: IPokemon[];
  setSelectedPokemon: Dispatch<SetStateAction<IPokemon>>;
}

const Dashboard: React.FC<ManagePokemons> = ({ setSelectedPokemon, pokemons } : ManagePokemons) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState(1)

  const selectNewPokemon = (id: number, name: string, image: string) => {
    setSelectedPokemonId(id)
    setSelectedPokemon({ id, name, image })
  }

  const renderSelectedPokemonName = ({ name, id, image }) => {
    if (selectedPokemonId === id) {
      return (
        <button type="button" key={id}>
          <li className="selected">{`#${zerosPrefix(id, 3)} - ${capitalizeFirstLetter(name)}`}</li>
        </button>
      )
    }
    return (
      <button type="button" key={id} onClick={() => selectNewPokemon(id, name, image)}>
        <li>{`#${zerosPrefix(id, 3)} - ${capitalizeFirstLetter(name)}`}</li>
      </button>
    )
  }

  const pokemonLogo = 'https://cdn.riderize.com/miscellaneous/logo-pokedex.png'

  return (
    <Container>
      <div id="title-container">
        <img src={pokemonLogo} />
        <span>Everything you wanted know about your favorite pocket monsters!</span>

        <InputSearchContainer >
          <input type="text" placeholder="Search by name or number" />
          <MagnifyIcon />
        </InputSearchContainer>

      </div>

      <ListContainer>
        {
          pokemons !== undefined &&
          <ul>
            {pokemons.map(renderSelectedPokemonName)}
          </ul>
        }
      </ListContainer>

    </Container>
  )
}

export default Dashboard
