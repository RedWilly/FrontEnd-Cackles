import React from 'react';
import styled from 'styled-components';
import HotDawg from '../HotDawg';

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 64em) {
        width: 85%;
    }

    @media (max-width: 48em) {
        flex-direction: column-reverse;
        width: 100%;
        &>*:first-child{
            width: 100%;
            margin-top: 2rem;
        }
    }
`;

const Box = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextMid = styled.h2`
    margin-bottom: 10px;
    align-self: flex-start;
    font-size: ${props => props.theme.fontxxxl};
    color: ${props => props.theme.text};

    @media (max-width: 70em) {
        font-size: ${props => props.theme.fontxl};
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }

    @media (max-width: 40em) {
        width: 90%;
    }
`;

const TextSmall = styled.h2`
    align-self: flex-start;
    font-size: ${props => props.theme.fontxl};
    ${props => props.theme.text};

    @media (max-width: 70em) {
        font-size: 1.5em;
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }

    @media (max-width: 40em) {
        width: 90%;
    }
`;

const About = () => {
    return (
        <Section id="about">
            <Container>
                <Box>
                    <TextMid>
                        What's so special about them?
                    </TextMid>
                    <TextSmall>
                        Each Nugget is a one-of-a-kind creation, brought to life through random generation. These quirky characters have embarked on countless adventures, accumulating a diverse array of items like hats, accessories, clothes, and more!
                        <br />
                        <br />
                        Note: Some of their fashion senses may not be the best as they are not the most intelligent of creatures...  And for our mutated chicken enthusiasts, these unique individuals have their own peculiar styles that set them apart from the rest.
                    </TextSmall>
                </Box>
                <Box> <HotDawg /> </Box>
            </Container>
        </Section>
    )
}

export default About