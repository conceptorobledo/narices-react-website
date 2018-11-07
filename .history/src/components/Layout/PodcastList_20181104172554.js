import React, { Component } from 'react';
import Parser from 'rss-parser';
import './PodcastList.css';

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
            return this.setState({
                podcast: [...this.state.podcast, {
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
        const iframe = (trackId) => "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + trackId + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        const podcastList = podcast.map(item => <li key={item.trackId}>
            <h3>{item.title}</h3>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={iframe(item.trackId)}></iframe>
            <span class="horizontal-line"></span>
        </li>
        )
        return (
            <section id="podcast-list">
                <ul>
                    <h2>Últimos Podcast</h2>
                    {podcastList}
                </ul>
            </section>

        );
    }
}

export default componentName;