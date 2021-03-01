import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

const funcURL = 'https://us-central1-voyager-tracker-backend.cloudfunctions.net/getVoyagerInfo';

class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            currentProbe: 1,
            data: {
                launchDate: 'Loading...',
                elapsedTime: 'Loading...',
                earthDist: 'Loading...',
                sunDist: 'Loading...',
                vel: 'Loading...',
                owlt: 'Loading...'
            }
        };

        this.handleSwitch = this.handleSwitch.bind(this);
    }

    componentDidMount() {
        fetch(funcURL + '?probe=1')
            .then(res => res.json())
            .then(stats => {
                this.setState({
                    data: stats.data
                });
            })
            .catch(err => console.log(err));
    }

    async handleSwitch(buttonProbe) {

        this.setState({
            data: {
                launchDate: 'Loading...',
                elapsedTime: 'Loading...',
                earthDist: 'Loading...',
                sunDist: 'Loading...',
                vel: 'Loading...',
                owlt: 'Loading...'
            }
        })

        await fetch(funcURL + '?probe=' + buttonProbe)
            .then(res => res.json())
            .then(stats => {
                this.setState({
                    data: stats.data
                });
            })
            .catch(err => console.log(err));

        if (buttonProbe === 1) {
            await this.setState({
                currentProbe: 1
            });
        } else {
            await this.setState({
                currentProbe: 2
            });
        }

        console.log('Active Probe: ' + this.state.currentProbe);
    }

    render() {
        return (
            <div className='App'>
                <Header handleSwitch={this.handleSwitch} />
                <Body currentProbe={this.state.currentProbe} data={this.state.data} />
            </div>
        );
    }
}

export default App;