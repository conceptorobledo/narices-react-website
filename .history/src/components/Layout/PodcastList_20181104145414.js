import React, { Component } from 'react';

class componentName extends Component {

    async componentDidMount() {
        const parser  = new DOMParser();
        const response = await fetch('http://feeds.soundcloud.com/users/soundcloud:users:410463717/sounds.rss');
        const xml = await parser.parseFromString(response, 'text/xml');
        const json = await xml.json();
        await console.log(json)

    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default componentName;