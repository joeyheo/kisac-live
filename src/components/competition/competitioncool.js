// KISAC.LIVE V2 CLIENT

// KISAC.LIVE V2 CLIENT

import React, { Component, useEffect, useState } from "react";
import "../../App.css";
import { Card, Feed } from "semantic-ui-react";

import { BrowserView, MobileView } from "react-device-detect";

// MAIN FUNCTION
export default class Competitioncool extends Component {
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
      <>
      <BrowserView>
      <div class="right floated three three wide column rightCol">
        <div class="sideContent">
        <Card>
    <Card.Content>
      <Card.Header>KISAC & JIT Shortcut</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://drive.google.com/uc?id=101KVMISsgM260vZKPTkZWh3GlxRfNs51' />
          <Feed.Content>
            <Feed.Summary>
             <a href="/kisac">KISAC - TENNIS</a> 
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://drive.google.com/uc?id=15xd_WLmHNMLOEHFfsgS8KP8UgbChIAZZ' />
          <Feed.Content>
            <Feed.Summary>
             <a href="/jit">JIT - VOLLEYBALL</a> 
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
        </div>
      </div>
      </BrowserView>

      <MobileView></MobileView>
      </>
    );
  }
}
