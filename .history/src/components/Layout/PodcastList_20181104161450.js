import React, { Component } from 'react';
import Parser from 'rss-parser';

class componentName extends Component {
    async componentDidMount() {
        let paser = new Parser();
        const parser = new DOMParser();
        const response = await fetch('http://feeds.soundcloud.com/users/soundcloud:users:410463717/sounds.rss');
        const xml = await parser.parseFromString(response, 'text/xml');
        await console.log(xml)

    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default componentName;