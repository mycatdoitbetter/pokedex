/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
  }
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const HeaderTab = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  background-color: ${(props) => props.theme.colors.mainRed};
  position: fixed;
  top: 0;
  align-items: center;
  padding: 0 30px;

  img {
    height: 5.5vh;
  }
`
