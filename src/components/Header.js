import React from 'react';
import Logo from './Logo';
import SwitchButton from './SwitchButton';
import Title from './Title';

class Header extends React.Component {
    constructor(props) {
        super();
        
        this.state = {
            handleSwitch: props.handleSwitch,
            currentProbeTitle: 1
        };
    }

    render() {
        return (
            <div className='Header'>
                <Logo />
                <Title currentProbe={this.state.currentProbeTitle} />
                <SwitchButton 
                    probeNum='1' 
                    handleClick={
                        () => {
                            this.state.handleSwitch(1);
                            this.setState({
                                currentProbeTitle: 1
                            });
                        }
                    } 
                />
                <SwitchButton 
                    probeNum='2' 
                    handleClick={
                        () => {
                            this.state.handleSwitch(2);
                            this.setState({
                                currentProbeTitle: 2
                            })
                        }
                    }
                />
            </div>
        )
    }
}

export default Header;