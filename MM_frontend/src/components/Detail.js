import React, { useEffect, useState } from 'react';
import styled from  'styled-components';
import Brands from './Brands';
import List from './List';
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';

function Detail() {
  
  /*
  const [typee, setTypee] = useState([])

  const loadMoto = async (type) => {
      const res = await fetch(`http://localhost:4000/get-motos/type/${type}`);
      console.log(type);
      const data = await res.json();
      setTypee(data);
      console.log("tipo: "+data);
}

useEffect(() => {
    loadMoto(type);
}, type)
*/
  return ( 
  <Container>

      <Title1>Marcas Disponibles</Title1>
        <Brands />
      <Title1>Modelos</Title1>
        <List />
        <Footer/>
  </Container>
  )
}

export default Detail

const Title1 = styled.h3`
@media(max-width: 768px){
  display: none;
}
`

const Container = styled.div`
  margin-top: 14vh;
`