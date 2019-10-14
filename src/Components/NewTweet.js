import React, { Component } from 'react';

export class NewTweet extends Component {
  render() {
    return (
      <form className="tweet-form">
        <input className="tweet-input" type="text" placeholder="Tweet" />
        <input type="text" placeholder="Username" />
        <input type="submit" value="Tweet" />
      </form>
    );
  }
}

export default NewTweet;
