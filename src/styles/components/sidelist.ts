/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  width: 20vw;
  height: 100vh;
  display: flex;
  position: fixed;
  left: 0;
  background-color: ${(props) => props.theme.colors.mainRed};
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
      color: #fff;
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
    color: ${(props) => props.theme.colors.mainBlue};
    background-color: ${(props) => props.theme.colors.background};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    border-radius: 20px;
    margin-top: 40px;
    width: 100%;

    input {
      width: 100%;
      padding: 10px 10px;
      border: none;
      outline: none;
      font-size: 13px;
      color: gray;
      outline: 0;
      border-radius: 20px;
    }



`

export const ListContainer = styled.nav`
  height: 100%;
  margin-top: 20px;
  margin-left: 35px;
  overflow:hidden;
  overflow-y:scroll;

  li {
    list-style-type: none;
    padding: 8px 0;
  }
`
