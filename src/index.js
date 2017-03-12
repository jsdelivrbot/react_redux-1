import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAZ7bCjZHx8YuSLbnEthb2xqIoeR5c9iXo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'Elfriede Jelinek'}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

var destination = document.querySelector('.container');
ReactDOM.render(<App />, destination);
