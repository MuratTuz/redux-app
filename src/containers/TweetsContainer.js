import { connect } from "react-redux";
import Tweets from "../components/tweets";
import { getTweets } from "../redux/actions";

const mapStateToProps = (state) => ({
  tweets: state.tweets,
  token: state.token,
  lastTweet: state.lastTweet,
});

const mapDispatchToProps = {
  getTweets,
};

export const TweetsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweets);
