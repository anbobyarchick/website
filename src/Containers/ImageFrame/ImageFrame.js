// This Container manages the artwork being displayed in the gallery
// It limits artwork size and holds the details for the artwork within it by managing state

import React, { Component } from 'react';
import sketchbookGallery from '../../assets/assetsIndex/assetsIndex';
import BackgroundWrapper from '../../hoc/BackgroundWrapper/BackgroundWrapper';


const frameStyle = {

    justifyContent: 'space-around',
    objectFit: 'scale-down',
    maxWidth: '382px',
    maxHeight: '475px',
    minWidth: '138px',
    minHeight: '200px',
    // marginTop: '10%',
    // marginLeft: '5%',
    // margingRight: '10%',
    // marginBottom: '5%',


}
class ImageFrame extends Component {
    
    

    render() {
        return (
            sketchbookGallery.map((path)=>{
            return(<BackgroundWrapper
                    frameObj = {<img style={frameStyle} src={path} alt='testing One'/>}
            />)
            }))
    
        
    }
}

export default ImageFrame;