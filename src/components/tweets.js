import { useEffect } from "react";
import { errorAlert } from "../services/alertServices";
import { getTokenFromSessionStorage } from "../services/tokenServices";
import Tweet from "./Tweet";

import { connect } from "react-redux";
import { getTweets } from "../redux/actions";

const Tweets = ({ tweets, error, lastTweet, getTweets }) => {
  useEffect(() => {
    const { token } = getTokenFromSessionStorage();
    getTweets(token);
    if (error) {
      errorAlert(error);
    }
    // eslint-disable-next-line
  }, [lastTweet, error]);

  return (
    <div className="d-flex flex-column">
      {tweets &&
        [...tweets]
          .reverse()
          .map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tweets: state.tweets,
  lastTweet: state.lastTweet,
  error: state.error,
});

const mapDispatchToProps = {
  getTweets,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);


