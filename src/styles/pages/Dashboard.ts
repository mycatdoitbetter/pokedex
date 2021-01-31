/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

import Switch from 'react-switch'

import Popup from 'reactjs-popup'

import { FiSun } from 'react-icons/fi'
import { HiOutlineMoon } from 'react-icons/hi'

export const LoadPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;

  img {
    height: 10em;
  }

`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  main {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }
`

export const SwitchCustom = styled(Switch).attrs({
  width: 54,
  height: 20,
  onColor: '#fff',
  offColor: '#fff',
  checkedIcon: false,
  uncheckedIcon: false,
  onHandleColor: '#5a5c59',
  offHandleColor: '#5a5c59'
})``

export const DetailsContainer = styled.div`
  display: flex;
  width: 80vw;
  margin-left: 20vw;
  background-color: ${(props) => props.theme.mainBlue};
  flex-direction: column;
`

export const DynamicMoonIcon = styled(HiOutlineMoon).attrs({ color: '#fff', size: 20 })`
  margin-left: 10px;
`

export const DynamicSunIcon = styled(FiSun).attrs({ color: '#fff', size: 20 })`
 margin-right: 10px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1vh 5vw;

  span {
    color: ${(props) => props.theme.secondaryText};
    font-size: 3.3em;
    display: flex;
    align-items: center;
    text-transform: uppercase;

  }
`
export const DetailsTabs = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const DetailSection = styled.div`
  width: 100%;
  padding: 0 7vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  #artwork {
    box-shadow: 5px 5px 5px #0003;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.background};
    width: 100%;
    /* width: 100%; */
    border-radius: 10px;


    img {
      height: 38vh;
    }
  }

  #types {
    box-shadow: 5px 5px 5px #0003;
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.background};
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: 700;
    padding: 10px 20px;
    height: 45px;


    .type {
      width: 100px;
      padding: 4px 10px;
      font-size: 0.95em;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-left: 15px;
      border-radius: 10px;
      font-weight: normal;
      text-transform: uppercase
    }

    // All the reference type colors
    // of pokemons
    .grass { background-color: #54b947; }
    .poison { background-color: #9f3fa0; };
    .water { background-color: #a8a777;  }
    .fire { background-color: #ef7e2e;  }
    .ground { background-color: #dfbf68;  }
    .rock { background-color: #b69f37;  }
    .steel { background-color: #b7b7cf;  }
    .ice { background-color: #97d7d7;  }
    .electric { background-color: #f7cf2f;  }
    .dragon { background-color: #6f37f8;  }
    .ghost { background-color: #6f5697;  }
    .psychic { background-color: #f75787;  }
    .normal { background-color: #678fef;  }
    .fighting { background-color: #bf2f27;  }
    .bug { background-color: #a7b720;  }
    .flying { background-color: #a78fef;  }
    .dark { background-color: #6e5747;  }
    .fairy { background-color: #f6e494;  }

  }

  #physical-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    margin-top: 20px;


    div {
      box-shadow: 5px 5px 5px #0003;
      background: ${(props) => props.theme.background};
      width: 48%;
      height: 100%;
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      strong { margin-right: 10px }
    }

  }

  #attributes {
    box-shadow: 5px 5px 5px #0003;
    display: flex;
    width: 100%;
    height: 150px;
    background-color: ${(props) => props.theme.background};
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;

     strong { margin-left: 10px; margin-bottom: 10px }
    .grid { display: grid; height: 90%; width: 100% }
    .grid-template-columns { grid-template-columns: repeat(3, 1fr) }
    .stat {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.secondaryText};
      font-weight: 500;
      text-align: center;
      font-size: 0.95em;
      height: 30px;
      margin: 0 10px;
      border-radius: 10px;
      }

    // All reference status colors
    .hp { background-color: ${({ theme }) => theme.hp}; }
    .speed { background-color: ${({ theme }) => theme.speed} }
    .attack { background-color: ${({ theme }) => theme.attack} }
    .defense { background-color: ${({ theme }) => theme.defense} }
    .special-attack { background-color: ${({ theme }) => theme.specialAttack} }
    .special-defense { background-color: ${({ theme }) => theme.specialDefense} }

  }

  #evolutions {
    box-shadow: 5px 5px 5px #0003;
    display: flex;
    width: 100%;
    padding: 20px 20px;
    background-color: ${({ theme }) => theme.background};
    align-items: flex-start;
    flex-direction: row;
    border-radius: 10px;
    padding-left: 20px;

    strong { margin-right: 20px }

    .evolution {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 30px;
    }

    img {
      height: 90px;
    }

  }

  #characteristics {
    box-shadow: 5px 5px 5px #0003;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.background};
    margin-top: 20px;
    border-radius: 10px;
    padding-left: 20px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 50px;
    line-height: 24px;

  }

`
export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: red
  }
  &-content {
    /* width: 350px; */
    background-color: ${(props) => props.theme.background};
    padding: 20px;
    box-shadow: 5px 5px 5px #9999;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      color: #000;
      /* padding: 10px 10px; */
      /* width: 280px; */
    }

  }
`
