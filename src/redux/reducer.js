import { LOGGED_IN, POSTED_TWEET, FETCHED_TWEETS } from "./actionTypes";

export const initialState = {
  username: "Not Signed In",
  token: "",
  userId: "",
  tweets: "",
  lastTweet: "",
};

export const reducer = (state = initialState, action) => {
  if (action.type === LOGGED_IN) {
    const { token, userId, username } = action.payload;

    return {
      ...state,
      token,
      userId,
      username,
    };
  }

  if (action.type === POSTED_TWEET) {
    const lastTweet = action.payload;

    return {
      ...state,
      lastTweet,
    };
  }

  if (action.type === FETCHED_TWEETS) {
    const tweets = action.payload;
    return {
      ...state,
      tweets,
    };
  }
  return { ...state };
};
