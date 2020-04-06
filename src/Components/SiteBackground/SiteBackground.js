import React from 'react';
import Rose from '../../assets/Asset 2.png';
import illustration from '../../assets/artwork/illustrations/illustrationsIndex';

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
    const path = illustration[3];

    return <div><img style={backgroundStyling} src={path}></img></div>
}

export default siteBackground