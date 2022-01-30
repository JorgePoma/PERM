import React from 'react';
import styled from "styled-components";
import Section from "./Section"

function Home() {
    
    return (
        <Container>
            <Section 
                title="Modelos Deportivos"
                description="Modelos profesionales de pista"
                backgroundImg="https://www.wilock.com/wp-content/uploads/2018/09/aprilia-RSV4-FW.jpg"
                leftBtnText="Ordena Ya"
                rightBtnText="Inventario Disponible"
            />
            <Section 
                title="Modelos Urbanos"
                description="Modelos profesionales de eléctricos"
                backgroundImg="https://www.elcarrocolombiano.com/wp-content/uploads/2019/07/20190712-HARLEY-DAVIDSON-LIVEWIRE-PRIMER-MOTO-ELECTRICA-01.jpg"
                leftBtnText="Ordena Ya"
                rightBtnText="Inventario Disponible"
            />
            <Section 
                title="Modelos Motocross"
                description="Modelos estilo motocross"
                backgroundImg="https://cdn.pixabay.com/photo/2017/07/28/17/54/motocross-2549359_1280.jpg"
                leftBtnText="Ordena Ya"
                rightBtnText="Inventario Disponible"
            />
            <Section 
                title="Modelos Clasicos"
                description="Modelos clásicos y elegantes"
                backgroundImg="http://la-motorbit-media.s3.amazonaws.com/2017/10/motos-clasicas-triumph-bonneville.jpg"
                leftBtnText="Ordena Ya"
                rightBtnText="Inventario Disponible"
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`