import React from 'react';
import ReactTooltip from 'react-tooltip';

function Stat(props) {
    return (
        <div className='Stat' data-tip={props.tooltip}>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
            <ReactTooltip place='bottom' effect='solid' />
        </div>
    )
}

export default Stat;