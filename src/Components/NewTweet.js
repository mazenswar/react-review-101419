import React, { Component } from 'react';

export class NewTweet extends Component {
  state = {
    content: '',
    username: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleNewTweet(this.state);
  };

  render() {
    return (
      <form className="tweet-form" onSubmit={this.handleSubmit}>
        <input
          className="tweet-input"
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="Tweet"
        />
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Username"
        />
        <input type="submit" value="Tweet" />
      </form>
    );
  }
}

export default NewTweet;
