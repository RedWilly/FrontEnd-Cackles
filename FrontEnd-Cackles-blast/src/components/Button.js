import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    border: none;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    font-size: ${props => props.theme.fontlg};
    border-radius: 50px;
    padding: 1rem 2rem;
    font-family: 'Patrick Hand', sans-serif;

    transition: all 0.2s ease;

    &:hover{
        transform: scale(1.1);
    }
`;
const Button = ({text, link}) => {
    return(
        <Btn>
            <a href={link} aria-label={text} target="_blank" rel="noopener noreferrer" >
                {text}
            </a>
        </Btn>
    )
}

export default Button