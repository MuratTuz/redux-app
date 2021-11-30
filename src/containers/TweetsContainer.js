import { connect } from "react-redux";
import Tweets from "../components/tweets";
import { fetchedTweets } from "../redux/actions";

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {
  fetchedTweets,
};

export const TweetsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweets);
