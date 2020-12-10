import React from 'react';
import styled from 'styled-components'

const Image = (props) => {
    const { data } = props

    return (
        <div className = 'image-container'>
            <StyledImage src = {data.hdurl} alt='NASA photo of the day' />
        </div>
    )
}

const StyledImage = styled.img`
    width: 45%;
    border: solid aqua 10px;
    
`

export default Image