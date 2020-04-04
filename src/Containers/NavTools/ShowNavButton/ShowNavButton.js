import React, {Component} from 'react';
import Aux from '../../../hoc/AuxComponent/AuxComponent';

// This is basicalllyyy a place holder until the drop down menu is prepared

const navButtonStyle = {
    position: 'fixed',
    width: '15%',
    
    right: '0',
    top: '0',
    display: 'flex',
    flexDirection: 'column'
}

class ShowNavButton extends Component {
    render () {
    return (
        <Aux>
            <div style={navButtonStyle}>
                <p>Show Nav Menu</p>
                <button>DUMMY NAV BUTTON</button>
            </div>
        </Aux>
        );
    }
}

export default ShowNavButton;