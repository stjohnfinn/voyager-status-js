import React from 'react';
import Stat from './Stat';

const compCount = 6;

function Content(props) {

    // props.data has the following properties
    // earthDist
    // sunDist
    // vel
    // owlt
    // launchDate
    // elapsedTime

    console.log(props);

    let statsArr = [];

    statsArr.push(
        <Stat key={0} name='Launch Date: ' text={props.data.launchDate}  tooltip='Launch date of this Voyager Probe' />
    );
    statsArr.push(
        <Stat key={1} name='Elapsed Time: ' text={props.data.elapsedTime} tooltip='Time elapsed since the launch of this Voyager Probe in seconds' />
    );
    statsArr.push(
        <Stat key={2} name='Distance from Earth: ' text={props.data.earthDist} tooltip="This probe's distance from Earth in miles" />
    );
    statsArr.push(
        <Stat key={3} name='Distance from Sun: ' text={props.data.sunDist} tooltip="This probe's distance from the Sun in miles" />
    );
    statsArr.push(
        <Stat key={4} name='Velocity: ' text={props.data.vel} tooltip="Velocity of this probe relative to the Sun" />
    );
    statsArr.push(
        <Stat key={5} name='One-Way Light Time: ' text={props.data.owlt} tooltip="The time it takes for light to travel from Earth to this Voyager Probe" />
    );

    return (
        <div className='Content'>
            {statsArr}
        </div>
    )
}

export default Content;