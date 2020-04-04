import React from 'react';
import Rose from '../../assets/Asset 2.png';

const backgroundStyling = {
    objectFit: 'cover',
    position: 'fixed',
    marginLeft: '72%',
    marginTop: '20%',
    minWidth: '300px',
    minHeight: '569px',
    opacity: '15%'
}

const siteBackground = (props) => {
    return <div><img style={backgroundStyling} src={Rose}></img></div>
}

export default siteBackground