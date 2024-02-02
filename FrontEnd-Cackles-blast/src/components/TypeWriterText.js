import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button2 from './Button2';
import DiscordButton from './DiscordButton';

const TextSmall = styled.h2`
    font-size: ${props => props.theme.fontxl};
    align-self: flex-start;

    @media (max-width: 70em) {
        font-size: ${props => props.theme.fontlg};
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }

    @media (max-width: 40em) {
        width: 90%;
    }
`;

const TextBig = styled.h1`
    font-size: 6.5rem;
    align-self: flex-start;

    @media (max-width: 70em) {
        font-size: ${props => props.theme.fontxxxl};
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }

    @media (max-width: 40em) {
        width: 90%;
    }
`;

const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
        width: 100%;
        margin-bottom: 10px;
    }
`;


const TypeWriterText = () => {
    return (
        <div>
            <TextSmall>
                Meet the
            </TextSmall>
            <TextBig>
                Nuggets
            </TextBig>
            <TextSmall>
                10000 of the
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('hottest')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('Smartest')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('craziest')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('Sizzling')
                            .pauseFor(2000)
                            .deleteAll()
                            .start()
                    }}
                />
                Fusion of Cackles and Mutants on the Blast.
            </TextSmall>
            <ButtonContainer>
                <a href="#intro"> <Button2 /> </a>
                <a href="https://discord.gg/q29cdhb2AA" target="_blank" rel="noopener noreferrer"> <DiscordButton /> </a>
            </ButtonContainer>
        </div>
    )
}

export default TypeWriterText