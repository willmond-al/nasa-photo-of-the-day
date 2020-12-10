import React from 'react';
import styled from 'styled-components'

const Video = (props) => {
    const { data } = props

    return (
        <div className = 'video-container'>
            <StyledVideo src = {data.hdurl} title={data.title}></StyledVideo>
        </div>
    )
}

const StyledVideo = styled.iframe`
    width: 60%;
`

export default Video