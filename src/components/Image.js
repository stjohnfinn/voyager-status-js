import React from 'react';
import randomDateBetween from './randomDateBetween';

class Image extends React.Component {
    constructor() {
        super();

        this.state = {
            source: 'https://static.scientificamerican.com/sciam/cache/file/8E50AD41-BAD5-4790-93EB564C50213190_source.jpg',
            text: 'Loading...',
            date: 'Loading...'
        };
    }

    componentDidMount() {

        const date = new Date();

        const startDate = {
            year: 1995,
            month: 6,
            day: 16
        };

        const endDate = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getUTCDate()
        }

        let {year, month, day} = randomDateBetween(startDate, endDate);

        const APIRequestURL = 'https://api.nasa.gov/planetary/apod?api_key=MPyI2KAnqnk1ZhBGVvwe59c6g3edxrcyX8Pm0ZrG&date=' + year + '-' + month + '-' + day;

        fetch(APIRequestURL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    source: data.hdurl,
                    text: data.title,
                    date: data.date
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    source: 'https://static.scientificamerican.com/sciam/cache/file/8E50AD41-BAD5-4790-93EB564C50213190_source.jpg',
                    text: 'NASA Voyager Probe',
                    date: '1977-09-05'
                });
            });
    }

    render() {
        return (
            <div className='ImageContainer'>
                <img src={this.state.source} alt='voyager.jpg' width='300' height='300' className='APODImg' />
                <h1 className='ImageTitle'>{this.state.text}</h1>
                <h4>{this.state.date}</h4>
            </div>
        )
    }
}

export default Image;