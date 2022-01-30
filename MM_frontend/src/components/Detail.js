import React from 'react';
import styled from  'styled-components';
import Brands from './Brands';
import List from './List';
import Footer from "./Footer";

function Detail() {
  return ( 
  <Container>

      <h3>Marcas Disponibles</h3>
        <Brands />
      <h3>Nuevos Modelos</h3>
        <List />
        <Footer/>
  </Container>
  )
}

export default Detail

const Container = styled.div`
  margin-top: 14vh;
`