import React, { Component } from 'react';
import Timeline from './Containers/Timeline';
import Likes from './Containers/Likes';
import NewTweet from './Components/NewTweet';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <>
        <NewTweet />
        <Timeline />
        <Likes />
      </>
    );
  }
}

export default App;
