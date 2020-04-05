// This Container manages the artwork being displayed in the gallery
// It limits artwork size and holds the details for the artwork within it by managing state

import React from 'react';
import sketchbookGallery from '../../assets/assetsIndex/assetsIndex';
import BackgroundWrapper from '../../hoc/BackgroundWrapper/BackgroundWrapper';
import illustrationGallery from '../../assets/artwork/illustrations/illustrationsIndex';


const frameStyle = {

    justifyContent: 'space-around',
    objectFit: 'scale-down',
    maxWidth: '382px',
    maxHeight: '475px',
    minWidth: '138px',
    minHeight: '200px',

}
let gallery = null;

const imageFrame = (props) => {
    gallery = props.gallery;
    switch(gallery) {
        case 'digital':
            return  (
                sketchbookGallery.map((path)=>{
                    return(
                        <BackgroundWrapper frameObj = {<img style={frameStyle} src={path} alt='testing One' />} />)
                }));     
        case 'illustration':
            return  (
                illustrationGallery.map((path)=>{
                    return(
                        <BackgroundWrapper frameObj = {<img style={frameStyle} src={path} alt='testing One' />} />)
                }));                
        case 'sketchbook':
            return  (
                sketchbookGallery.map((path)=>{
                    return(
                        <BackgroundWrapper frameObj = {<img style={frameStyle} src={path} alt='testing One' />} />)
                }));
        default:
            return  (
            sketchbookGallery.map((path)=>{
                return(
                    <BackgroundWrapper frameObj = {<img style={frameStyle} src={path} alt='testing One' />} />)
            }));

    }
}

export default imageFrame;