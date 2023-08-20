// KISAC.LIVE V2 CLIENT// KISAC.LIVE V2 CLIENT

import React from "react";
import "../../App.css";
import { Dropdown, Menu, Container, Image, Button } from "semantic-ui-react";
import HighlightList from "../stream/badminton_highlight";
import TallAd from "../etc/advertisement/tall_ad";
import { Link } from "react-router-dom";

// IMAGE IMPORT
import { db } from "../../firebase/firebaseConfig";

// POST CARDS
import Post from '../home/postcard';
import Postpage from '../home/post';
// IMAGE IMPORT

// MAIN FUNCTION
export default function Home() {
  return(
  <>
 <div class="ui grid">
    <div class="three nine wide column">
    <Postpage/>
    </div>
    <TallAd/>
  </div>
  </>
  );
}
