// KISAC.LIVE V2 CLIENT
import React from "react";
import "../../App.css";
import {
  Grid,
  Segment,
  Container,
  Embed,
  Image,
  Label,
  Card,
  Divider,
} from "semantic-ui-react";
import HighlightList from "../stream/basketball_highlight";
import ReturnToPreviousPage from "./returntoprevious";
import { Link } from "react-router-dom";
// IMAGE IMPORT
import ScoreDisplay from "../etc/display/smallscoredisplay";
// MAIN FUNCTION
export default function Home() {
  return (
    <Container className="spaddingfix">
      <Grid>
        <Grid.Column width={10}>
            <Embed
            className="roundededge"
              id="O6Xo21L0ybE"
              placeholder="/images/image-16by9.png"
              source="youtube"
            />
        </Grid.Column>
        <ScoreDisplay/>
      </Grid>
    </Container>
  );
}

/*

      <div class="ui centered grid">
        <div class="one twelve wide column watch">
          
            
          </div>
          <Scoredisplay />
        </div>
      </div>

<div class="backtoschedules backBtnContainer">
      <Link to='/schedules'>
        <button class="ui grey basic button">
          <i class="left chevron icon"></i>
          Schedules
        </button>
      </Link>
      </div> 
*/
