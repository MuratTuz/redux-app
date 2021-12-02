import { useEffect } from "react";
//import { getAllTweetsService } from "../services/tweetServices";
import Tweet from "../components/tweet";

const Tweets = ({ tweets, token, lastTweet, getTweets }) => {
  useEffect(() => {
    getTweets(token);
    // eslint-disable-next-line
  }, [lastTweet]);

  return (
    <div className="d-flex flex-column">
      {tweets &&
        tweets
          .reverse()
          .map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
    </div>
  );
};

export default Tweets;
