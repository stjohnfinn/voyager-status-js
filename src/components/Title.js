import React from 'react';

function Title(props) {
    return (
        <div className='Title'>
            <h1>Currently Viewing Voyager {props.currentProbe} Mission Data</h1>
        </div>
    )
}

export default Title;