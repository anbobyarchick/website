import React from 'react';
import frameBackground from '../../assets/website-designs/image_frame_background.png';


const backgroundWrapper = (props) => {

    const addFrame  = {
        backgroundColor: '#692d03',
    }

    const frameObj = props.frameObj;

    return(
        <div style={addFrame}>{frameObj}</div>
    )
}

export default backgroundWrapper;