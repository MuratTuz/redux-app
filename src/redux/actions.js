
import { LOGGED_IN, POSTED_TWEET, FETCHED_TWEETS } from "./actionTypes";
import { getAllTweetsService } from "../services/tweetServices";

export const loggedIn = (token, userId, username) => ({
  type: LOGGED_IN,
  payload: { token, userId, username },
});

export const postedTweet = (postedTweet) => ({
  type: POSTED_TWEET,
  payload: postedTweet,
});

export const fetchedTweets = (tweets) => ({
  type: FETCHED_TWEETS,
  payload: tweets,
});

export const getTweets = (token) => {
  return async (dispatch) => {
    const data = await getAllTweetsService( token );
    dispatch( fetchedTweets( data ) );
  };
};
