import React from 'react'
import styled from 'styled-components';

import member1 from '../../assets/Nfts/80.png';

const Section = styled.section`
    min-height: 80vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative; 
`;

const TextMid = styled.h2`
    font-size: ${props => props.theme.fontxxxl};
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 1rem;
    width: fit-content;
    text-decoration: underline;
    text-align: center;
`;

const Container = styled.div`
    width: 80%;
    margin: 2rem auto;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const Item = styled.div`
    width: calc(20rem-4vw);
    padding: 1rem 0;
    color: ${props => props.theme.body};
    margin: 2rem 1rem;
    position: relative;

    &:hover{
        img{
            transform: translateY(-2rem) scale(1.1);
        }
    }
`;

const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 auto;

    img{
        width: 100%;
        height: auto;
        transition: all 0.3s ease;
    }
`;

const Name = styled.h2`
    font-size: ${props => props.theme.fontxl};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${props => props.theme.text};
    margin-top: 1rem;
`;

const Position = styled.h2`
    font-size: ${props => props.theme.fontlg};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
    font-weight: 550;
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
    return (
        <Item>
            <ImgContainer>
                <img src={img} alt={name} />
            </ImgContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Item>
    )
}

const Team = () => {
    return (
        <Section id="team">
            <TextMid>Meet the team!</TextMid>
            <Container>
                <MemberComponent img={member1} name={"Red Willy"} position={"Founder"} />
            </Container>
        </Section>
    )
}

export default Team