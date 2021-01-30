/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

import Switch from 'react-switch'

import { FiSun } from 'react-icons/fi'
import { HiOutlineMoon } from 'react-icons/hi'

export const Container = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
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
  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.mainRed};
    margin-top: 40px;
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
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

export const DinamicMoonIcon = styled(HiOutlineMoon).attrs({ color: '#fff', size: 20 })`
  margin-left: 10px;
`

export const DinamicSunIcon = styled(FiSun).attrs({ color: '#fff', size: 20 })`
 margin-right: 10px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1vh 5vw;

  span {
    color: #fff;
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
    background: #fff;
    width: 100%;
    border-radius: 10px;


    img {
      height: 38vh;
    }
  }

  #types {
    box-shadow: 5px 5px 5px #0003;
    display: flex;
    align-items: center;
    background: #fff;
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: 700;
    padding: 10px 20px;
    height: 45px;


    .type {
      width: 100px;
      padding: 4px 10px;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-left: 15px;
      border-radius: 10px;
      font-weight: normal;
      text-transform: uppercase
    }
    .grass { background-color: green; }
    .poison { background-color: purple; }
    .grass {  }
    .water {  }
    .fire {  }
    .ground {  }
    .rock {  }
    .stell {  }
    .ice {  }
    .eletric {  }
    .dragon {  }
    .ghost {  }
    .psychic {  }
    .normal {  }
    .fighting {  }
    .bug {  }
    .flying {  }
    .dark {  }
    .fairy {  }

  }

  #fisical-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    margin-top: 20px;


    div {
      box-shadow: 5px 5px 5px #0003;
      background: #fff;
      width: 48%;
      height: 100%;
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      strong { margin-right: 10px }
    }

  }

  #atributes {
    box-shadow: 5px 5px 5px #0003;
    display: flex;
    width: 100%;
    height: 150px;
    background-color: #fff;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px 20px;

     strong { margin-left: 10px; margin-bottom: 10px }
    .grid { display: grid; height: 90%; width: 100% }
    .grid-template-columns { grid-template-columns: repeat(3, 1fr) }
    .stat {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: tomato;
      text-align: center;
      font-size: 1em;
      height: 30px;
      margin: 0 10px;
      border-radius: 10px;
      }

    .hp { background-color: #ff5959 }
    .speed { background-color: #ff76a1 }
    .attack { background-color: #ff9a57 }
    .defense { background-color: #ffca00 }
    .special-attack { background-color: #006fea }
    .special-defense { background-color: #4bc853 }

  }

  #evolutions {
    box-shadow: 5px 5px 5px #0003;
    display: flex;
    width: 100%;
    padding: 20px 20px;
    background-color: #fff;
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
    background-color: #fff;
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
