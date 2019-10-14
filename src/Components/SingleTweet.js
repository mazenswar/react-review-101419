import React from 'react';

const SingleTweet = ({ tweet, handleLike }) => {
  return (
    <div className="single-tweet">
      <p>{tweet.content}</p>
      <span className="username">By {tweet.username}</span>
      <span
        onClick={() => handleLike(tweet)}
        className="heart"
        role="img"
        aria-label="heart"
      >
        ❤️
      </span>
    </div>
  );
};

export default SingleTweet;
