
import React from 'react'
import styled from 'styled-components'
import { Roller } from 'react-spinners-css';
import theme from './theme';

const Loader = () => {
    return (
        <Wrapper>
            <Roller color={theme.buttonColor} size={200} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Loader
