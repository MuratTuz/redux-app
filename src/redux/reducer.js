import produce from "immer";
import { LOGGED_IN, POSTED_TWEET, FETCHED_TWEETS } from "./actionTypes";

export const initialState = {
  username: "Not Signed In",
  token: "",
  userId: "",
  tweets: "",
  lastTweet: "",
};

export const reducer = produce((state = initialState, action) => {
  if (action.type === LOGGED_IN) {
    const { token, userId, username } = action.payload;
    state.token = token;
    state.userId = userId;
    state.username = username;
  }

  if (action.type === POSTED_TWEET) {
    const lastTweet = action.payload;
    state.lastTweet = lastTweet;
  }

  if (action.type === FETCHED_TWEETS) {
    const tweets = action.payload;
    state.tweets = tweets;
  }
}, initialState);
