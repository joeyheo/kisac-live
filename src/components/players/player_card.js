// KISAC.LIVE V2 CLIENT
import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../../App.css";
import { Card, Image, Container } from "semantic-ui-react";

// REACT SKELETON IMPORT
import SkeletonComponent, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default class PlayerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      player: props.player,
    };
  }

  handleImageLoaded() {
    this.setState({ image: "loaded" });
  }
render(){

  return(
    <Container>
    <Card>
    {!this.state.image && <SkeletonComponent />}
            <Image src={this.state.player.image} wrapped ui={false} onLoad={this.handleImageLoaded.bind(this)}/>
            <Card.Content>
              <Card.Header>{ this.state.player.name }</Card.Header>
              <Card.Meta>{this.state.player.school} - Grade {this.state.player.grade}</Card.Meta>
              <Card.Description>
              {this.state.player.sport}
              </Card.Description>
              <Card.Description>{this.state.player.division}</Card.Description>
              <Card.Description> {this.state.player.playernumber}</Card.Description>
              <Card.Description>{this.state.player.sex}</Card.Description>
            </Card.Content>
          </Card>
          </Container>
  );
}
      
}