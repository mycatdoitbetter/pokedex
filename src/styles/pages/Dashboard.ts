/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

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
    color: ${(props) => props.theme.colors.mainRed};
    margin-top: 40px;
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
