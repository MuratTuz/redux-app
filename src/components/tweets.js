import { useEffect } from "react";
import { getAllTweetsService } from "../services/tweetServices";
import { getTokenFromSessionStorage } from "../services/saveToken";
import Tweet from "../components/tweet";

const Tweets = ({ state, fetchedTweets }) => {
  useEffect(() => {
    const getTweets = async () => {
      const accessToken =
        state.token === "" ? getTokenFromSessionStorage() : state.token;
      const data = await getAllTweetsService(accessToken);
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
