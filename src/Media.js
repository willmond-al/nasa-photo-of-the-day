import React from 'react';

const Media = (props) => {
    const { data } = props

    return (
        <div className = 'video-container'>
            <iframe src = {data.hdurl} title = {data.title}></iframe>
        </div>
    )
}

export default Media