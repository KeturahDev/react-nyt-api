const middlewareExample = store => next => action => {

  // Here, we'd run some asynchronous code and/or code that has side effects, such as making an API call.
    console.log("used")
  return next(action);
}

export default middlewareExample;