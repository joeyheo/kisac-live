// KISAC.LIVE V2 CLIENT

import React, { Component } from "react";
import "../../../App.css";
import { Card, Image, Grid, Message, Label, Divider, Icon } from "semantic-ui-react";

// REACT SKELETON IMPORT
import SkeletonComponent, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// MAIN FUNCTION
export default class smallscoredisplay extends Component {
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
    function youtube_parser(url){
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      var match = url.match(regExp);
      return (match&&match[7].length==11)? match[7] : false;
  }
    return (
      <Grid>
      <Grid.Column width={10}>
          
      </Grid.Column>
      <Grid.Column width={6}>
          <Grid centered columns={3} row={2}>
            <Grid.Row>
              <Grid.Column width={6}>
                <Card>
                  {!this.state.image && <SkeletonComponent />}
                  <Image
                    src="https://drive.google.com/uc?id=1X-YKyB3R-Tkw_vDlA_kh1vENeFaewWKC"
                    onLoad={this.handleImageLoaded.bind(this)}
                  />
                  <Card.Content>
                    <Card.Header className="centerfont">SJA Jeju</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={4}>
                <Card className="smallerfont">
                  <Label as="a" color="red" attached="top">
                    Live - Q1
                  </Label>
                  <Card.Content className="smallerfont">
                    <Card.Header className="smallerfont">time</Card.Header>
                  </Card.Content>
                </Card>
                
              </Grid.Column>
              <Grid.Column width={6}>
                <Card>
                  {!this.state.image && <SkeletonComponent />}
                  <Image
                    src="https://drive.google.com/uc?id=1jRibiAs2zfkugzTHGV5lfqLLTcJcUGoJ"
                    onLoad={this.handleImageLoaded.bind(this)}
                  />
                  <Card.Content>
                    <Card.Header className="centerfont"> KIS Jeju</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column floated='left' width={6}>
                <Card>
                  <Card.Content>
                    <Card.Header className="centerfont">83</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Card>
                  <Card.Content>
                    <Card.Header className="centerfont">32</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
          </Grid>
      </Grid.Column>
    </Grid>
      
    );
  }
}
