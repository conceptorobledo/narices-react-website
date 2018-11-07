import React, { Component } from 'react';
import Parser from 'rss-parser';

class componentName extends Component {
    async componentDidMount() {
        let parser = new Parser()
        const feed = await parser.parseURL('http://feeds.soundcloud.com/users/soundcloud:users:410463717/sounds.rss');
        const response = await feed.items;
        console.log(response)

    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default componentName;