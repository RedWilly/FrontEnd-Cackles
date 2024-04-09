import React from 'react'
import styled from 'styled-components';
import unrevealed from '../assets/Unrevealed.png';


const ImageContainer = styled.div`
width: 100%;

img{
    width: 90%;
    height: auto;
    border: solid 3px ${props => props.theme.text};
    border-radius: 80px;
}

    @media (max-width: 64em) {
      max-width: 60vh;
    }
`;

const Unrevealed = () => {
  return (
    <ImageContainer>
        <img src={unrevealed} alt="Unrevealed" />
    </ImageContainer>
  )
}

export default Unrevealed