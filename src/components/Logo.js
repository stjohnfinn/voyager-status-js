import React from 'react';

class Logo extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className='Logo'>
                <img className='LogoImage' src='./images/logo.png' alt='NASA'/>
            </div>
        )
    }
}

export default Logo;