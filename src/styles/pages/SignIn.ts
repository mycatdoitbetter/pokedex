/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components'

import Popup from 'reactjs-popup'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const HeaderTab = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  background-color: ${(props) => props.theme.mainRed};
  position: fixed;
  top: 0;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;

  img {
    height: 5vh;
  }

  #settings-gear {
    height: 4vh;
    :hover {
      animation: ${rotate} 3s linear infinite;
    }
  }
`
export const Form = styled.form`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;


  width: 20%;

  input {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: 0.8px solid #3333;
    outline: none;
    border-radius: 2px;
    padding: 5px 10px;
    margin-bottom: 10px;;
    font-weight: bold;
  }

  button {
    width: 40%;
    background-color: ${(props) => props.theme.secondaryBlue};
    height: 40px;
    border: none;
    outline: none;
    border-radius: 4px;
    :hover {
      opacity: 0.8;
      cursor: pointer
    }
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.secondaryText};

  }

`

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: red
  }
  &-content {
    width: 350px;
    background-color: ${(props) => props.theme.secondaryBlue};
    padding: 20px;
    box-shadow: 5px 5px 5px #9999;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      color: #fff;
      padding: 10px 10px;
      width: 280px;
    }

  }
`
