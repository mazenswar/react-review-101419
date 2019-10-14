import React, { Component } from 'react';
import SingleTweet from '../Components/SingleTweet';

export class Likes extends Component {
  renderTweets = () => {
    return this.props.likes.map(tweetObj => {
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
      <div className="likes">
        <h1>Likes</h1>
        {this.renderTweets()}
      </div>
    );
  }
}

export default Likes;
