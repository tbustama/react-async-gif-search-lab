import React from "react";
import GifSearch from "./GifSearch";

export default class GifList extends React.Component {
  state = {
    gifs: null,
  };
  componentDidMount() {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"
    )
      .then((resp) => resp.json())
      .then((obj) =>
        this.setState({
          gifs: obj,
        })
      );
  }
  render() {
    return <GifSearch gifs={this.state.gifs} />;
  }
}
