// KISAC.LIVE V2 CLIENT

import React from "react";
import "../../../App.css";
import { Dropdown, Menu, Container, Image, Button, Segment } from "semantic-ui-react";
// IMAGE IMPORT

// MAIN FUNCTION
export default function Home() {
  return(
  <>
  <div class="ui grid">
    <div class="left floated three three wide column leftCol">
      <div class="ui segment">
        <div class="sideContent">
            <img src="https://drive.google.com/uc?id=1yuencIjC-Y6UNydOJjPlGrSf-LJ5pvVi" alt="team logo img"/>
        </div>
      </div>
    </div>
    <div class="three nine wide column">
      <div class="ui segment scoreBoard">
        <div class="matchInfo">
            <h2 align="center">Round 1</h2>
            <h1 align="center"><span class="schoolNameL">SJAJ</span><span>VS</span><span class="schoolNameR">KISJ</span></h1>
        </div>
        <div class="ui segment">
            <h1 align="center"><span class="scoreL">00</span><span>:</span><span class="scoreR">00</span></h1>  
        </div>
      </div>
    </div>
    <div class="right floated three three wide column rightCol">
      <div class="ui segment">
        <div class="sideContent">
            <img src="https://drive.google.com/uc?id=1yuencIjC-Y6UNydOJjPlGrSf-LJ5pvVi" alt="team logo img"/>
        </div>     
      </div>
    </div>
  </div>
  </>
  );
}