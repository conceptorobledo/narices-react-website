import React, { Component } from 'react';
import Parser from 'rss-parser';

class componentName extends Component {
    state = {
        podcast: []
    }

    async componentDidMount() {
        let parser = new Parser()
        const feed = await parser.parseURL('http://feeds.soundcloud.com/users/soundcloud:users:410463717/sounds.rss');
        const response = await feed.items;
        const transformData = await response.map(function (item) {
            const guid = item.guid;
            const str = 'tracks/';//Extracto donde se encuentra el identificador del Track
            const index = guid.indexOf(str);
            //Se hace un slice para sacar el lugar exacto del id
            const trackId = guid.slice(index + str.length)
            return {
                title: item.title,
                content: item.content,
                downloadUrl: item.enclosure.url,
                trackId: trackId,
                image: item.itunes.image,
                page_url: trackId
            }
        });
        const data = await JSON.stringify(transformData);

    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default componentName;