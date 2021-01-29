/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'

import { Container, InputSearchContainer, ListContainer } from '../../styles/components/sidelist'

import MagnifyIcon from '../../assets/svg/magnify-icon.svg'

// Add a zero to format the pokemon prefix
const zerosPrefix = (integer: number, quantityOfNumbers: number) => String(integer).padStart(quantityOfNumbers, '0')

const array = [
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Evysaur' },
  { id: 3, name: 'Charmander' },
  { id: 4, name: 'Charmander' },
  { id: 5, name: 'Charmander' },
  { id: 6, name: 'Charmander' },
  { id: 7, name: 'Charmander' },
  { id: 8, name: 'Charmander' },
  { id: 9, name: 'Charmander' },
  { id: 10, name: 'Charmander' },
  { id: 11, name: 'Charmander' },
  { id: 12, name: 'Charmander' },
  { id: 13, name: 'Charmander' },
  { id: 14, name: 'Charmander' },
  { id: 15, name: 'Charmander' },
  { id: 16, name: 'Charmander' },
  { id: 17, name: 'Charmander' },
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Evysaur' },
  { id: 3, name: 'Charmander' },
  { id: 4, name: 'Charmander' },
  { id: 5, name: 'Charmander' },
  { id: 6, name: 'Charmander' },
  { id: 7, name: 'Charmander' },
  { id: 8, name: 'Charmander' },
  { id: 9, name: 'Charmander' },
  { id: 10, name: 'Charmander' },
  { id: 11, name: 'Charmander' },
  { id: 12, name: 'Charmander' },
  { id: 13, name: 'Charmander' },
  { id: 14, name: 'Charmander' },
  { id: 15, name: 'Charmander' },
  { id: 16, name: 'Charmander' },
  { id: 17, name: 'Charmander' },
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Evysaur' },
  { id: 3, name: 'Charmander' },
  { id: 4, name: 'Charmander' },
  { id: 5, name: 'Charmander' },
  { id: 6, name: 'Charmander' },
  { id: 7, name: 'Charmander' },
  { id: 8, name: 'Charmander' },
  { id: 9, name: 'Charmander' },
  { id: 10, name: 'Charmander' },
  { id: 11, name: 'Charmander' },
  { id: 12, name: 'Charmander' },
  { id: 13, name: 'Charmander' },
  { id: 14, name: 'Charmander' },
  { id: 15, name: 'Charmander' },
  { id: 16, name: 'Charmander' },
  { id: 17, name: 'Charmander' },
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Evysaur' },
  { id: 3, name: 'Charmander' },
  { id: 4, name: 'Charmander' },
  { id: 5, name: 'Charmander' },
  { id: 6, name: 'Charmander' },
  { id: 7, name: 'Charmander' },
  { id: 8, name: 'Charmander' },
  { id: 9, name: 'Charmander' },
  { id: 10, name: 'Charmander' },
  { id: 11, name: 'Charmander' },
  { id: 12, name: 'Charmander' },
  { id: 13, name: 'Charmander' },
  { id: 14, name: 'Charmander' },
  { id: 15, name: 'Charmander' },
  { id: 16, name: 'Charmander' },
  { id: 17, name: 'Charmander' }
]

const Dashboard: React.FC = () => (
  <Container>
    <div id="title-container">
      <img src="https://cdn.riderize.com/miscellaneous/logo-pokedex.png" />
      <span>Everything you wanted know about your favorite pocket monsters!</span>

      <InputSearchContainer >
        <input type="text" placeholder="Search by name or number" />
        <MagnifyIcon />
        {/* <img id="magnify-icon" src="https://img.icons8.com/fluent-systems-filled/24/000000/search.png"/> */}
      </InputSearchContainer>

    </div>

    <ListContainer>
      <ul>
        {array.map(({ name, id }) => <li key={id}>{`#${zerosPrefix(id, 3)} - ${name}`}</li>)}
      </ul>
    </ListContainer>

  </Container>
)

export default Dashboard
