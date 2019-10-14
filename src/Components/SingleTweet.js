import React from 'react';

const SingleTweet = props => {
  return (
    <div className="single-tweet">
      <p>Tweet Content</p>
      <span className="username">By: username</span>
      <span className="heart" role="img" aria-label="heart">
        ❤️
      </span>
    </div>
  );
};

export default SingleTweet;
