import { useEffect, useState } from "react";
import { getAllTweetsService } from "../services/tweetServices";
import Tweet from "../components/tweet";

const Tweets = ({ state, fetchedTweets }) => {
  console.log("state ", state);

  useEffect(() => {
    const getTweets = async () => {
      const data = await getAllTweetsService(state.token, state.userId);
      console.log(data);
      const stateTweetCount = state.tweets ? state.tweets.length : 0;
      if (data.length !== stateTweetCount) {
        fetchedTweets(data);
      }
    };
    getTweets();
  }, [state]);
  const data = state.tweets;
  console.log("data ", state);
  return (
    <div className="d-flex flex-column">
      {data && data.map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
    </div>
  );
};

export default Tweets;
