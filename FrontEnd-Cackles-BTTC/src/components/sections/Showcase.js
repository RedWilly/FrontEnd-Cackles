import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

import img1 from '../../assets/Nfts/1.png'
import img2 from '../../assets/Nfts/2.png'
import img3 from '../../assets/Nfts/3.png'
import img4 from '../../assets/Nfts/4.png'
import img5 from '../../assets/Nfts/5.png'
import img6 from '../../assets/Nfts/6.png'
import img7 from '../../assets/Nfts/7.png'
import img8 from '../../assets/Nfts/8.png'
import img9 from '../../assets/Nfts/9.png'
import img10 from '../../assets/Nfts/10.png'
import img11 from '../../assets/Nfts/11.png'
import img12 from '../../assets/Nfts/12.png'
import img13 from '../../assets/Nfts/13.png'
import img14 from '../../assets/Nfts/14.png'
import img15 from '../../assets/Nfts/15.png'
import img16 from '../../assets/Nfts/16.png'
import img17 from '../../assets/Nfts/17.png'
import img18 from '../../assets/Nfts/18.png'
import img19 from '../../assets/Nfts/19.png'
import img20 from '../../assets/Nfts/20.png'
import img21 from '../../assets/Nfts/21.png'
import img22 from '../../assets/Nfts/22.png'
import img23 from '../../assets/Nfts/23.png'
import img24 from '../../assets/Nfts/24.png'
import img25 from '../../assets/Nfts/25.png'
import img26 from '../../assets/Nfts/26.png'
import img27 from '../../assets/Nfts/27.png'
import img28 from '../../assets/Nfts/28.png'
import img29 from '../../assets/Nfts/29.png'
import img30 from '../../assets/Nfts/30.png'
import img31 from '../../assets/Nfts/31.png'
import img32 from '../../assets/Nfts/32.png'
import img33 from '../../assets/Nfts/33.png'
import img34 from '../../assets/Nfts/34.png'
import img35 from '../../assets/Nfts/35.png'
import img36 from '../../assets/Nfts/36.png'
import img37 from '../../assets/Nfts/37.png'
import img38 from '../../assets/Nfts/38.png'
import img39 from '../../assets/Nfts/39.png'
import img40 from '../../assets/Nfts/40.png'
import img41 from '../../assets/Nfts/41.png'
import img42 from '../../assets/Nfts/42.png'
import img43 from '../../assets/Nfts/43.png'
import img44 from '../../assets/Nfts/44.png'
import img45 from '../../assets/Nfts/45.png'
import img46 from '../../assets/Nfts/46.png'
import img47 from '../../assets/Nfts/47.png'
import img48 from '../../assets/Nfts/48.png'
import img49 from '../../assets/Nfts/49.png'
import img50 from '../../assets/Nfts/50.png'


const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;

    &>*:first-child{
        animation-duration: 20s;

        @media (max-width: 30em){
            animation-duration: 15s;
        }
    }

    &>*:last-child{
        animation-duration: 15s;

        @media (max-width: 30em){
            animation-duration: 15s;
        }
    }
`;

const move = keyframes`
    0%{ transform: translateX(62%) };
    100%{  transform: translateX(-62%) };
`;

const Row = styled.div`
    white-space: nowrap;
    box-sizing: content-box;
    display: flex;
    margin: 1rem 0;

    animation: ${move} 28s linear infinite ${props => props.direction};

    
`;

const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 auto;

    @media (max-width: 48em){
        width: 12rem;
        }
    @media (max-width: 30em){
        width: 10rem;
        }

    img{
        width: 100%;
        height: auto;
    }
`;

const NftItem = ({img}) => {
    return (
        <ImgContainer>
            <img src={img} alt='Hot Dawg' srcSet='' />
        </ImgContainer>
    )
}

const Showcase = () => {
    return(
        <Section id="showcase">
            <Row direction="none">
                <NftItem img={img1} />
                <NftItem img={img2} />
                <NftItem img={img3} />
                <NftItem img={img4} />
                <NftItem img={img5} />
                <NftItem img={img6} />
                <NftItem img={img7} />
                <NftItem img={img8} />
                <NftItem img={img9} />
                <NftItem img={img10} />
                <NftItem img={img11} />
                <NftItem img={img12} />
                <NftItem img={img13} />
                <NftItem img={img14} />
                <NftItem img={img15} />
                <NftItem img={img16} />
                <NftItem img={img17} />
                <NftItem img={img18} />
                <NftItem img={img19} />
                <NftItem img={img20} />
                <NftItem img={img21} />
                <NftItem img={img22} />
                <NftItem img={img23} />
                <NftItem img={img24} />
                <NftItem img={img25} />
            </Row>
            <Row direction="reverse">
                <NftItem img={img26} />
                <NftItem img={img27} />
                <NftItem img={img28} />
                <NftItem img={img29} />
                <NftItem img={img30} />
                <NftItem img={img31} />
                <NftItem img={img32} />
                <NftItem img={img33} />
                <NftItem img={img34} />
                <NftItem img={img35} />
                <NftItem img={img36} />
                <NftItem img={img37} />
                <NftItem img={img38} />
                <NftItem img={img39} />
                <NftItem img={img40} />
                <NftItem img={img41} />
                <NftItem img={img42} />
                <NftItem img={img43} />
                <NftItem img={img44} />
                <NftItem img={img45} />
                <NftItem img={img46} />
                <NftItem img={img47} />
                <NftItem img={img48} />
                <NftItem img={img49} />
                <NftItem img={img50} />
            </Row>
        </Section>
    )
}

export default Showcase
