import React from 'react';
import styled from 'styled-components';

const Btn2 = styled.button`
    border: solid 2px ${props => props.theme.text};
    background-color: #fce08f;
    color: ${props => props.theme.text};
    font-size: ${props => props.theme.fontlg};
    border-radius: 50px;
    padding: 1rem 2rem;
    margin: 15px 15px 0px 0px;
    cursor: pointer;
    font-family: 'Patrick Hand', sans-serif;

    transition: all 0.2s ease;

    &:hover{
        transform: scale(1.1);
    }
`;
const Button = () => {
    return(
        <Btn2>
            <a href={'#intro'} rel="noopener noreferrer" >
                {`Dive in!`}
            </a>
        </Btn2>
    )
}

export default Button