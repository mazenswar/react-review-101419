import React, { Component } from 'react';
import Timeline from './Containers/Timeline';
import Likes from './Containers/Likes';
import NewTweet from './Components/NewTweet';
import './App.scss';

export class App extends Component {
  state = {
    tweets: [],
    likes: []
  };

  componentDidMount() {
    fetch('http://localhost:3000/tweets')
      .then(r => r.json())
      .then(tweetsArr => {
        this.setState({ tweets: tweetsArr });
      });
  }

  handleLike = tweetObj => {
    if (!this.state.likes.includes(tweetObj)) {
      this.setState({ likes: [...this.state.likes, tweetObj] });
    }
  };

  handleUnlike = tweetObj => {
    let newTweets = this.state.likes.filter(tweet => tweet.id !== tweetObj.id);
    this.setState({ likes: newTweets });
  };

  handleNewTweet = tweetData => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tweetData)
    };
    fetch('http://localhost:3000/tweets', config)
      .then(r => r.json())
      .then(newTweet => {
        this.setState({ tweets: [newTweet, ...this.state.tweets] });
      });
  };

  render() {
    return (
      <>
        <NewTweet handleNewTweet={this.handleNewTweet} />
        <Timeline handleLike={this.handleLike} tweets={this.state.tweets} />
        <Likes likes={this.state.likes} handleLike={this.handleUnlike} />
      </>
    );
  }
}

export default App;
