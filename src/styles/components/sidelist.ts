/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

import { GoSearch } from 'react-icons/go'

export const Container = styled.div`
  width: 20vw;
  height: 100vh;
  display: flex;
  position: fixed;
  left: 0;
  background-color: ${(props) => props.theme.mainRed};
  display: flex;
  flex-direction: column;

  #title-container {
    margin: 10px;
    flex-direction: column;
    display: flex;
    align-items: center;
    margin: 0 35px;
    padding-bottom: 20px;
    border-bottom: 1px solid #fff;


    img {
      width: 14vw;
      padding-top: 30px;
      padding-bottom: 10px;
    }

    span {
      text-align: center;
      color: ${(props) => props.theme.secondaryText};
      font-size: 17px;
    }


  }

  #list-container {
    margin: 10px;
    flex-direction: column;
    display: flex;
  }
`

export const InputSearchContainer = styled.div`
    color: ${({ theme }) => theme.mainBlue};
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    border-radius: 20px;
    margin-top: 40px;
    width: 100%;

    input {
      background-color: #fff;
      width: 100%;
      padding: 10px 10px;
      border: none;
      outline: none;
      font-size: 13px;
      outline: 0;
      border-radius: 20px;
    }



`

export const ListContainer = styled.nav`
  height: 65%;
  margin-top: 20px;
  margin-left: 35px;
  overflow:hidden;
  overflow-y:scroll;
  display: flex;

  ul {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    padding-left: 5px;

    :hover {
      cursor: pointer;
      transition: all .2s ease-in-out;
      transform: scale(1.02);
    }
  }

  li {
    display: flex;
    padding: 10px 0;
    color: ${(props) => props.theme.secondaryText};
    font-size: 16px;


  }

  li.selected {
    font-weight: 700;
    text-decoration: underline;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #011b51;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #011b5190;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
  }

  img {
    align-self: center;
  }
`

export const MagnifyIcon = styled(GoSearch).attrs({ color: '#9e9e9e', size: 19 })``
