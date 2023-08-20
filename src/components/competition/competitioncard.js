// KISAC.LIVE V2 CLIENT
import React, { Component, useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import "../../App.css";
import { Button, Image, Container } from "semantic-ui-react";

// REACT SKELETON IMPORT
import SkeletonComponent, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import moment, { Moment } from "moment";
export default class CompetitionCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      schedule: props.schedule,
    };
  }

  handleImageLoaded() {
    this.setState({ image: "loaded" });
  }
  
render(){
  return(
          <div class="ui fluid card" >
            <div class="content">
              {this.state.schedule.name}
              <br />
          
              <span className="scoreSpan">{`${this.state.schedule.sch1score}:${this.state.schedule.sch2score}`}</span>
              <span className="teamSpan">{`${this.state.schedule.sch1} vs ${
                this.state.schedule.sch2
              }`}</span>
              <br />

            </div>
          </div>
  );
}
      
}

