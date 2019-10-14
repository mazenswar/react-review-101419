import React, { Component } from 'react';
import SingleTweet from '../Components/SingleTweet';

export class Timeline extends Component {
  renderTweets = () => {
    return this.props.tweets.map(tweetObj => {
      return (
        <SingleTweet
          handleLike={this.props.handleLike}
          key={tweetObj.id}
          tweet={tweetObj}
        />
      );
    });
  };
  render() {
    return (
      <div className="timeline">
        <h1>Timeline</h1>
        {this.renderTweets()}
      </div>
    );
  }
}

export default Timeline;
