import React, { Children } from 'react';
import ImageFrame from '../../Containers/ImageFrame/ImageFrame';
import artArray from '../../assets/assetsIndex/assetsIndex';


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
    const art = artArray;
    console.log(art);


    return(

        <div style={galleryStyle}>
            <ImageFrame gallery='illustration' />
            <ImageFrame gallery='sketchbook' />
        </div>
    )

}

export default galleryWindow;