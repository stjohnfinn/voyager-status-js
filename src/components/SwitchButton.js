import React from 'react';

class SwitchButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            probeNum: props.probeNum,
            handleClick: props.handleClick
        };
    }

    render() {
        return (
            <div className='SwitchButton'>
                <button name={'probe' + this.state.probeNum} onClick={this.state.handleClick}>Voyager {this.state.probeNum}</button>
            </div>
        )
    }
}

export default SwitchButton;