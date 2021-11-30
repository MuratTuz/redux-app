
# redux-app

### `produce from immer` 
This makes the state array immutable or frozen from outside of the produce. So you should care about the store data with any array functions;
`  const data = state.tweets;
    return (
      <div className="d-flex flex-column">
        {data &&
          [...data]  // here you should reproduce the data
            .reverse()
            .map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
      </div>
    );`