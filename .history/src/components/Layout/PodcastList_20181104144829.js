import React, { Component } from 'react';

class componentName extends Component {

    async componentDidMount() {
        const response = await fetch('http://feeds.soundcloud.com/users/soundcloud:users:410463717/sounds.rss');
        const json = await response.json();
        console.log(json)

    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default componentName;