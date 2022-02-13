import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import List from './List';
import Listsave from './Listsave';


function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Container>
      <Data>
        <Imagen>
          <h3>Foto de perfil</h3>
          <img src={user.picture}></img>
        </Imagen>
        <h3>Nombre de usuario</h3>
        <h4>{user.nickname}</h4>
        <h3>Correo Electrónico:</h3>
        <h4>{user.email}</h4>
        <h3>Numero de teléfono:</h3>
        <h4 defaultValue={
          ""
        }>{user.phone_number}</h4>
      </Data>
      <Save>
        <Listsave/>
      </Save>
    </Container>
  )
}

export default UserProfile

const Container = styled.div`
  margin-bottom: 30px;
  display: grid;
  padding: 1vh;
  grid-gap: 4vh;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media(max-width: 820px){
      grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
const Data = styled.div`
  background-color: white;
  margin-top: 3vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 80%;
  padding-top: 4vh;
  alight-items:center;
  position: fixed;
  display: grid;
  grid-gap: 36px;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  box-shadow: rgb(0 0 0/29%) 0px 16px 30px -10px,
    rgb(0 0 0/13%) 0px 23px 20px -15px;
  @media(max-width: 1110px){
      display: none;
  }
`
const Save = styled.div`
  background-color: rgba(0.0.0.0 .1);
  margin-top: 1vh;
  //object-fit: cover;
  display: grid;
  grid-column: 2 / 5;
  grid-row: 2;
  @media(max-width: 1110px){
    grid-column: 5 / 1;
}
`
const Imagen = styled.div`
    img {
        margin-top: 4vh;
        width: 20vh;
        height: 20vh;
        //object-fit: cover;
        padding: 0vh;
    }
    background-color: #DA5757;
    margin: 0vh;
    padding: 5vh;
    //border: 3px solid rgba(0, 0, 0, 0.2);
    //box-shadow: rgb(0 0 0/29%) 0px 16px 30px -10px,
    rgb(0 0 0/13%) 0px 23px 20px -15px;
`

const Lista = styled.div`

`