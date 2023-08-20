// KISAC.LIVE V2 CLIENT

// KISAC.LIVE V2 CLIENT

import React, { Component, useEffect, useState } from "react";
import "../../../App.css";


// MAIN FUNCTION
export default class Placeholder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
    };
  }

  handleImageLoaded() {
    this.setState({ image: "loaded" });
  }

  render() {
    return (
      <div class="left floated three three wide column leftCol">
    
      </div>
    );
  }
}
