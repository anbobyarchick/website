// This Container manages the artwork being displayed in the gallery
// It limits artwork size and holds the details for the artwork within it by managing state

import React from 'react';
import sketchbookGallery from '../../assets/assetsIndex/assetsIndex';
import illustrationGallery from '../../assets/artwork/illustrations/illustrationsIndex';
import digitalGallery from '../../assets/artwork/digitalWork/digitalIndex';
import promotion from '../../assets/website-designs/watermarkSignature.png'
import Frame from '../Frame/Frame';

let galleryName = null;
let galleryPaths = [];
let artwork = [];
let framedArt = [];

const imageImporter = (props) => {

    galleryName = props.gallery;

    switch(galleryName) {
        case 'digital':
            galleryPaths = digitalGallery;
            artwork = galleryPaths.map((path)=><img src={path} alt='shrug' />);
            framedArt = artwork.map((art)=><Frame art={art} />);
            return(framedArt);
            
        case 'illustration':
            galleryPaths = illustrationGallery;
            artwork = galleryPaths.map((path)=><img src={path} alt='shrug' />);
            framedArt = artwork.map((art)=><Frame art={art} />);
            return(framedArt);
            
        case 'sketchbook':
            galleryPaths = sketchbookGallery;
            artwork = galleryPaths.map((path)=><img src={path} alt='shrug' />);
            framedArt = artwork.map((art)=><Frame art={art} />);
            return(framedArt);
            
        default:
            return(<img src={promotion} alt='default shrug' />);
    }
}

export default imageImporter;
// const imageFrame = (props) => {
//     gallery = props.gallery;
//     switch(gallery) {
//         case 'digital':
//             return  (
//                 sketchbookGallery.map((path)=>{
//                     return(
//                         <BackgroundWrapper frameObj = {<img style={frameStyle} src={path} alt='testing One' />} />)
//                     }));     
//         case 'illustration':
//             return  (
//                 illustrationGallery.map((path)=>{
//                     return(
//                         <BackgroundWrapper frameObj = {<img style={frameStyle} src={path} alt='testing One' />} />)
//                 }));                
//         case 'sketchbook':
//             return  (
//                 sketchbookGallery.map((path)=>{
//                     return(
//                         <BackgroundWrapper frameObj = {<img style={frameStyle} src={path} alt='testing One' />} />)
//                 }));
//         default:
//             return  (
//             sketchbookGallery.map((path)=>{
//                 return(
//                     <BackgroundWrapper frameObj = {<img style={frameStyle} src={path} alt='testing One' />} />)
//             }));

//     }
