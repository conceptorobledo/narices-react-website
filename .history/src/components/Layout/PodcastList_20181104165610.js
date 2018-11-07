import React, { Component } from 'react';
import Parser from 'rss-parser';

class componentName extends Component {
    state = {
        podcast: []
    }

    async componentDidMount() {
        const parser = await new Parser();
        const feed = await parser.parseURL('http://feeds.soundcloud.com/users/soundcloud:users:410463717/sounds.rss');
        const response = await feed.items;
        await response.map((item) => {
            const guid = item.guid;
            const str = 'tracks/';//Extracto donde se encuentra el identificador del Track
            const index = guid.indexOf(str);
            //Se hace un slice para sacar el lugar exacto del id
            const trackId = guid.slice(index + str.length)
            console.log(this.state)
            return this.setState({
                podcast: [...{
                    title: item.title,
                    content: item.content,
                    downloadUrl: item.enclosure.url,
                    trackId: trackId,
                    image: item.itunes.image,
                    page_url: trackId
                }]
            });
        });
    }


    render() {
        const { podcast } = this.state;
        return (
            <ul>
                <li>
                    {podcast.title}
                </li>
            </ul>
        );
    }
}

export default componentName;