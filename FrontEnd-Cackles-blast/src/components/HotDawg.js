import React from 'react'
import styled from 'styled-components';
import img from '../assets/Nfts/78.png'

const ImageContainer = styled.div`
width: 100%;

img{
    width: 80%;
    height: auto;
    margin-left: 50px;
}

@media (max-width: 64em) {
      min-width: 60vh;
    }
`;

const HotDawg = () => {
  return (
    <ImageContainer>
        <img src={img} alt="Cackles" />
    </ImageContainer>
  )
}

export default HotDawg