import React from 'react';
import ImageFrame from '../../Containers/ImageFrame/ImageFrame';



const galleryStyle = {
    position: 'left center',

    marginLeft: '5px',
    marginRight: '5px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth:'80%',
    backgroundColor: '#692d03'

    // backgroundColor: 'maroon'
}



const galleryWindow = (props) => {
    const gallery = props.galleryName;
    
    return(
        <div style={galleryStyle}>
            <ImageFrame gallery={gallery} />
        </div>
    )

}

export default galleryWindow;