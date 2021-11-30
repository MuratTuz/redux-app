
import { LOGGED_IN, POSTED_TWEET, FETCHED_TWEETS } from "./actionTypes";

export const loggedIn = (token, userId, username) => ({
  type: LOGGED_IN,
  payload: { token, userId, username },
});

export const postedTweet = (postedTweet) => ({
  type: POSTED_TWEET,
  payload: postedTweet,
});

export const fetchedTweets = (tweets) => {
  //  console.log("fetchedTweets", tweets);
  return {
    type: FETCHED_TWEETS,
    payload: tweets,
  };
};