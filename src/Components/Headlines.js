import React from 'react';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      headlines: []
    };
  }

  makeApiCall = () => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`) // fetch returns a promise, so we can use .then...
      .then(response => response.json()) // if promise returns a value, it converts whats it into json
      .then( //if that returns a value, then it runs the bellow function
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            headlines: jsonifiedResponse.results
          });
        })
      .catch((error) => { // promise is rejected (i think?)
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  componentDidMount() { //potentially risky for hitting api limitd quickly due to new call with every component reload. avoid local server running to avoid component reloads.
    this.makeApiCall()
  }

  render() {
    const { error, isLoaded, headlines } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
       return (
        <React.Fragment>
          <h1>Headlines</h1>
          <ul>
            {headlines.map((headline, index) =>
              <li key={index}>
                <h3>{headline.title}</h3>
                <p>{headline.abstract}</p>
                <hr/>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Headlines;