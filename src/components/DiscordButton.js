import React from 'react';
import styled from 'styled-components';
import discord from '../assets/discord.png';

const DBtn = styled.button`
    border: solid 2px ${props => props.theme.text};
    background-color: #6b89ff;
    color: white;
    font-size: ${props => props.theme.fontlg};
    border-radius: 50px;
    padding: 1rem 2rem;
    cursor: pointer;
    font-family: 'Patrick Hand', sans-serif;
    margin: 15px 15px 0px 0px;
    
    transition: all 0.2s ease;

    &:hover{
        transform: scale(1.1);
    }
`;
const DiscordButton = () => {
    return(
        <DBtn>
            <a href={'https://discord.gg/q29cdhb2AA'} target="_blank" rel="noopener noreferrer" >
                <img src={discord} width={20} alt="discord"/> {`Follow' Us`}
            </a>
        </DBtn>
    )
}

export default DiscordButton