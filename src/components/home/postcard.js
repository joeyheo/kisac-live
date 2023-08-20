// KISAC.LIVE V2 CLIENT
import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../../App.css";
import { Card, Image, Container } from "semantic-ui-react";

// REACT SKELETON IMPORT
import SkeletonComponent, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import moment, { Moment } from "moment";
export default class PostCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      post: props.post,
    };
  }

  handleImageLoaded() {
    this.setState({ image: "loaded" });
  }
  
render(){

  return(
    <div class="ui fluid card">
        <Image src={this.state.post.image} wrapped ui={false}/>
        <div class="content">
          <i class="right floated like icon"></i>
          <i class="right floated star icon"></i>
          <div class="header">{this.state.post.title}</div>
          <div class="description">
            <p>{this.state.post.content}</p>
          </div>
        </div>
        <div class="extra content">
        {moment(this.state.post.posttime.toDate()).format("YYYY-MM-DD")}
        <span class="right floated">
<p>{this.state.post.author}</p>
    </span>
        </div>
      </div>
  );
}
      
}

