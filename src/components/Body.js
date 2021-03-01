import React from 'react';
import Content from './Content';
import Image from './Image';

function Body(props) {
    return (
        <div className='Body'>
            <Content currentProbe={props.currentProbe} data={props.data} />
            <Image />
        </div>
    )
}

export default Body;