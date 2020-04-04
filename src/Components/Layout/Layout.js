import React from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent';
import Banner from '../../Containers/Banner/Banner'; 
import Portfolio from '../../Containers/Portfolio/Portfolio';
import SiteBackground from '../SiteBackground/SiteBackground';

// This component is meant to set layout only
const farbackcolor = {
    backgroundColor: '#38070f'
}
const layout = (props) => (
    <Aux>
        
        <div>
            <SiteBackground />
        {/* </div>
        <div style={farbackcolor}> */}
            <Banner />
            <Portfolio />
        </div>
       
    </Aux>
);

export default layout;