import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAZ7bCjZHx8YuSLbnEthb2xqIoeR5c9iXo';


// Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
};

// Take this component's generated HTML and put it in the DOM.
var destination = document.querySelector('.container');
ReactDOM.render(<App />, destination);
