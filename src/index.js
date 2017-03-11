import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAZ7bCjZHx8YuSLbnEthb2xqIoeR5c9iXo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, data => this.setState({ videos: data }) );
  }

  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

var destination = document.querySelector('.container');
ReactDOM.render(<App />, destination);
