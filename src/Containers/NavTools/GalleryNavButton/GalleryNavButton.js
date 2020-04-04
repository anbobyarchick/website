import React from 'react';
import digital from '../../../assets/website-designs/digital_button_design.png';
import illustrated from '../../../assets/website-designs/illustration_button_design.png';
import sketch from '../../../assets/website-designs/sketch_button_design.png';
import promotional from '../../../assets/website-designs/fragmented-rose-advertisement.png';

const buttonStyle = {
    backgroundColor: '#692d03',
    justifyContent: 'center',
    maxWidth: '20%',
    marginLeft: '80%'
   
    // padding: '0px'
}

let clicker = null;
const galleryNavButton = (props) => {

    clicker = props.clicker;
    let gallery = props.galleryName;
    switch(gallery){
        case 'digital': 
            gallery = digital;
            return(
                <div onClick={clicker}>
                    <img src={gallery} style={buttonStyle}alt='idk'></img>
                </div>
            );
        
        case 'illustrations': 
            gallery = illustrated;
            return(
                <div onClick={clicker} style={buttonStyle}>
                    <img src={gallery} alt='idk'></img>
                </div>
            );
        
        case 'sketchbook': 
            gallery = sketch;
            return(
                <div onClick={clicker} style={buttonStyle}>
                    <img src={gallery} alt='idk'></img>
                </div>
            );
        
        default: {
            gallery = promotional;
            return(
                <div onClick={clicker} style={buttonStyle}>
                    <img src={gallery} alt='idk'></img>
                </div>
            );
        }
    };

  
    

}

export default galleryNavButton;