import React from 'react';

let art=null;

const frameStyle = {

    justifyContent: 'space-around',
    objectFit: 'scale-down',
    maxWidth: '382px',
    maxHeight: '475px',
    minWidth: '138px',
    minHeight: '200px',

}

const frame = (props) => {
    art = props.art;
    return(
        <div style={frameStyle} >
            {art}
        </div>
    )
}

export default frame;