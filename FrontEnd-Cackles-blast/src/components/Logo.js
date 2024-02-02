import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/hotdawgslogo-small.png'

const LogoImg = styled.div`
    transition: all 0.2s ease;

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 64em) {
        img{
            width: 50;
            height: 50;
        }
    }
`;

const Logo = () => {
    return (
        <LogoImg>
            <Link to="/">
                <img src={logo} alt="Logo" width={70} height={70} />
            </Link>
        </LogoImg>
    )
}

export default Logo