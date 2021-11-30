import { useEffect } from "react";
import { getAllTweetsService } from "../services/tweetServices";
import Tweet from "../components/tweet";

const Tweets = ({ state, fetchedTweets }) => {
  useEffect(() => {
    const getTweets = async () => {
      const data = await getAllTweetsService(state.token, state.userId);
      const stateTweetCount = state.tweets ? state.tweets.length : 0;
      if (data.length !== stateTweetCount) {
        fetchedTweets(data);
      }
    };
    getTweets();
    // eslint-disable-next-line
  }, [state]);

  const data = state.tweets;
  return (
    <div className="d-flex flex-column">
      {data &&
        [...data]
          .reverse()
          .map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
    </div>
  );
};

export default Tweets;
