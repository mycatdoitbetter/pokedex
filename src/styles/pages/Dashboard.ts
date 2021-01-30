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
`

export const DinamicMoonIcon = styled(HiOutlineMoon).attrs({ color: '#fff', size: 20 })`
  margin-left: 10px;
`

export const DinamicSunIcon = styled(FiSun).attrs({ color: '#fff', size: 20 })`
 margin-right: 10px;
`

export const Header = styled.div``
