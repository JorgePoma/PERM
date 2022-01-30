import React from 'react';
import styled from 'styled-components';

function List() {
    return (
        <Container>
            <Content>
                <Wrap>
                    <img src="https://www.motofichas.com/images/cache/01-harley-davidson-cvo-limited-2020-estudio-739-a.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.soymotero.net/sites/default/files/styles/max_width_800px/public/2021-09/ktm_450_smr.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.motofichas.com/images/cache/01-harley-davidson-cvo-limited-2020-estudio-739-a.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.motofichas.com/images/cache/01-harley-davidson-cvo-limited-2020-estudio-739-a.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.motofichas.com/images/cache/01-harley-davidson-cvo-limited-2020-estudio-739-a.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.motofichas.com/images/cache/01-harley-davidson-cvo-limited-2020-estudio-739-a.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.motofichas.com/images/cache/01-harley-davidson-cvo-limited-2020-estudio-739-a.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.soymotero.net/sites/default/files/styles/max_width_800px/public/2021-09/ktm_450_smr.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.motofichas.com/images/cache/01-harley-davidson-cvo-limited-2020-estudio-739-a.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.motofichas.com/images/cache/01-harley-davidson-cvo-limited-2020-estudio-739-a.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.motofichas.com/images/cache/01-harley-davidson-cvo-limited-2020-estudio-739-a.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
            <Content>
                <Wrap>
                    <img src="https://www.motofichas.com/images/cache/01-harley-davidson-cvo-limited-2020-estudio-739-a.jpg" />
                </Wrap>
                <Description>
                    <h3>Harley Davidson CVO Limited 2020</h3>
                    <br/>
                    <h5>Diseño Clasico y Elegante con amplios compartimientos y cajuelas para circular por la carretera</h5>
                </Description>
            </Content>
        </Container>
    )
}

export default List;

const Container = styled.div`
    margin-bottom: 30px;
    display: grid;
    padding: 36px;
    grid-gap: 36px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
`
const Content = styled.div`
    background-color: white;
    display: grid;
    padding: 0px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/33%) 0px 13px 10px -15px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -16px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`
const Wrap = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        padding: 10px;
    }
`
const Description = styled.div`
    padding: 4vh;    
    padding-top: 8vh;
    
`