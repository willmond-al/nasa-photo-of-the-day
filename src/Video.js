import React from 'react';
import styled from 'styled-components'

const Video = (props) => {
    const { data } = props

    return (
        <div className = 'video-container'>
            <iframe src = {data.hdurl} title={data.title}></iframe>
        </div>
    )
}

// const StyledVideo = styled.img`
//     width: 60%;
// `

export default Video