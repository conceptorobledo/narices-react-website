import React, { Component } from 'react';

class componentName extends Component {

    componentDidMount(){
    }

    _fetch(){
        fetch('http://feeds.soundcloud.com/users/soundcloud:users:410463717/sounds.rss');
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default componentName;