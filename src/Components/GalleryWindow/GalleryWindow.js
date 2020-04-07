import React from 'react';
import ImageImporter from '../../Containers/ImageFrame/ImageFrame';



const galleryStyle = {
    position: 'left center',

    marginLeft: '5px',
    marginRight: '5px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth:'80%',
    backgroundColor: '#38070f'

}



const galleryWindow = (props) => {
    const gallery = props.galleryName;
    
    return(
        <div style={galleryStyle}>
            <ImageImporter gallery={gallery} />
        </div>
    )

}

export default galleryWindow;