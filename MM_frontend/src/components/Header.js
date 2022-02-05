import React, { useState } from 'react';
import styled from "styled-components";
import { selectMotos } from "../features/moto/motoSlice";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const motos = useSelector(selectMotos);
    
    return (
        <Container>
            <a translate='no'>
                <Link to={'/'}>
                <Logo > Mo | Ma </Logo>
                </Link>
            </a>
            <Menu>
                {motos && motos.map((moto, index) => (
                    <Link to ={`/details?type=${moto}`} key={index}>
                        {moto}
                    </Link>
                ))}
            </Menu>
            <RightMenu>
                <Link to='/details'>Shop</Link>
                <CustomMenu src="https://img.icons8.com/ios-filled/20/000000/menu--v1.png" onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurguerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose src="https://img.icons8.com/ios/24/000000/chevron-right.png" onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li className='title'><a href="#">TYPES</a></li>
                {motos && motos.map((moto, index) => (
                    <Link to={`/details/${moto}`} key={index}>
                        <li>{moto}</li>
                    </Link>
                ))}
                <li className='title'><a href="#">BRANDS</a></li>
                <li>Suzuki</li>
                <li>Yamaha</li>
                <li>Honda</li>
                <li>KTM</li>
                <li>Harley-Davidson</li>
            </BurguerNav>
        </Container>
    )
}

export default Header;

const Logo = styled.h1`
font-family: 'Monoton', cursive;
font-size: 30px;
margin-top: 5px;
cursor: pointer;
`

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    alinght-items: center;
    justify-content: space-between;
    pading: 0 20px;
    padding-left: 10px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: white;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }
    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`
const CustomMenu = styled.img`
    cursor: pointer;
`

const BurguerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
// movimiento para el menu desplegrable derecho
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-out;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);
        a {
            font-weight: 600;
        }
    }
    .title{
        text-align: center;
        //background-color: #DA5757;
    }
`
const CustomClose = styled.img`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`