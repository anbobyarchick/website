import React from 'react';
// This component gets the data for an individual image and then returns it as an array


let imageDetails = null;

const imageBuilder = (props) => {
    imageDetails = 
    [title = props.title,
    width = props.width,
    height = props.height,
    portfolioSource = props.portfolioSource,
    printed = props.printed,
    sourcePath = props.sourcePath,
    key = props.imageKey];
    
    return imageDetails;
}

export default imageBuilder;