import React, {Component, useState } from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import GalleryWindow from '../../Components/GalleryWindow/GalleryWindow';


// This component manages state!
// This component holds the gallery window and portfolio navigation space (3 buttons to switch
//  between portfolio sources)
// The width of the portfolio navigation space should match the width of the gallery window
// This Components position maintains a static left margin, min-width, max-width, uniform padding

const portfolioStyle = {
    // marginTop: '20%',
    maxWidth: '90%',
    minWidth: '30%',
    display: 'flex',
    flexDirection: 'row'
}

class Portfolio extends Component {

    state = {
        imageArray: [],
        portfolioDetails: [],
        detailedImageView: false
    }

    render () {

        return (
            <Aux>
                <GalleryWindow style={portfolioStyle} />
            </Aux>
        )}

}

export default Portfolio;